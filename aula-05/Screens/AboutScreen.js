import React from "react";
import { View, Text, Button } from "react-native";

export default function AboutScreen({ navigation }) {
    return(
        <View>
            <Text><h1>Tela Sobre!</h1></Text>
            <Button title="Voltar" onPress={()=>{navigation.navigate.goBack()}}></Button>
        </View>
    )
}