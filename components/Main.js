import { useState } from "react";
import { TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native-web";

export default function Main() {
  let [about, setAbout] = useState([
    { name: "Google", desc: "kik" },
    { name: "asd", desc: "kik" },
    { name: "dsaad", desc: "kik" },
    { name: "d sad", desc: "kik" },
    { name: "r33", desc: "kik" },
  ]);

  const handleClickNavigation = () => {
    navigator.navigate("About")
  }

  return (
    <View>
      <Text>MAIN</Text>
      <FlatList
        data={about}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={handleClickNavigation}>
            <Text>{items.name}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}
