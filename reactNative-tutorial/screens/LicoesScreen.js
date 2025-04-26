// screens/LicoesScreen.js
import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

export default function LicoesScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Lições de React Native</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="O que é React Native"
                    color="#3d3d3d"
                    onPress={() => navigation.navigate('Explicacao')}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Componentes Básicos"
                    color="#3d3d3d"
                    onPress={() => navigation.navigate('ComponentesBasicos')}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="States e Props"
                    color="#3d3d3d"
                    onPress={() => navigation.navigate('StatesProps')}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Estilização Simples"
                    color="#3d3d3d"
                    onPress={() => navigation.navigate('EstilizacaoSimples')}
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
        fontSize: 24,
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "bold",
    },
    buttonContainer: {
        marginBottom: 15,
    },
});
