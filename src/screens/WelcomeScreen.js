import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Avatar, TextInput, Button, Headline } from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
    <Appbar.Header>
        <Appbar.BackAction onPress={()=>navigation.goBack()}/>
        <Appbar.Content title="Bienvenido" subtitle="" />
    </Appbar.Header>
    <View style={styles.container}>
            <Headline>Hola Buen hombre</Headline>
        </View>

    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})