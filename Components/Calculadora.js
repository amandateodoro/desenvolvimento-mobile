const Calculadora = () => {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const CalcularSoma = () => {
        if (!isNaN(numero1) && !isNaN(numero2)) {
            setResultado(numero1 + numero2);
        } else {
            setResultado("Inválido!");
        }
    };

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Calculadora de Soma</Text>
    
          {/* Campo de entrada para o primeiro número */}
          <TextInput
            style={styles.input}
            placeholder="Digite o primeiro número"
            keyboardType="numeric"
            value={numero1}
            onChangeText={setNumero1}
          />
    
          {/* Campo de entrada para o segundo número */}
          <TextInput
            style={styles.input}
            placeholder="Digite o segundo número"
            keyboardType="numeric"
            value={numero2}
            onChangeText={setNumero2}
          />
    
          {/* Botão para realizar a soma */}
          <Button title="Somar" onPress={somar} />
    
          {/* Campo para exibir o resultado da soma */}
          {resultado !== null && (
            <Text style={styles.result}>Resultado: {resultado}</Text>
          )}
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        width: '80%',
        borderRadius: 4,
      },
      result: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
      },
    });