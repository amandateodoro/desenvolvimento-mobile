import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Image } from "react-native";

export default function ComponentesBasicos() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Componentes Básicos</Text>

            <View style={styles.card}>
                <Text style={styles.text}>
                    Os componentes básicos do React Native incluem View, Text, Image, ScrollView e TextInput.
                    Eles formam a base visual da aplicação e funcionam de maneira semelhante ao HTML, mas com sintaxe própria.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>• View: Um elemento retangular que funciona como um contêiner para outros componentes, definindo o layout e a organização da interface. </Text>
                <Text style={styles.subTitle}>Exemplo:</Text>
                <Text style={styles.code}>
{`<View style={{ backgroundColor: '#333', padding: 10 }}>
  <Text style={{ color: '#fff' }}>Dentro de uma View</Text>
</View>`}
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>• Text: Permite exibir texto, com opções de formatação e estilização</Text>
                <Text style={styles.subTitle}>Exemplo:</Text>
                <Text style={styles.code}>
{`<Text style={{ fontSize: 18, color: '#fff' }}>
  Isso é um texto em React Native
</Text>`}
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>• Image: Exibe imagens de diferentes formatos, como PNG, JPG ou GIF</Text>
                <Text style={styles.subTitle}>Exemplo:</Text>
                <Text style={styles.code}>
{`<Image
  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
  style={{ width: 50, height: 50 }}
/>`}
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>• ScrollView: Um contêiner que permite a rolagem vertical ou horizontal de conteúdo, ideal para telas com muito conteúdo. </Text>
                <Text style={styles.subTitle}>Exemplo:</Text>
                <Text style={styles.code}>
{`<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScrollView>`}
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.text}>• TextInput: Um componente que permite ao usuário inserir texto, como em campos de formulários. </Text>
                <Text style={styles.subTitle}>Exemplo:</Text>
                <Text style={styles.code}>
{`<TextInput
  placeholder="Digite algo"
  placeholderTextColor="#999"
  style={{ backgroundColor: '#fff', padding: 10 }}
/>`}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 16,
        color: '#00ADB5',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    code: {
        fontFamily: 'monospace',
        backgroundColor: '#2E2E2E',
        color: '#00FF9C',
        padding: 10,
        borderRadius: 5,
        fontSize: 14,
    },
});
