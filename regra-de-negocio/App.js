import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [idade, setIdade] = useState('');
  const [rendaMensal, setRendaMensal] = useState('');
  const [scoreCredito, setScoreCredito] = useState('');
  const [ehClienteVip, setEhClienteVip] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarEmprestimo = () => {
    const idadeNum = parseInt(idade);
    const rendaNum = parseFloat(rendaMensal);
    const scoreNum = parseInt(scoreCredito);
    const vip = ehClienteVip.toLowerCase() === 'sim';

    if (
      (idadeNum >= 18 && rendaNum >= 2000 && scoreNum >= 600) ||
      (vip && idadeNum >= 18)
    ) {
      setResultado("Empréstimo aprovado");
    } else {
      setResultado("Empréstimo negado");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulação de Empréstimo</Text>

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Renda Mensal"
        keyboardType="numeric"
        value={rendaMensal}
        onChangeText={setRendaMensal}
      />

      <TextInput
        style={styles.input}
        placeholder="Score de Crédito"
        keyboardType="numeric"
        value={scoreCredito}
        onChangeText={setScoreCredito}
      />

      <TextInput
        style={styles.input}
        placeholder="É cliente VIP? (sim/não)"
        value={ehClienteVip}
        onChangeText={setEhClienteVip}
      />

      <Button title="Verificar Empréstimo" onPress={verificarEmprestimo} />

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
});
