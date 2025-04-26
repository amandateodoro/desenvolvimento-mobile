import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatesEProps() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>States e Props</Text>
            <Text style={styles.text}>
                Props são dados passados de um componente pai para um componente filho.
                State representa dados internos de um componente que podem mudar com o tempo.
                Ambos são essenciais para tornar os componentes interativos e dinâmicos.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});
