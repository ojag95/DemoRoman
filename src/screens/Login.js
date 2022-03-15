import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Avatar, TextInput, Button, Headline } from 'react-native-paper';

const Login = ({navigation}) => {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');


    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title="Iniciar Sesión" subtitle="Ingrese sus credenciales" />
            </Appbar.Header>
            <View style={styles.container}>
                <View style={[styles.container, { alignItems: 'center' }]}>
                    <Avatar.Image size={128} source={require('../../assets/profile.jpg')} />
                    <Headline>Iniciar Sesión</Headline>
                </View>
                <View style={styles.container}>
                    <TextInput
                        label="Email"
                        value={correo}
                        onChangeText={text => setCorreo(text)}
                        style={styles.textMargin}
                    />
                    <TextInput
                        label="Contraseña"
                        value={contrasenia}
                        secureTextEntry
                        onChangeText={text => setContrasenia(text)}
                        style={styles.textMargin}
                    />
                    <Button icon="camera" mode="contained" onPress={() => navigation.navigate('WelcomeScreen')}>
                        Iniciar sesion
                    </Button>
                </View>

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    textMargin: { marginVertical: 5 }
})