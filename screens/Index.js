import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput, TextBase } from "react-native";
import axios from 'axios';
import { Avatar, ListItem, Button, Header } from 'react-native-elements';

export default function Index({ route, navigation }) {

return (
    <View style={{
        flex: 1,
        flexDirection: "column",
        gap: 10,
        padding: 20,
        alignItems: "center",
        backgroundColor: '#ffffdd'
    }}>
        <View style={{ flex: 2, paddingTop: 20 }}>
            <Avatar
                size='xlarge'
                rounded
                source={{
                    uri:
                        'https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg',
                }}
            />
        </View>
        <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 30 }}>Login</Text>
            <TextInput
                style={styles.input}
            />
            <Text style={{ fontSize: 30 }}>Senha</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
            />
        </View>
        <View style={{ flex: 1, gap: 5 }}>
            <Button
                onPress={() => navigation.navigate('Lista')}
                buttonStyle={{ backgroundColor: "#0088ff", width: 300 }}
                title="Login"
                titleStyle={{ fontSize: 25 }}
            />
            <Text></Text>
            <Button
                onPress={() => navigation.navigate('Cadastro')}
                buttonStyle={{ backgroundColor: "#ff0000", width: 300 }}
                title="Cadastre-se"
                titleStyle={{ fontSize: 25 }}
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