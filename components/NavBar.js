import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomePage';
import PlantScreen from '../screens/PlantTracker';
import SettingsScreen from '../screens/Settings';
import MapScreen from '../screens/MapPage';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator initialRouteName="Feed" tabBarOptions={{activeTintColor:'#9ACD32',}}>
      <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
          ), 
        }}
      />
      <Tab.Screen name='PlantTracker' 
        component={PlantScreen}
        options={{ tabBarLabel:'Tracker', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="leaf" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name='MapPage' 
        component={MapScreen}
        options={{ tabBarLabel: 'Map', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="map" color={color} size={size} />
          ), 
        }}
      />
    </Tab.Navigator>
  );
}

export default NavBar;