import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Bem-vindo ao App de Aprendizado!</Text>
            <Text style={styles.description}>
                Este aplicativo tem como objetivo te ensinar os fundamentos básicos do React Native, 
                uma biblioteca para criação de aplicativos para dispositivos móveis usando JavaScript e React.
            </Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Ir para Lições"
                    color="#3d3d3d"
                    onPress={() => navigation.navigate('Licoes')}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#121212",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        color: "#CCCCCC",
        textAlign: "center",
        marginBottom: 30,
    },
    buttonContainer: {
        marginBottom: 15,
    },
});
