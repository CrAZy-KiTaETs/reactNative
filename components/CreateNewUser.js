import { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export const CreateNewUser = ({ createUser }) => {
  let [username, setUsername] = useState("");
  let [last_name, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [avatar, setAvatar] = useState("");

  const handleCreateUser = () => {
    createUser(username, last_name, email, avatar);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добавление нового пользователя</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Имя</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Введите имя" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Фамилия</Text>
        <TextInput style={styles.input} value={last_name} onChangeText={setLastname} placeholder="Введите фамилию" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Имейл</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Введите email" keyboardType="email-address" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Фотография (URL)</Text>
        <TextInput style={styles.input} value={avatar} onChangeText={setAvatar} placeholder="Введите URL фотографии" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
        <Text style={styles.buttonText}>Создать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
