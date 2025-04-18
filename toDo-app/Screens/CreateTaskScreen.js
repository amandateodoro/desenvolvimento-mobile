import React from "react";
import { View, Text, Button } from "react-native";

export default function CreateTaskScreen({ navigation }) {
    return(
        <View>
            <Text><h1>Criar nova tarefa</h1></Text>
            <Button title="Voltar" onPress={()=>{navigation.goBack()}}></Button>
        </View>
    )
}