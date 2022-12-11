import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput } from "react-native";
import axios from 'axios';
import { Avatar, ListItem, Button, Header} from 'react-native-elements';
import FlashMessage, { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

export default function Cadastro({ route, navigation }) {

    const [getEmail, setEmail] = useState()
    const [getSenha, setSenha] = useState()

    async function CadastrarUsuario() {
        await axios.post('http://192.168.100.153:5000/index', {
            email: getEmail,
            senha: getSenha,
        }).then(function (response) {
            showMessage({
                message: "Cadastrado com Sucesso",
                type: "success",
            });
            
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffdd'
        }}>
            <View style={{ flex: 1 }}>
                <Header
                    leftComponent=
                    {<Button
                        icon={
                            <Icon
                              name="arrow-left"
                              size={15}
                              color="white"
                            />
                        }
                        onPress={() => navigation.navigate('Index')}
                    />}
                    centerComponent={{
                        text: 'Cadastro De Usuário',
                        style: {
                            fontSize: 25,
                            color: '#fff',
                        }
                    }}

                />
            </View>
            <View style={{
                flex: 2,
                alignItems: "center",
                gap: 10
            }}>

                <Text style={{ fontSize: 30 }}>Digite seu Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
                />
                <Text style={{ fontSize: 30 }}>Digite sua Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setSenha(text)}
                    secureTextEntry={true}
                    value={getSenha}
                />
                <Text></Text>
                <Button
                    buttonStyle={{ backgroundColor: "#0088ff", width: 300 }}
                    title="Salvar"
                    onPress={()=>{CadastrarUsuario(), navigation.navigate('Index')}}   
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
''