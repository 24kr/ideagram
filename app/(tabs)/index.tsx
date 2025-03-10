import React, { useState, useEffect } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { styles } from "@/styles/feed.styles";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";

// Mock data for posts
const POSTS = [
  {
    id: "1",
    username: "programmer.dude",
    avatar: "https://via.placeholder.com/150",
    image: "https://via.placeholder.com/400",
    likes: 1,
    caption: "i luv programming",
    timeAgo: "about 8 hours ago",
  },
  {
    "id": "2",
    "username": "coder_girl",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 5,
    "caption": "Learning to code is my passion",
    "timeAgo": "about 2 hours ago"
  },

{
    "id": "3",
    "username": "tech_noob",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 10,
    "caption": "Just built my first website",
    "timeAgo": "about 1 day ago"
  },

{
    "id": "4",
    "username": "dev_team",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 2,
    "caption": "Just deployed our new project",
    "timeAgo": "about 6 hours ago"
  },

{
    "id": "5",
    "username": "programming_pro",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 20,
    "caption": "Just released a new library",
    "timeAgo": "about 1 week ago"
  },

{
    "id": "6",
    "username": "newbie_22",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 8,
    "caption": "Just started learning Python",
    "timeAgo": "about 4 hours ago"
  },
  {
    "id": "7",
    "username": "java_jedi",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 15,
    "caption": "Just completed my first Java project",
    "timeAgo": "about 3 days ago"
  },

{
    "id": "8",
    "username": "csharp_coder",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 12,
    "caption": "Learning C# for my new job",
    "timeAgo": "about 2 weeks ago"
  },

{
    "id": "9",
    "username": "swift_savvy",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 18,
    "caption": "Just built a new iOS app",
    "timeAgo": "about 5 days ago"
  },

{
    "id": "10",
    "username": "ruby_rookie",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 6,
    "caption": "Learning Ruby on Rails",
    "timeAgo": "about 1 month ago"
  },

{
    "id": "11",
    "username": "javascript_juggler",
    "avatar": "https://via.placeholder.com/150",
    "image": "https://via.placeholder.com/400",
    "likes": 25,
    "caption": "Just completed a React project",
    "timeAgo": "about 2 months ago"
  }
  
];

export default function Feed() {
  const { signOut } = useAuth();
  const [posts, setPosts] = useState(POSTS);
  const [loading, setLoading] = useState(false);

  // Simulate infinite scroll by loading more posts
  const loadMorePosts = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newPosts = [...posts, ...POSTS]; // Append more posts
      setPosts(newPosts);
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ideagram</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.storiesContainer}
          >
            {STORIES.map((story) => (
              <Story key={story.id} story={story} />
            ))}
          </ScrollView>
        }
        renderItem={({ item }) => (
          <View style={styles.post}>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <View style={styles.postHeaderLeft}>
                <Image source={{ uri: item.avatar }} style={styles.postAvatar} />
                <Text style={styles.postUsername}>{item.username}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </View>

            {/* Post Image */}
            <Image source={{ uri: item.image }} style={styles.postImage} />

            {/* Post Actions */}
            <View style={styles.postActions}>
              <View style={styles.postActionsLeft}>
                <TouchableOpacity>
                  <Ionicons name="heart-outline" size={24} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="chatbubble-outline" size={24} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="paper-plane-outline" size={24} color={COLORS.white} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Ionicons name="bookmark-outline" size={24} color={COLORS.white} />
              </TouchableOpacity>
            </View>

            {/* Post Info */}
            <View style={styles.postInfo}>
              <Text style={styles.likesText}>{item.likes} likes</Text>
              <View style={styles.captionContainer}>
                <Text style={styles.captionUsername}>{item.username}</Text>
                <Text style={styles.captionText}>{item.caption}</Text>
              </View>
              <Text style={styles.commentsText}>View all comments</Text>
              <Text style={styles.timeAgo}>{item.timeAgo}</Text>
            </View>
          </View>
        )}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}