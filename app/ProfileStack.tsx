// navigation/ProfileStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../app/(tabs)/profile"; // Adjust the path as needed
import EditProfile from "../components/edit-profile"; // Adjust the path as needed
import Settings from "../components/settings"; // Adjust the path as needed
import { ProfileStackParamList } from "../constants/types"; // Import the types

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default ProfileStack;