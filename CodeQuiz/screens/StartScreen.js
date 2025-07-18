// src/screens/StartScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 CodeQuiz</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Início')}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#9d6298',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
