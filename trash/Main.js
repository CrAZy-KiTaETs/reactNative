import { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { FlatList } from "react-native-web";
export const Main = ({ navigation }) => {
  let [about, setAbout] = useState([
    {
      name: "Ваш счет",
      link: "Balance",
      desc: { username: "alim", secondName: "kosaev" },
    },
    { name: "Помощь", link: "Help", desc: { text: "Удачи бро" } },
    {
      name: "Мой профиль",
      link: "Profile",
      desc: {
        username: "alim",
        secondName: "kosaev",
        avatar:
          "https://yt3.googleusercontent.com/ytc/APkrFKZUpelAfgCEsVNMZmGaT2gb4GIHODCwPGSCgLhN=s900-c-k-c0x00ffffff-no-rj",
      },
    },
  ]);

  const handleClickNavigation = (item) => {
    console.log(item.link);
    navigation.navigate(`${item.link}`, item);
  };

  return (
    <View>
      <Text>Гавная страница</Text>
      <FlatList
        data={about}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => handleClickNavigation(item)}>
            <Text>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};
