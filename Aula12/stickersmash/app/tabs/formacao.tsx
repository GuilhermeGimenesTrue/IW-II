import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formação</Text>
      <Text style={styles.text}>Possuo certificado de Astronomia da USP, junto de Acessibilidade e Educação Financeira pela Escola Virtual do Bradesco</Text>
      <Text style={styles.text}>Sei Inglês e estou estudando Japonês</Text>
      <Text style={styles.text}>Possuo o Ensino Médio em Desenvolvimento integrado com ensino técnico de Informática para Internet, também estou cursando Escrita Criativa na Emarp</Text>
      <Text style={styles.text}>Formação</Text>
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
