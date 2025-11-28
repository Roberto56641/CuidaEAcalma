import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuida & Acalma</Text>
      <Text style={styles.subtitle}>Escolha uma opção para começar:</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>💆 Exercícios de Relaxamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🧘 Meditação Guiada</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🎵 Sons Calmantes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0D47A1",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#1565C0",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    width: "90%",
    backgroundColor: "#1565C0",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
  },
});
