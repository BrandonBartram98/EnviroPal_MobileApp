import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Modal, Alert} from 'react-native';
import Header from '../components/Header';
import FactMain from '../components/FactMain';
import TreeMenu from '../components/TreeMenu';

function HomePage() {
    const [modalTransport, setModalTransport] = useState(false);
    const [modalFood, setModalFood] = useState(false);
    const [modalWaste, setModalWaste] = useState(false);
    const [modalProduce, setModalProduce] = useState(false);
    const [modalElectronics, setModalElectronics] = useState(false);
    const [modalWildlife, setModalWildlife] = useState(false);
    return (
        <View style={styles.container}>
            <Header title="Home" />
            <Modal animationType='slide'
            transparent={true}
            visible={modalTransport}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>TRANSPORT</Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    By taking public transport, you can significatly lower greenhouse gas emissions.
                    Heavy rail transit like subways produce on average 76% lower greenhouse gas emissions
                    per passenger mile. Light weight rail produces 62% less and taking the bus produces 33% less.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Sharing rides through public transportation can save fuel. It also decreases the need for constructing
                 more transportation infrastructure, manufacturing new vehicles, and extracting more fossil fuels, meaning
                  further energy savings and fewer environmental impacts. Congestion relief from transit also saves fuel as
                    vehicles stuck in gridlock waste fuel and generate emissions.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                In addition to its environmental benefits, transit serves several other public purposes, including 
                affordable mobility, congestion relief, and economic development.
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: https://www.transit.dot.gov/regulations-and-guidance/environmental-programs/transit-environmental-sustainability/transit-role
                </Text>
                <TouchableOpacity style={{}} onPress={() => {setModalTransport(!modalTransport);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>
            
        <Modal animationType='slide'
            transparent={true}
            visible={modalFood}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>FOOD</Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: 
                </Text>
                <TouchableOpacity style={{}} onPress={() => {setModalFood(!modalFood);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal animationType='slide'
            transparent={true}
            visible={modalWaste}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>WASTE</Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: 
                </Text>
                <TouchableOpacity style={{}} onPress={() => {setModalWaste(!modalWaste);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal animationType='slide'
            transparent={true}
            visible={modalProduce}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>PRODUCE</Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: 
                </Text>
                <TouchableOpacity style={{}} onPress={() => {setModalProduce(!modalProduce);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal animationType='slide'
            transparent={true}
            visible={modalElectronics}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>ELECTRONICS</Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: 
                </Text>
                <TouchableOpacity style={{}} onPress={() => {setModalElectronics(!modalElectronics);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal animationType='slide'
            transparent={true}
            visible={modalWildlife}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.modalView}>
                <Text style={{fontWeight: "bold", paddingBottom: 5}}>WILDLIFE</Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                    Test
                </Text>
                <Text style={{textAlign: 'center', paddingTop: 10}}>
                Source: 
                </Text>
                <TouchableOpacity style={{}} onPress={() => {setModalWildlife(!modalWildlife);}}>
                    <Text style={{fontSize: 30, color: 'red', paddingTop: 10}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <FactMain style={styles.factsSections}></FactMain>
        </View>
            <View>
            <Text style={styles.sustainableText}>How Can I Live More Sustainably?</Text>
            </View>
        <View style={{ backgroundColor: 'lightblue', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalTransport(!modalTransport);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Transport</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalFood(!modalFood);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalWaste(!modalWaste);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Waste</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalProduce(!modalProduce);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Produce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalElectronics(!modalElectronics);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                setModalWildlife(!modalWildlife);
              }}>
                <Text style={{ fontWeight: "bold", backgroundColor: 'white', flex: 1, textAlignVertical: 'center', textAlign: 'center', paddingTop: '45%' }}>Wildlife</Text>
            </TouchableOpacity>
          </View>

        </View>
            </View>
    );
};

const styles = StyleSheet.create({
    sustainableText: {
        justifyContent: 'center',
        alignItems: 'center',

        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: '5%',
        backgroundColor: 'black'
    },
    buttons: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderWidth: 0.5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

export default HomePage;