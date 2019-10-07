import React, { useState, useEffect } from 'react';
import { Platform, AsyncStorage, View, KeyboardAvoidingView, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';
import api from '../services/api';

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(() => {
            if(user) {
                navigation.navigate('List');
            }
        })
    }, []);

    async function handleSubmit() {

        const response = await api.post('/sessions', {
            email
        });

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);

        navigation.navigate('List');

    }

    return (
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
            <Image source={logo} />
            <View style={styles.form}>
                <Text styles={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setEmail(email)}
                />
                <Text styles={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChangeText={setTechs(techs)}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>
            
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop:30
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal:20,
        fontSize:16,
        color:"#444",
        height:44,
        marginBottom:20,
        borderRadius:2
    },
    button: {
        height:42,
        backgroundColor: "#f05a45",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2
    },
    buttonText: {
        color:'#FFF',
        fontWeight: 'bold',
        fontSize:16
    }
});