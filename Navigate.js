import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "./components/Profile";
import { Balance } from "./components/Balance";
import { Help } from "./components/Help";
import { Authorization } from "./pages/Authorization";
import { Home } from "./pages/Home";
import { PostPage } from "./pages/PostPage";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authorization" component={Authorization} options={{title: "Authorization"}} />
        <Stack.Screen name="Home" component={Home} options={{title: "Home"}} />
        <Stack.Screen name="PostPage" component={PostPage} options={{title: "PostPage"}} />

        {/* <Stack.Screen name="Main" component={Autharization} options={{title: 'Autharization'}}/>
                <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile'}}/>
                <Stack.Screen name="Balance" component={Balance} options={{title: 'Balance'}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
