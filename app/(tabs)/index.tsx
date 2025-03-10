import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";  
import { useAuth } from "@clerk/clerk-expo";
import { styles } from "@/styles/feed.styles";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";

export default function index() {
  const {signOut} = useAuth();
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ideagram</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.
            white} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* STORIES */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.storiesContainer} >
          {STORIES.map((story) => (
        <Story key={story.id} story={story} /> 
          ))}
      </ScrollView>
    </ScrollView>
    </View>
  );
}

