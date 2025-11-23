import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';

export default function App() {
  const [calmLevel, setCalmLevel] = useState(0);

  const relax = () => {
    setCalmLevel(calmLevel + 1);
    Alert.alert('Respire fundo!', Seu nível de calma agora é: ${calmLevel + 1});
  };

  const reset = () => {
    setCalmLevel(0);
    Alert.alert('Reiniciado', 'Seu nível de calma voltou a 0');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cuida & Acalmar</Text>
      <Text style={styles.subtitle}>Nível de calma: {calmLevel}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Respire e relaxe" onPress={relax} color="#4CAF50" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Reiniciar" onPress={reset} color="#F44336" />
      </View>

      <Text style={styles.info}>
        Use este app para praticar exercícios de respiração e meditação.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796B',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#004D40',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  info: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: '#006064',
  },
});
