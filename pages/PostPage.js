import React, { useEffect, useState } from "react";
import { TouchableHighlight, View, Text, Button, FlatList } from "react-native";
import { addNewComment, getPostById, getPostComments } from "../api/api";
import { TextInput } from "react-native-web";
export const PostPage = ({ route, navigation }) => {
  let [post, setPost] = useState();
  let [comments, setComments] = useState();
  let [newComment, setNewComment] = useState();

  async function getPostsFromApi() {
    let data = await getPostById(route.params.id);
    setPost(data);
    console.log(data);
  }

  async function getCommetns() {
    let data = await getPostComments(route.params.id);
    setComments(data);
    console.log(data, "comments");
  }

  useEffect(() => {
    getPostsFromApi();
    getCommetns();
  }, []);

  function addComment() {

    addNewComment({postId: route.params.id, newComment});
  }

  return (
    <View>
      <Text>{post?.title}</Text>
      <Text>КОМЕНТАРИИ</Text>
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <>
            <Text>{item.email}</Text>
            <Text>{item.body}</Text>
          </>
        )}
      ></FlatList>
      <TextInput
        placeholder="Добавьте коммент"
        value={newComment}
        onChangeText={setNewComment}
      />
      <Button title="Добавить" onPress={addComment} />
    </View>
  );
};
