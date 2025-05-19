import { StyleSheet, Text, View } from 'react-native';
import TabelaExemplo from './Components/TabelaExemplo';
import ToDoList from './Components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
