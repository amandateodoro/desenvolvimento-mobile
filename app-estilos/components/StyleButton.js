import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


/**
 * Componente de botão estilizado
 * @param {{ title: string, onPress: () => void }} props
 */
const StyledButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={estilos.botao} onPress={onPress}>
            <Text style={estilos.botaoTexto}>{title}</Text>
        </TouchableOpacity>
    )
};

export default StyledButton;

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#fac7b4',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20  
    },
    botaoTexto: {
        color: '#646060',
        fontSize: 16,
        fontWeight: 'bold'
    }
});