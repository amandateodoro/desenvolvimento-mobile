import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const TableExample = () => {
    const [data, setData] = useState([
        { id: '1', name: 'Amanda', salary: '1000.00' },
        { id: '2', name: 'Jaqueline', salary: '1400.00' },
        { id: '3', name: 'Henrique', salary: '1400.00' },
        { id: '4', name: 'Stela', salary: '1400.00' },
        { id: '5', name: 'Giulia', salary: '1400.00' },
    ]);

    const renderItem = ({ item }) => (
        <View style={ styles.row }>
            <Text style={ styles.cell }>{item.id}</Text>
            <Text style={ styles.cell }>{item.name}</Text>
            <Text style={ styles.cell }>{item.salary}</Text>
        </View>
    );

    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Text style={ styles.headerText }>ID</Text>
                <Text style={ styles.headerText }>Nome</Text>
                <Text style={ styles.headerText }>Salário</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={ item => item.id }
            />
        </View>
    )
}; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 16,
    },

    header: {
        flexDirection: 'row',
        backgroundColor: '#A072F5',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },

    headerText: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    row: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        elevator: 2,
        shadowColor: "#000",
        shadowOffSet: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },

    cell: {
        flex: 1,
        textAlign: 'center',
        color: "#333",
    },
  });

export default TableExample;