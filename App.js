import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import  Login  from './src/screens/Login' 

export default function App() {
  return (
    <NavigationContainer>
    <MainStackNavigator/>

    </NavigationContainer>
  );
}


