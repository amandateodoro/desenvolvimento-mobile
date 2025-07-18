import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { score, answers } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Você acertou {score} de {answers.length}
      </Text>

      {answers.map((a, i) => (
        <View key={i} style={styles.answerBox}>
          <Text style={styles.questionText}>
            {i + 1}. {a.question}
          </Text>
          <Text style={styles.text}>Selecionado: {a.options[a.selected]}</Text>
          <Text style={styles.text}>Correto: {a.options[a.answer]}</Text>
          <Text style={{ color: a.isCorrect ? 'lime' : 'red' }}>
            {a.isCorrect ? 'Correto' : 'Errado'}
          </Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Start')}
      >
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
  answerBox: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: { color: '#ccc', marginBottom: 5 },
  questionText: { fontWeight: 'bold', color: '#9d6298', marginBottom: 5 },
  button: {
    backgroundColor: '#9d6298',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18 },
});
