import React from 'react';
import { View, Text, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { styles } from '@/styles/auth.styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';
import { useRouter } from 'expo-router';
import { useSSO } from '@clerk/clerk-expo';
const login = () => {

  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_google" });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    }
    catch (error) {
      console.error("OAuth error: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="chatbox" size={40} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Ideagram</Text>
        <Text style={styles.tagline}>Connect and Share</Text>
      </View>
      {/* ILLUSTRATION*/}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/LoginWP.png")}
          style={styles.illustration}
          resizeMode='cover'
        />
      </View>
      {/* LOGIN FORM */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>  Sign in with Google  </Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By Continuing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>

  )
}

export default login