import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>João: Estudante de ensino médio e técnico, com experiência em programação e matemática</Text>
      <Text style={styles.text}>Guilherme: Estudante de ensino médio e técnico, com experiência em programação, musica e game developmente</Text>
      <Text style={styles.text}>Thiago: Estudante de ensino médio e técnico, com experiência em programação, desenho e pixel art</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },

});
