import {
    Text,
    View,
    Button,
  } from "react-native";
  
  export const Help = ({ route, navigation }) => {
    return (
      <View>
        <Text>Это страница помощи</Text>
        {/* <Text>{route.params.desc.text}</Text> */}
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  };
  