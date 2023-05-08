import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './app/navigation/MainContainer';
import { Context } from './app/config/context';


export default function App() {

  const initialFriends = [
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
  const [context, setContext] = useState(initialFriends);
  
  return (
    <Context.Provider value={[context, setContext]}>
      <MainContainer />
    </Context.Provider>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
