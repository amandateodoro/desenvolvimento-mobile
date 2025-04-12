import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return(
        <View>
            <Text><h1>Tela Inicial!</h1></Text>
            <Button title="Ir para Detalhes" onPress={()=>{navigation.navigate('Detalhes')}}></Button>
            <Button title="Ir para Sobre" onPress={()=>{navigation.navigate('Sobre')}}></Button>
        </View>
    )
}

