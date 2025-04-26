import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EstilizacaoSimples() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estilização Simples</Text>
            <Text style={styles.text}>
                A estilização em React Native é feita usando objetos JavaScript parecidos com CSS.
                Usamos o StyleSheet para criar estilos reutilizáveis com propriedades como color, fontSize e margin.
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
