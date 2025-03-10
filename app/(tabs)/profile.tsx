import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../../styles/profile.styles";
import { Ionicons } from "@expo/vector-icons";

const profile = () => {
  const user = {
    username: "burakork",
    name: "Burak Orkmez",
    bio: "Test",
    avatar: require("../../assets/profile.png"), // Ensure the image is in assets
    posts: [
      require("../../assets/post1.jpeg"), // Replace with actual post images
      require("../../assets/post2.jpeg"),
    ],
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.username}>{user.username}</Text>
        <Ionicons name="add-outline" size={24} color="white" style={styles.headerIcon} />
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <View style={styles.avatarAndStats}>
          <View style={styles.avatarContainer}>
            <Image source={user.avatar} style={styles.avatar} />
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.posts.length}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>946.K</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts Grid */}
      <FlatList
        data={user.posts}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Image source={item} style={styles.gridImage} />
          </View>
        )}
      />
    </View>
  );
};

export default profile;