import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import profile from "./(tabs)/profile";
import EditProfile from "@/components/edit-profile";
// import Feed from "./(tabs)/index";
// import Comments from "../components/comments";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="profile" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="profile" component={profile} />
                <Stack.Screen name="edit" component={EditProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
