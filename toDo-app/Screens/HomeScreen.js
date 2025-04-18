import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return(
        <View>
            <Text><h1>App: To Do List</h1></Text>
            <Button title="Nova Tarefa" onPress={()=>{navigation.navigate('Adicionar')}}></Button>
            <Button title="Listar Tarefas" onPress={()=>{navigation.navigate('Listar')}}></Button>
        </View>
    )
}

