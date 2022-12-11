import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput } from "react-native";
import axios from 'axios';
import { Avatar, ListItem, Button, Header } from 'react-native-elements';
import { ScrollView } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AlterarContato({ route, navigation }) {

    const [getId, setId] = useState()
    const [getNome, setNome] = useState()
    const [getEmail, setEmail] = useState()
    const [getTelefone, setTelefone] = useState()


    useEffect(() => {
        if (route.params) {
            const { nome } = route.params
            const { email } = route.params
            const { telefone } = route.params
            const { id } = route.params

            setId(id)
            setNome(nome)
            setEmail(email)
            setTelefone(telefone)
        }

    }, [])

    function alterarDados() {
        axios.put("http://professornilson.com/testeservico/clientes/" + getId,
            {
                nome: getNome,
                email: getEmail,
                telefone: getTelefone,
            }).then(function (response) {
                showMessage({
                    message: "Registro Alterado com Sucesso",
                    type: "success",
                });
            }).catch(function (error) {
                console.log(error);
            });
    }

    function excluirDados() {
        axios.delete("http://professornilson.com/testeservico/clientes/" + getId).then(
            function (response) {
                showMessage({
                    message: "Registro Excluido com Sucesso",
                    type: "danger",
                });
                setNome(null)
                setEmail(null)
                setTelefone(null)
                setId(null)
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <View style={{flex:1,backgroundColor: '#ffffdd' }}>
            <Header
                centerComponent={{
                    text: 'Alterar Dados', style: {
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
            <View style={{ flex: 4, justifyContent: "center", alignItems: "center", gap: 10 }}>
                <FlashMessage position="top" />

                <Text style={{ fontSize: 20 }}>Digite seu nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setNome(text)}
                    value={getNome}
                />
                <Text style={{ fontSize: 20 }}>Digite seu Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
                />

                <Text style={{ fontSize: 20 }}>Digite seu Telefone</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setTelefone(text)}
                    value={getTelefone}
                />

                <Text></Text>
                <Button
                    buttonStyle={{ width: 300 }}
                    title="Alterar"
                    onPress={() => alterarDados()}
                />
                <Text></Text>
                <Button
                    buttonStyle={{ width: 300 }}
                    title="Excluir"
                    onPress={() => excluirDados()}
                />
            </View>
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