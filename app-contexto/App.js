import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChangeTheme from './components/ChangeTheme';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  );
}

const AppContent = () => {
  const React = require('react');
  const { colors } = React.useContext(require('./context/ThemeContext').ThemeContext)

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ChangeTheme/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
