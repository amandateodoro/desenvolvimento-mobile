import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nomeCompleto: Yup.string()
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'Nome inválido. Use um formato válido.')
    .required('Nome completo é obrigatório'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido. Use um formato válido.')
    .required('CEP é obrigatório'),
  cpf: Yup.string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido. Use um formato válido.')
    .required('CPF é obrigatório'),
  telefone: Yup.string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido. Use um formato válido.')
    .required('Telefone é obrigatório'),
  email: Yup.string()
    .email('E-mail inválido. Use um formato válido.')
    .required('E-mail é obrigatório'),
  senha: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/, 'Senha inválida. Use 8 caracteres, incluindo maiúscula, minúscula, número e caractere especial.')
    .required('Senha é obrigatória'),
});

const Formulario = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cep: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = err.errors.join('\n');
        Alert.alert('Erro', errorMessages);
      }
    }
  };

  return (
    <View style={styles.container}>
      {Object.keys(formData).map((field, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
          <TextInput
            style={styles.input}
            placeholder={field}
            value={formData[field]}
            onChangeText={(value) => handleChange(field, value)}
            secureTextEntry={field === 'senha'}
            keyboardType={field === 'email' ? 'email-address' : 'default'}
          />
        </View>
      ))}
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
  },
});

export default Formulario;
