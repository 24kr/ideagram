import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../app/(tabs)/profile"; 
import EditProfile from "../components/edit-profile";
import Settings from "../components/settings";
import { ProfileStackParamList } from "../constants/types";

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