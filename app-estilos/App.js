import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import DraculaCard from './components/DraculaCard';
import ProfileCard from './components/ProfileCard';
import StyledButton from './components/StyleButton';

export default function App() {

  const handlePress = () => { alert("Você clicou no botão") };

  return (
    <View style={styles.container}>
      <DraculaCard
        title='Drácula Theme'
        content='Exemplo de estilo de tema para Visual Studio Code'
      />
      <ProfileCard
        nome='Amanda'
        avatarUri='https://avatars.githubusercontent.com/u/85532804?v=4'
        bio='Técnico em Informática, atualmente cursando Análise e Desenvolvimento de Sistemas no Instituto Federal de Rondônia, Campus Ji-Paraná.'
      />
      <StyledButton 
        title='Clique aqui' 
        onPress={handlePress}
        />
      <StatusBar 
        style="auto" 
        />
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
