import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { quizData } from '../data/questions';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CodeQuiz: Bem-vindo ao quiz educativo sobre tecnologias da computação!</Text>
      <Text style={styles.subtitle}>Escolha uma categoria:</Text>
      {Object.keys(quizData).map((cat) => (
        <TouchableOpacity
          key={cat}
          style={styles.button}
          onPress={() => navigation.navigate('Quiz', { category: cat })}
          
        >
          <Text style={styles.buttonText}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center' },
  title: { fontSize: 26, color: '#fff', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  subtitle: { fontSize: 18, color: '#ccc', marginBottom: 15, textAlign: 'center' },
  button: {
    backgroundColor: '#9d6298',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
});
