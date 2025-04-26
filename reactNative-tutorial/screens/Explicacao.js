import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Explicacao() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>O que é React Native?</Text>
            <Text style={styles.text}>
            React Native (também conhecido como RN) é uma estrutura de aplicativo móvel popular, baseada na linguagem JavaScript, 
            que permite criar aplicativos móveis renderizados nativamente para iOS e Android. A estrutura permite criar um aplicativo 
            para várias plataformas usando a mesma base de código.
            </Text>
            <Text style={styles.text}>
            O React Native foi lançado em 2015 pelo Facebook como um projeto de código aberto. Em apenas alguns anos, tornou-se uma das 
            principais soluções adotadas no desenvolvimento móvel, e hoje é utilizada por aplicativos mundialmente famosos como o Discord, 
            Tesla, Instagram, Facebook e entre outros.
            </Text>
            <Text style={styles.text}>
            Dentre as várias razões por trás do sucesso do React Native, a primeira delas é que as empresas podem criar o código apenas uma 
            vez e usá-lo para alimentar seus aplicativos iOS e Android - e isso se traduz em uma enorme economia de tempo e recursos.
            </Text>
            <Text style={styles.text}>
            Em segundo lugar, o React Native foi construído com base no React – uma biblioteca JavaScript que já era muito popular 
            quando o framework mobile foi lançado. 
            </Text>
            <Text style={styles.text}>
            Em terceiro lugar, a estrutura capacitou as pessoas desenvolvedoras de Front-end, que anteriormente só podiam trabalhar 
            com tecnologias baseadas na web, para criar aplicativos robustos e prontos para produção destinada às plataformas móveis.
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
        textAlign: 'justify',
    },
});
