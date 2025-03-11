import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

// Mock data for bookmarked posts
const BOOKMARKS = [
  {
    id: "1",
    type: "image",
    uri: "https://demo-source.imgix.net/house.jpg",
    timestamp: "20:03",
  },
  {
    id: "2",
    type: "video",
    uri: "https://demo-source.imgix.net/snowboard.jpg",
    timestamp: "19:45",
  },
  {
    id: "3",
    type: "image",
    uri: "https://demo-source.imgix.net/sneakers.jpg",
    timestamp: "18:22",
  },
  {
    id: "4",
    type: "image",
    uri: "https://demo-source.imgix.net/model.jpg",
    timestamp: "17:59",
  },
  {
    id: "5",
    type: "video",
    uri: "https://demo-source.imgix.net/mountains.jpg",
    timestamp: "16:30",
  },
  {
    id: "6",
    type: "image",
    uri: "https://demo-source.imgix.net/scooter.jpg",
    timestamp: "15:10",
  },
];

// Styles for the bookmarks screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.surface,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "JetBrainsMono-Medium",
    color: COLORS.primary,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 1,
  },
  gridItem: {
    width: "32%",
    aspectRatio: 1,
    marginBottom: 2,
  },
  image: {
    flex: 1,
    borderRadius: 4,
  },
  videoIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    padding: 4,
  },
  timestamp: {
    position: "absolute",
    bottom: 8,
    left: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  timestampText: {
    color: COLORS.white,
    fontSize: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: COLORS.gray,
    fontSize: 16,
  },
});

export default function bookmarks() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bookmarks</Text>
      </View>

      {/* Bookmarks Grid */}
      {BOOKMARKS.length > 0 ? (
        <View style={styles.gridContainer}>
          {BOOKMARKS.map((bookmark) => (
            <TouchableOpacity key={bookmark.id} style={styles.gridItem}>
              <Image source={{ uri: bookmark.uri }} style={styles.image} />
              {bookmark.type === "video" && (
                <View style={styles.videoIcon}>
                  <Ionicons name="play" size={16} color={COLORS.white} />
                </View>
              )}
              {/* Timestamp */}
              <View style={styles.timestamp}>
                <Text style={styles.timestampText}>{bookmark.timestamp}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No bookmarks yet</Text>
        </View>
      )}
    </View>
  );
}