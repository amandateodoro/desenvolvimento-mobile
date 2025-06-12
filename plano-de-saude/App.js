import { StatusBar } from 'expo-status-bar';
import React, { use, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [idade, setIdade] = useState('');
  const [planoTipo, setPlanoTipo] = useState('');
  const [planoAtivo, setPlanoAtivo] = useState('');
  const [periodoCarencia, setPeriodoCarencia] = useState('');
  const [doencaCronica, setDoencaCronica] = useState('');
  const [quantDependentes, setQuantDependentes] = useState('');
  const [consultaLiberada, setConsultaLiberada] = useState('');
  const [faturaAtraso, setFaturaAtraso] = useState('');
  const [estado, setEstado] = useState('');
  const [resultado, setResultado] = useState('');
  const [verificado, setVerificado] = useState(false);

  const limparCampos = () => {
    setIdade('');
    setPlanoTipo('');
    setPlanoAtivo('');
    setPeriodoCarencia('');
    setDoencaCronica('');
    setQuantDependentes('');
    setConsultaLiberada('');
    setFaturaAtraso('');
    setEstado('');
    setResultado('');
    setVerificado(false);
  };

  const verificarPlanoDeSaude = () => {
    if (verificado) {
      limparCampos();
      return;
    }

    if (
    idade.trim() === '' &&
    estado.trim() === '' &&
    planoTipo.trim() === '' &&
    planoAtivo.trim() === '' &&
    periodoCarencia.trim() === '' &&
    doencaCronica.trim() === '' &&
    quantDependentes.trim() === '' &&
    consultaLiberada.trim() === '' &&
    faturaAtraso.trim() === ''
  ) {
    setResultado("Por favor, preencha os campos!");
    return;
  }
  
    const idadeNum = parseInt(idade);
    const planoTipoInfo = planoTipo;
    const planoAtivoNum = parseInt(planoAtivo);
    const periodoCarenciaInfo = periodoCarencia;
    const doencaCronicaInfo = doencaCronica;
    const quantDependentesNum = parseInt(quantDependentes);
    const consultaLiberadaInfo = consultaLiberada;
    const faturaAtrasoInfo = faturaAtraso;
    const estadoInfo = estado;

    if (
      (idadeNum >=18 || idadeNum <=65) && 
      (planoTipoInfo === 'Premium' || planoTipoInfo ==='Essencial' && planoAtivoNum >=12) && 
      (periodoCarenciaInfo === 'sim') && 
      (doencaCronicaInfo === 'não') && 
      (quantDependentesNum <= 3) && 
      (consultaLiberadaInfo === 'sim') && 
      (faturaAtrasoInfo === 'não') && 
      (estadoInfo === 'São Paulo' || 'Minas Gerais' || 'Paraná')
    ) {
      setResultado("Parabéns, você está qualificado para o benefício extra do seu Plano de Saúde!")
    } else{
      setResultado("Desculpe, você não está qualificado para o benefício extra do seu Plano de Saúde.")
    }

    setVerificado(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Verificação de benefício extra no Plano de Saúde</Text>

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
      style={styles.input}
      placeholder='Estado'
      value={estado}
      onChangeText={setEstado}
      />

      <TextInput
      style={styles.input}
      placeholder='Tipo de plano (Básico, Essencial, Premium)'
      value={planoTipo}
      onChangeText={setPlanoTipo}
      />

      <TextInput
      style={styles.input}
      placeholder='Há quantos meses o plano está ativo?'
      keyboardType="numeric"
      value={planoAtivo}
      onChangeText={setPlanoAtivo}
      />

      <TextInput
      style={styles.input}
      placeholder='Já passou pelo período de carência (sim/não)'
      value={periodoCarencia}
      onChangeText={setPeriodoCarencia}
      />

      <TextInput
      style={styles.input}
      placeholder='Possui doenças crônicas cadastradas (sim/não)'
      value={doencaCronica}
      onChangeText={setDoencaCronica}
      />

      <TextInput
      style={styles.input}
      placeholder='Possui quantos dependentes incluidos no plano?'
      keyboardType="numeric"
      value={quantDependentes}
      onChangeText={setQuantDependentes}
      />

      <TextInput
      style={styles.input}
      placeholder='Teve consultas liberadas nos últimos 6 meses (sim/não)?'
      value={consultaLiberada}
      onChangeText={setConsultaLiberada}
      />

      <TextInput
      style={styles.input}
      placeholder='Existe alguma fatura em atraso (sim/não)'
      value={faturaAtraso}
      onChangeText={setFaturaAtraso}
      />

      <TouchableOpacity style={styles.botao} onPress={verificarPlanoDeSaude}>
        <Text style={styles.textoBotao}>{verificado ? "Verificar novamente" : "Verificar"}</Text>
      </TouchableOpacity>

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}

      <StatusBar style="auto" />
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
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  input: {
    height: 50,
    borderColor: '#444',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: '#FFFFFF',
    backgroundColor: '#1E1E1E',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#BB86FC',
  },
  botao: {
  backgroundColor: '#BB86FC',
  paddingVertical: 15,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
},
textoBotao: {
  color: '#121212',
  fontSize: 16,
  fontWeight: 'bold',
}
});