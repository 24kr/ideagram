import React, { useState, useEffect } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { styles } from "@/styles/feed.styles";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";

const POSTS = [
  {
    "id": "1",
    "username": "Josh Hartford",
    "avatar": "https://demo-source.imgix.net/bucket_hat.jpg",
    "image": "https://demo-source.imgix.net/snowboard.jpg",
    "likes": 1,
    "caption": "skiiiiiiii sky won't be the limit",
    "timeAgo": "about 8 hours ago",
  },
  {
    "id": "2",
    "username": "puppyKerkas_00",
    "avatar": "https://demo-source.imgix.net/puppy.jpg",
    "image": "https://demo-source.imgix.net/house.jpg",
    "likes": 5,
    "caption": "You future home",
    "timeAgo": "about 2 hours ago"
  },

  {
    "id": "3",
    "username": "tech_noob",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "image": "https://demo-source.imgix.net/canyon.jpg",
    "likes": 10,
    "caption": "Just built my first website",
    "timeAgo": "about 1 day ago"
  },

  {
    "id": "4",
    "username": "dev_team",
    "avatar": "https://demo-source.imgix.net/snowboard.jpg",
    "image": "https://demo-source.imgix.net/scooter.jpg",
    "likes": 2,
    "caption": "Just deployed our new project",
    "timeAgo": "about 6 hours ago"
  },

  {
    "id": "5",
    "username": "programming_pro",
    "avatar": "https://demo-source.imgix.net/group_photo.jpg",
    "image": "https://demo-source.imgix.net/mountains.jpg",
    "likes": 20,
    "caption": "Just released a new library",
    "timeAgo": "about 1 week ago"
  },

  {
    "id": "6",
    "username": "newbie_22",
    "avatar": "https://demo-source.imgix.net/head_shot.jpg",
    "image": "https://demo-source.imgix.net/model.jpg",
    "likes": 8,
    "caption": "Just started learning Python",
    "timeAgo": "about 4 hours ago"
  },
  {
    "id": "7",
    "username": "java_jedi",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    "image": "https://demo-source.imgix.net/plant.jpg",
    "likes": 15,
    "caption": "Just completed my first Java project",
    "timeAgo": "about 3 days ago"
  },

  {
    "id": "8",
    "username": "csharp_coder",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    "likes": 12,
    "caption": "Learning C# for my new job",
    "timeAgo": "about 2 weeks ago"
  },

  {
    "id": "9",
    "username": "swift_savvy",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "image": "https://demo-source.imgix.net/snowboard.jpg",
    "likes": 18,
    "caption": "Just built a new iOS app",
    "timeAgo": "about 5 days ago"
  },

  {
    "id": "10",
    "username": "ruby_rookie",
    "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
    "image": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    "likes": 6,
    "caption": "Learning Ruby on Rails",
    "timeAgo": "about 1 month ago"
  },

  {
    "id": "11",
    "username": "javascript_juggler",
    "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=400&h=400&fit=crop",
    "image": "https://images.unsplash.com/photo-1701615004837-4008573b6652?w=400&h=400&fit=crop",
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
      const newPosts = [...posts, ...POSTS];
      setPosts(newPosts);
      setLoading(false);
    }, 1000);
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
                  <Ionicons name="share-social-outline" size={24} color={COLORS.white} />
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