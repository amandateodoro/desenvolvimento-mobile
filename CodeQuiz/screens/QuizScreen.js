import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { quizData } from '../data/questions';

export default function QuizScreen({ route, navigation }) {
  const { category } = route.params;
  const questions = quizData[category];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = questions[currentIndex];

  function handleAnswer(selectedIndex) {
    const isCorrect = selectedIndex === question.answer;
    if (isCorrect) setScore(score + 1);

    setAnswers([
      ...answers,
      {
        question: question.question,
        options: question.options,
        selected: selectedIndex,
        answer: question.answer,
        isCorrect,
      },
    ]);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Resultado', {
        score,
        answers: [
          ...answers,
          {
            question: question.question,
            options: question.options,
            selected: selectedIndex,
            answer: question.answer,
            isCorrect,
          },
        ],
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.question}>{question.question}</Text>

      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswer(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.progress}>
        Pergunta {currentIndex + 1} de {questions.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center' },
  category: { fontSize: 20, color: '#9d6298', fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  question: { fontSize: 24, color: '#fff', marginBottom: 20, textAlign: 'center' },
  optionButton: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  optionText: { color: '#fff', fontSize: 18, textAlign: 'center' },
  progress: { color: '#ccc', marginTop: 20, textAlign: 'center' },
});
