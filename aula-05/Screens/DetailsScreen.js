import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
    return(
        <View>
            <Text><h1>Tela Detalhes!</h1></Text>
            <Button title="Voltar" onPress={()=>{navigation.goBack()}}></Button>
        </View>
    )
}
  