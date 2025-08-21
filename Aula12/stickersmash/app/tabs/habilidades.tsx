import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Habilidades</Text>
      <Text style={styles.text}>Sei usar Word, Excel, Powerpoint, Access. Possuo experiencia com o pacote Adobe por completo e softwares de design como Figma e Canva.</Text>
      <Text style={styles.text}>Sei usar HTML, CSS e programar em Javascript, Python, PhP, SQL.</Text>
      <Text style={styles.text}>Sei usar DAWs de criação de musica como Fl Studio e Ableton, junto de sintetizadores simples como Harmless, Harmor, Sakura e ToxicHazard</Text>
      <Text style={styles.text}>Sei usar o basico de Game Engines como Game Maker e Godot </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
