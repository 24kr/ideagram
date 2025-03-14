import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../../styles/notifications.styles";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

// Mock data for notifications
const NOTIFICATIONS = [
  {
    id: "1",
    username: "programmer.dude",
    avatar: "https://images.unsplash.com/photo-1701615004837-4008573b6652?w=400&h=400&fit=crop",
    action: "commented: 'Dude this is sick!'",
    timeAgo: "about 8 hours ago",
    postImage: "https://demo-source.imgix.net/snowboard.jpg",
    expanded: false,
  },
  {
    id: "2",
    username: "programmer.dude",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    action: "liked your post",
    timeAgo: "about 8 hours ago",
    postImage: "https://demo-source.imgix.net/mountains.jpg",
    expanded: false,
  },
  {
    id: "3",
    username: "r.yandoe",
    avatar: "https://demo-source.imgix.net/bucket_hat.jpg",
    action: "started following you",
    timeAgo: "1 day ago",
    postImage: "https://demo-source.imgix.net/snowboard.jpg",
    expanded: false,
  },
  {
    id: "4",
    username: "r.yandoe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    action: "liked your post",
    timeAgo: "1 day ago",
    postImage: "https://demo-source.imgix.net/snowboard.jpg",
    expanded: false,
  },
  {
    id: "5",
    username: "bob.doe",
    avatar: "https://demo-source.imgix.net/head_shot.jpg",
    action: "liked your post",
    timeAgo: "2 days ago",
    postImage: "https://demo-source.imgix.net/mountains.jpg",
    expanded: false,
  },
  {
    id: "6",
    username: "programmer.dude",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    action: "liked your post",
    timeAgo: "2 days ago",
    postImage: "https://demo-source.imgix.net/mountains.jpg",
    expanded: false,
  },
  {
    id: "8",
    username: "programmer.dude",
    avatar: "https://images.unsplash.com/photo-1701615004837-4008573b6652?w=400&h=400&fit=crop",
    action: "commented: 'Dude this is sick!'",
    timeAgo: "about 8 hours ago",
    postImage: "https://demo-source.imgix.net/snowboard.jpg",
    expanded: false,
  },
  {
    id: "7",
    username: "programmer.dude",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    action: "liked your post",
    timeAgo: "about 8 hours ago",
    postImage: "https://demo-source.imgix.net/mountains.jpg",
    expanded: false,
  },
];

export default function notification() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  // Toggle notification expansion
  const toggleNotification = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, expanded: !notification.expanded }
          : notification
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.listContainer}>
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={styles.notificationItem}
            onPress={() => toggleNotification(notification.id)}
          >
            {/* Notification Content */}
            <View style={styles.notificationContent}>
              {/* Avatar */}
              <View style={styles.avatarContainer}>
                <Image
                  source={{ uri: notification.avatar }}
                  style={styles.avatar}
                />
                {notification.postImage && (
                  <View style={styles.iconBadge}>
                    <Ionicons
                      name={notification.action.includes("commented") ? "chatbubble" : "heart"}
                      size={12}
                      color={COLORS.primary}
                    />
                  </View>
                )}
              </View>

              {/* Notification Info */}
              <View style={styles.notificationInfo}>
                <Text style={styles.username}>{notification.username}</Text>
                <Text style={styles.action}>{notification.action}</Text>
                <Text style={styles.timeAgo}>{notification.timeAgo}</Text>
              </View>
            </View>

            {/* Post Image (if applicable) */}
            {notification.postImage && (
              <Image
                source={{ uri: notification.postImage }}
                style={styles.postImage}
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}