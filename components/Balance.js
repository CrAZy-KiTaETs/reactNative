import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

export const Balance = ({ route, navigation }) => {
  let [balance, setBalance] = useState(5000);

  const decrement = () => {
    setBalance((prev) => (prev -= 100));
  };

  const increment = () => {
    setBalance((prev) => (prev += 100));
  };
  return (
    <View>
      <Text>Ваш баланс</Text>
      <Text>{balance}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Снять 100" onPress={() => decrement()} />
      <Button title="пополнить 100" onPress={() => increment()} />
    </View>
  );
};
