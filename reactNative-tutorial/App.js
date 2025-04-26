import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LicoesScreen from './screens/LicoesScreen';
import Explicacao from './screens/Explicacao';
import ComponentesBasicos from './screens/ComponentesBasicos';
import StatesProps from './screens/StatesProps';
import EstilizacaoSimples from './screens/EstilizacaoSimples';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: { backgroundColor: '#1E1E1E' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Licoes" component={LicoesScreen} options={{ title: 'Lições' }} />
        <Stack.Screen name="Explicacao" component={Explicacao} options={{ title: 'O que é React Native?' }} />
        <Stack.Screen name="ComponentesBasicos" component={ComponentesBasicos} options={{ title: 'Componentes Básicos' }} />
        <Stack.Screen name="StatesProps" component={StatesProps} options={{ title: 'States e Props' }} />
        <Stack.Screen name="EstilizacaoSimples" component={EstilizacaoSimples} options={{ title: 'Estilização Simples' }} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
});