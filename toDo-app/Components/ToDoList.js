import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function ToDoList() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, { id: Date.now().toString(), texto: tarefa }]);
      setTarefa("");
    }
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={adicionarTarefa} style={styles.botaoAdicionar}>
          <Text style={styles.textoBotaoAdicionar}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitulo}>Minhas Tarefas</Text>

      {tarefas.length === 0 ? (
        <Text style={styles.nenhumaTarefa}>Nenhuma tarefa adicionada</Text>
      ) : (
        <FlatList
          data={tarefas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemTarefa}>
              <Text style={styles.textoTarefa}>{item.texto}</Text>
              <TouchableOpacity
                style={styles.botaoRemover}
                onPress={() => removerTarefa(item.id)}
              >
                <Text style={styles.textoBotaoRemover}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  nenhumaTarefa: {
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#4B82F0",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  botaoAdicionar: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  textoBotaoAdicionar: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  itemTarefa: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textoTarefa: {
    fontSize: 16,
  },
  botaoRemover: {
    backgroundColor: "#f44336",
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoRemover: {
    color: "#fff",
    fontWeight: "bold",
  },
});
