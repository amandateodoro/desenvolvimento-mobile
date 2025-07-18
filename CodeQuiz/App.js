import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import { DarkTheme } from './theme/DarkTheme';

import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerStyle: { backgroundColor: '#1f1f1f' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontFamily: 'Inter_400Regular' }
        }}
      >
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Início" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Resultado" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
