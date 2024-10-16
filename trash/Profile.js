import {
  Text,
  View,
  Button,Image
} from "react-native";

export const Profile = ({ route, navigation }) => {
  return (
    <View>
      <Text>Ваш профиль</Text>
      <Text>{route.params.desc.username}</Text>
      <Text>{route.params.desc.secondName}</Text>
      <Text>{route.params.desc.balance}</Text>
      <Image source={{uri: route.params.desc.avatar}}/>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
