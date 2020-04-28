import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Alert, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import Polyline from '@mapbox/polyline';
import Header from '../components/Header';

const locations = require('../arrays/locations.json')
const { width, height } = Dimensions.get('screen')

const helpAlert = () =>
    Alert.alert(
        "Find Local Vegan Cafe's, Restaurants, Public Transport, & Community Parks \n \n Click a Pin for More Information On a Location",
        "My Alert Msg"
        [
            {text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        {cancelable: false}
    );

export default class MapPage extends React.Component {
    state = {
        latitude: null,
        longitude: null,
        locations: locations
    }

    async componentDidMount(){
        const { status } = await Permissions.getAsync(Permissions.LOCATION)

        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude }}) => this.setState({ latitude, longitude }, this.mergeCoords),
            (error) => console.log('Error:', error)
        )

        const { locations: [ sampleLocation ] } = this.state

        this.setState({
            desLatitude: sampleLocation.coords.latitude,
            desLongitude: sampleLocation.coords.longitude
        }, () => console.log('this state', this.state), this.mergeCoords)
    }

    mergeCoords = () => {
        const {
            latitude,
            longitude,
            desLatitude, //Destination Lat
            desLongitude //Destination Long
        } = this.state

        const hasStartAndEnd = latitude !== null && desLatitude !== null

        if (hasStartAndEnd) {
            const concatStart = `${latitude},${longitude}`
            const concatEnd = `${desLatitude},${desLongitude}`
            this.getDirections(concatStart, concatEnd)
        }
    }

    async getDirections(startLoc, desLoc){ //Take starting location and destination
        try {
            //Request Google API
            const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyBZ9yalH7Q_7orx--wVA751XL_Im4U-OvQ`)
            //Get Responce + Parse
            const respJson = await resp.json();
            const response = respJson.routes[0]
            const distanceTime = response.legs[0]
            const distance  = distanceTime.distance.text
            const time  = distanceTime.duration.text
            //Decode Google Responce
            const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            const coords = points.map(point => {
                return {
                    latitude : point[0],
                    longitude : point[1]
                }
            })
            this.setState({ coords, distance, time })
        }
            catch(error) {
                console.log('Error: ', error)
            }
        }

    onMarkerPress = location => () => {
        const { coords: { latitude, longitude }} = location
        this.setState({
            destination: location,
            desLatitude: latitude,
            desLongitude: longitude
        }, this.mergeCoords)
    }
    
    renderMarkers = () => {
        const { locations } = this.state
        return (
            <View>
                {
                    locations.map((location, idx) => {
                        const {
                            coords: { latitude, longitude },
                            name,
                            type
                        } = location
                        return (
                            <Marker
                            key={idx}
                            title={name}
                            description={type}
                            pinColor={'green'}
                            coordinate={{ latitude, longitude }}
                            onPress={this.onMarkerPress(location)}
                        />
                        )
                    })
                }
            </View>
        )
    }

    render() {
        const { 
            time,
            coords,
            distance, 
            latitude,
            longitude,
            destination
        } = this.state

        if (latitude) {
        return (
                <MapView 
                showsUserLocation
                style={{ flex: 1 }}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    latitudeDelta: 0.0421
                }}
                >
                    <View>
                        <Header title="EnviroMap" /> 
                            <Text style={{ fontWeight: 'bold', paddingTop: 10, paddingLeft: 10 }}>Time: {time}</Text>
                            <Text style={{ fontWeight: 'bold', paddingTop: 10, paddingLeft: 10 }}>Distance: {distance}</Text>
                    </View>
                    {this.renderMarkers()}
                    <MapView.Polyline
                        strokeWidth ={2}
                        strokeColor="green"
                        coordinates={coords}
                        
                        />
                        
                        <Image 
                        source={{ uri: destination && destination.image_url }}
                        style={{
                            flex: 1,
                            width: width * 0.8,
                            alignSelf: 'center',
                            height: height * 0.15,
                            position: 'absolute',
                            bottom: height * 0.05
                        }} 
                        />
                        <Button title={"Help"} onPress={helpAlert} />
                </MapView>
        );
    }
    return (
        <View style={StyleSheet.mapStyle}>
            <Text>Permissions Required!</Text>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: 70,
        paddingTop: 20,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    }
})