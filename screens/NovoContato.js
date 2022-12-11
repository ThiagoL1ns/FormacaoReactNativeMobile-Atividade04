import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput } from "react-native";
import axios from 'axios';
import { Avatar, ListItem, Button, Header } from 'react-native-elements';
import { ScrollView } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NovoContato({ route, navigation }) {

    const [getNome, setNome] = useState()
    const [getEmail, setEmail] = useState()
    const [getTelefone, setTelefone] = useState()

    async function inserirDados() {
        await axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone,
        }).then(function (response) {
            showMessage({
                message: "Registro Salvo com Sucesso",
                type: "success",
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: "column",
            gap: 10,
            backgroundColor: '#ffffdd'
        }}>
            <Header
                centerComponent={{
                    text: 'Inserir Dados', style: {
                        fontSize: 25,
                        color: '#fff',
                    }
                }}
                leftComponent=
                {<Button
                    icon={
                        <Icon
                          name="arrow-left"
                          size={15}
                          color="white"
                        />
                    }
                    onPress={() => navigation.navigate('Lista')}
                />}
            />
            <View style={{ flex: 4,justifyContent:"center", alignItems: "center", gap: 10}}>
                <Text style={{fontSize: 20}}>Digite seu nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setNome(text)}
                    value={getNome}
                />
                <Text></Text>
                <Text style={{fontSize: 20}}>Digite seu Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
                />
                <Text></Text>
                <Text style={{fontSize: 20}}>Digite seu Telefone</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setTelefone(text)}
                    value={getTelefone}
                />
                <Text></Text>
                <Button
                    buttonStyle={{width: 300, height: 50}}
                    title="Salvar Dados"
                    onPress={() => inserirDados()}
                />
            </View>
            <FlashMessage position="top" />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 15,
        backgroundColor: '#fff'
    },
});