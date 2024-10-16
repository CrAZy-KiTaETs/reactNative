import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native-web";
import { registerNewUser } from "../../api/api";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slice";

export const Registration = ({ changeToLog, navigation }) => {
  let [username, setUsername] = useState("");
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const regNewUser = async () => {
    try {
      const res = await registerNewUser(username, password);
      if (res) {
        dispatch(registerUser(res));
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error, "log");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholderTextColor="#aaa"
      />
      <TouchableHighlight style={styles.button} onPress={regNewUser} underlayColor="#0056b3">
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={changeToLog} underlayColor="transparent">
        <Text style={styles.switchButton}>К авторизации</Text>
      </TouchableHighlight>

      <Text style={styles.exampleText}>eve.holt@reqres.in</Text>
      <Text style={styles.exampleText}>pistol</Text>
    </View>
  );
};


import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  switchButton: {
    marginTop: 10,
    color: "#007BFF",
  },
  exampleText: {
    color: "#666",
    fontSize: 14,
    marginTop: 10,
  },
});
