import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const ChangeTheme = () => {
    const { theme, toggleTheme, colors } = useContext(ThemeContext);

    return (
        <View style={[ style.container, {backgroundColor: colors.background} ]}>
            <Text style={[ style.text, {color: colors.text} ]}>
                Tema Atual: {theme === 'light' ? 'Claro' : 'Escuro'}
            </Text>

            <View style={{ marginTop: 10 }}>
                <Button title="Alterar Tema" onPress={toggleTheme}></Button>
            </View>
        </View>
    );
};

export default ChangeTheme;

const style = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        borderRadiu:5
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    }
});