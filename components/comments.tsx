import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Mock data for comments
const COMMENTS = [
    {
        id: "1",
        username: "Programmer Doe",
        avatar: "https://via.placeholder.com/150",
        comment: "Dude this is sick!",
        timeAgo: "about 8 hours ago",
    },
    {
        id: "2",
        username: "Burak Orkmez",
        avatar: "https://via.placeholder.com/150",
        comment: "SO COOL!",
        timeAgo: "less than a minute ago",
    },
];

const Comments = () => {
    const navigation = useNavigation();
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim()) {
            // Add the new comment to the list (for now, just log it)
            console.log("New comment:", newComment);
            setNewComment("");
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Comments</Text>
                <View style={{ width: 24 }} /> {/* Spacer for alignment */}
            </View>

            {/* Comments List */}
            <FlatList
                data={COMMENTS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.commentContainer}>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                        <View style={styles.commentContent}>
                            <Text style={styles.username}>{item.username}</Text>
                            <Text style={styles.commentText}>{item.comment}</Text>
                            <Text style={styles.timeAgo}>{item.timeAgo}</Text>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.commentsList}
            />

            {/* Add Comment Input */}
            <View style={styles.commentInputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a comment..."
                    placeholderTextColor={COLORS.gray}
                    value={newComment}
                    onChangeText={setNewComment}
                />
                <TouchableOpacity onPress={handleAddComment}>
                    <Text style={styles.postButton}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.surface,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: COLORS.white,
    },
    commentsList: {
        padding: 16,
    },
    commentContainer: {
        flexDirection: "row",
        marginBottom: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    commentContent: {
        flex: 1,
    },
    username: {
        fontSize: 14,
        fontWeight: "600",
        color: COLORS.white,
        marginBottom: 4,
    },
    commentText: {
        fontSize: 14,
        color: COLORS.white,
        marginBottom: 4,
    },
    timeAgo: {
        fontSize: 12,
        color: COLORS.gray,
    },
    commentInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderTopWidth: 0.5,
        borderTopColor: COLORS.surface,
        backgroundColor: COLORS.background,
    },
    input: {
        flex: 1,
        color: COLORS.white,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 12,
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        fontSize: 14,
    },
    postButton: {
        color: COLORS.primary,
        fontWeight: "600",
        fontSize: 14,
    },
});

export default Comments;