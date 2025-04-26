import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ComponentesBasicos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Componentes Básicos</Text>
            <Text style={styles.text}>
                Os componentes básicos do React Native incluem View, Text, Image, ScrollView e TextInput.
                Eles formam a base visual da aplicação e funcionam de maneira semelhante ao HTML, mas com sintaxe própria.
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
