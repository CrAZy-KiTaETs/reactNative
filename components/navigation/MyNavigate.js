import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../Main"
import Contacts from "../Contacts"

const Stack = createNativeStackNavigator();

export default function MyNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{title: "Main"}} />
        <Stack.Screen name="Contacts" component={Contacts} options={{title: "Contacts"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
