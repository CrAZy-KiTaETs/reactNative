import React, { useState } from "react";
import { TouchableHighlight } from "react-native";
import { View, Text, Button, TextInput, StyleSheet } from "react-native-web";

export function Login({ changeToReg, navigation }) {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [activeOption, setActiveOption] = useState("");

  const logSys = () => {
    const usersList = JSON.parse(window.localStorage.getItem("users"));
    if (usersList.find((x) => x.login === "lox")) {
      navigation.navigate("Home");
    } else {
      alert("Такого пользователя нет");
    }
  };

  return (
    <View>
      <Text style={styles.lol}>Авторизация</Text>
      <TextInput placeholder="login" value={login} onChangeText={setLogin} />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Вход" onPress={logSys} />
      <Button
        title="Нет аккаунта? Зарегисрируйся"
        onPress={() => changeToReg(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lol: {
    color: "red",
  },
});
