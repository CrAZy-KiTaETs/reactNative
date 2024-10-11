import React, { useEffect, useState } from "react";
import { TouchableHighlight, View, Text, Button, FlatList } from "react-native";
import { getPosts } from "../api/api";
export const Home = ({ navigation }) => {
  let [postsList, setPostList] = useState([]);

  async function getPostsFromApi() {
    let data = await getPosts();
    setPostList(data);
  }

  useEffect(() => {
    getPostsFromApi();
  }, []);

  const goToPostPage = (id) => {
    navigation.navigate("PostPage", { id: id });
  };

  return (
    <View>
      <FlatList
        data={postsList}
        renderItem={({ item }) => (
          <View>
            <TouchableHighlight onPress={() => goToPostPage(item.id)}>
              <Text>{item.title}</Text>
            </TouchableHighlight>
          </View>
        )}
      ></FlatList>
    </View>
  );
};
