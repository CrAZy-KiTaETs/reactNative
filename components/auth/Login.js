import React, { useState } from "react";
import { TouchableHighlight } from "react-native";
import { View, Text, Button, TextInput, StyleSheet } from "react-native-web";
import { loginUser } from "../../api/api";
import { useDispatch } from "react-redux";
import { loginUserSlice } from "../../store/slice";

export function Login({ changeToReg, navigation }) {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [activeOption, setActiveOption] = useState("");

  const dispatch = useDispatch();

  const logSys = async () => {
    // const usersList = JSON.parse(window.localStorage.getItem("users"));
    // if (usersList.find((x) => x.login === "lox")) {
    //   navigation.navigate("Home");
    // } else {
    //   alert("Такого пользователя нет");
    // }
    const res = await loginUser(login, password);
    if (res) {
      dispatch(loginUserSlice(res));
      navigation.navigate("Home")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Авторизация</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={login}
        onChangeText={setLogin}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // скрытие пароля
        placeholderTextColor="#aaa"
      />
      <TouchableHighlight style={styles.button} onPress={logSys} underlayColor="#0056b3">
        <Text style={styles.buttonText}>Вход</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => changeToReg(false)} underlayColor="transparent">
        <Text style={styles.registerLink}>Нет аккаунта? Зарегистрируйся</Text>
      </TouchableHighlight>
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // светлый фон для более приятного вида
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333", // темный цвет для контраста
    marginBottom: 30, // увеличенный отступ снизу
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8, // добавим скругление углов
    paddingHorizontal: 10,
    marginBottom: 20, // отступ между полями ввода
    backgroundColor: "#fff", // белый фон
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    backgroundColor: "#007BFF", // насыщенный синий цвет
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerLink: {
    color: "#007BFF",
    textDecorationLine: "underline",
    marginTop: 10, // добавлен отступ сверху
  },
});
