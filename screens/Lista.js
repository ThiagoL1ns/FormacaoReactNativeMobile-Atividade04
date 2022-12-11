import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput, TextBase } from "react-native";
import axios from 'axios';
import { Avatar, ListItem, Button, Header } from 'react-native-elements';
import { ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function ListaContantos({ route, navigation }) {

    const [list, setList] = useState([])
    const refresh = useIsFocused()

    useEffect(() => {
        function consultarDados() {
            axios.get('http://professornilson.com/testeservico/clientes')
                .then(function (response) {
                    setList(response.data)
                }).catch(function (error) {
                    console.log(error);
                });
        }
        consultarDados();
    }, [refresh])

    return (
        <View style={{backgroundColor: '#ffffdd'}}> 
            <Header
                centerComponent={{
                    text: 'Lista de Contatos',
                    style: {
                        fontSize: 25,
                        color: '#fff',
                    }
                }}
                rightComponent={<Button title="+" titleStyle={{fontSize: 20}} onPress={() => navigation.navigate('NovoContato')}/>
}
            />
            <ScrollView>
                {
                    list.map((linha, indice) => (
                        <ListItem key={indice} bottomDivider onPress={() => navigation.navigate('Alterar',
                            {
                                id: linha.id,
                                nome: linha.nome,
                                email: linha.nome,
                                telefone: linha.telefone,
                            }
                        )}>
                            <Avatar source={{ uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" }} />
                            <ListItem.Content>
                                <ListItem.Title>{linha.nome}</ListItem.Title>
                                <ListItem.Subtitle>{linha.telefone}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>
    )
}