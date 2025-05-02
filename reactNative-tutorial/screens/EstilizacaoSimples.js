import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function EstilizacaoSimples() {
    const [color, setColor] = useState("#3498db");
    const [codeVisible, setCodeVisible] = useState(false);

    const handlePress = () => {
        const newColor = color === "#3498db" ? "#e74c3c" : "#3498db";
        setColor(newColor);
        setCodeVisible(true);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Estilização Simples</Text>
                <Text style={styles.text}>
                    A estilização em React Native é feita usando objetos JavaScript parecidos com CSS.
                    Usamos o StyleSheet para criar estilos reutilizáveis com propriedades como {"\n"}
                    'color', 'fontSize' e 'margin'.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Exemplo Interativo</Text>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: color }]}
                    onPress={handlePress}
                >
                    <Text style={styles.buttonText}>Clique para mudar a cor</Text>
                </TouchableOpacity>

                {codeVisible && (
                    <View style={styles.codeContainer}>
                        <Text style={styles.code}>
{`<TouchableOpacity
  style={[styles.button, { backgroundColor: color }]}
  onPress={handlePress}
>
  <Text style={styles.buttonText}>Clique para mudar a cor</Text>
</TouchableOpacity>`}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#121212",
        padding: 20,
    },
    card: {
        backgroundColor: "#1e1e1e",
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        color: "#FFFFFF",
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        color: "#CCCCCC",
        textAlign: "center",
    },
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    codeContainer: {
        backgroundColor: "#2b2b2b",
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
    },
    code: {
        color: "#9cdcfe",
        fontFamily: "monospace",
        fontSize: 13,
    },
});
