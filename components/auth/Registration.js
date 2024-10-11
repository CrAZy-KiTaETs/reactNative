import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native-web";

export const Registration = ({ changeToLog }) => {
  let [username, setUsername] = useState("");
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [activeOption, setActiveOption] = useState("");

  const regNewUser = () => {
    const usersList = JSON.parse(window.localStorage.getItem("users"));
    if (usersList) {
      if (usersList.find((x) => x.login === login)) {
        alert("Пользователь уже зарегистрирован!");
      } else {
        usersList.push({ name: username, login: login, password: password });
        window.localStorage.setItem("users", JSON.stringify(usersList));
      }
    } else {
      window.localStorage.setItem(
        "users",
        JSON.stringify([{ name: username, login: login, password: password }])
      );
    }

  };

  return (
    <View>
      <Text>Регистрация</Text>
      <TextInput
        placeholder="Имя"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput placeholder="login" value={login} onChangeText={setLogin} />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Зарегистрироваться" onPress={regNewUser} />

      <Button title="К авторизации" onPress={changeToLog} />
    </View>
  );
};
