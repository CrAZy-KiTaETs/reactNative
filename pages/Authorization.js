import React, { useState } from "react";
import { View, Text, Button } from "react-native-web";
import { Login } from "../components/auth/Login";
import { Registration } from "../components/auth/Registration";
export const Authorization = ({ navigation }) => {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [loginOption, setLoginOption] = useState(true);

  const changeToReg = () => {
    setLoginOption(false);
  };

  const changeToLog = () => {
    setLoginOption(true);
  };

  return (
    <View>
      <Text>WoW App</Text>
      {loginOption ? (
        <Login changeToReg={changeToReg} navigation={navigation} />
      ) : (
        <Registration changeToLog={changeToLog} />
      )}

      <Button title="GO" onPress={() => navigation.navigate("Help")} />
    </View>
  );
};
