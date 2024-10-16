import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, FlatList, Image, StyleSheet, TextInput } from "react-native";
import { addNewComment, getPostById, getPostComments } from "../api/api";

export const PostPage = ({ route, navigation }) => {
  let [post, setPost] = useState(route.params.user);

  return (
    <View style={styles.container}>
      <View style={styles.postDetails}>
        <Text style={styles.name}>{post?.first_name} {post?.last_name}</Text>
        <Text style={styles.email}>{post?.email}</Text>
        <Image style={styles.avatar} source={{ uri: post?.avatar }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  postDetails: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  commentsSection: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  comment: {
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    marginBottom: 8,
  },
  newCommentSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  newCommentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#fff",
  },
  addButton: {
    marginLeft: 8,
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
