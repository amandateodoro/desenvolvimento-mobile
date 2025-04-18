import React from "react";
import { View, Text, Button } from "react-native";

export default function ListTaskScreen({ navigation }) {
    return(
        <View>
            <Text><h1>Lista de tarefas</h1></Text>
            <Button title="Voltar" onPress={()=>{navigation.goBack()}}></Button>
        </View>
    )
}