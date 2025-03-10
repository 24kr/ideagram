import React, { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

const InitialLayout = () => {
    const { isLoaded, isSignedIn } = useAuth();
    const segments = useSegments();
    const router = useRouter();
    const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

    useEffect(() => {
        if (!isLoaded) return;
        if (hasCheckedAuth) return; // Prevent multiple redirects

        const inAuthScreen = segments[0] === "(auth)";

        if (!isSignedIn && !inAuthScreen) {
            router.replace("/(auth)/login");
        } else if (isSignedIn && segments[0] !== "(tabs)") {
            router.replace("/(tabs)");
        }

        setHasCheckedAuth(true); // Mark that we've handled auth check
    }, [isLoaded, isSignedIn]);

    if (!isLoaded) return null;

    return <Stack screenOptions={{ headerShown: false }} />;
};

export default InitialLayout;
