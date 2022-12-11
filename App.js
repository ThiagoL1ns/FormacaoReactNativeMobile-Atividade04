import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Index from "./screens/Index";
import Cadastro from "./screens/Cadastro";
import NovoContato from "./screens/NovoContato";
import AlterarContato from "./screens/Alterar";
import Lista from "./screens/Lista";

const Stack = createNativeStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{headerShown:false}}/>
        <Stack.Screen name="Lista" component={Lista} options={{headerShown:false}}/>      
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/> 
        <Stack.Screen name="NovoContato" component={NovoContato} options={{headerShown:false}}/>
        <Stack.Screen name="Alterar" component={AlterarContato} options={{headerShown:false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App