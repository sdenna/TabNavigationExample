import {NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";

import {otherfriends} from '../variables/data';
import React, {useState} from 'react';


const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();


// function addFriend(newFriends){
//     setFriends(newFriends);
// }


function MainContainer() {
    

    const sampleFriends = [
        {
          id: 1,
          name: "Praneet",
          age: "17",
          favActivity: "Gaming a lot",
        },
        {
            id: 2,
            name: "Denna",
            age: "44",
            favActivity: "Working out",
          },
    ]

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === detailsName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size = {size} color = {color} />;
                    },
                })}
       
                >
                <Tab.Screen name = {homeName} component = {HomeScreen} />
                <Tab.Screen name = {detailsName} component = {DetailsScreen} />
                <Tab.Screen name = {settingsName} 
                    children={() => (
                        <SettingsScreen
                            friendsArr={otherfriends}
                        />
                     )}
                 />      
               
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default MainContainer;