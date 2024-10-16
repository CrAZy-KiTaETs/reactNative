import React, { useEffect, useState } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { getUsers } from "../api/api";
import { CreateNewUser } from "../components/CreateNewUser";
import { useSelector } from "react-redux";

export const Home = ({ navigation }) => {
  let [postsList, setPostList] = useState([]);
  let [activePage, setActivePage] = useState(1);
  let [findUserInp, setFindUserInp] = useState("");
  let [filteredUsers, setFilteredUsers] = useState([]);

  const userData = useSelector((state) => state);

  async function getPostsFromApi() {
    let res = await getUsers(activePage);
    setPostList(res.data);
  }

  useEffect(() => {
    getPostsFromApi();
  }, []);

  const goToPostPage = (user) => {
    navigation.navigate("PostPage", { user: user });
  };

  const createUser = (first_name, last_name, email, avatar) => {
    const newUser = {
      first_name,
      last_name,
      email,
      avatar: avatar,
      id: Math.random(),
    };
    setPostList((prev) => [...prev, newUser]);
  };

  const deleteUser = (id) => {
    setPostList((prev) => prev.filter((user) => user.id !== id));
  };

  const findUser = (e) => {
    setFindUserInp(e);
    const matchingUsers = postsList.filter((user) =>
      user.first_name.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredUsers(matchingUsers);
  };

  return (
    <View style={styles.container}>
      <View style={styles.createUserContainer}>
        <CreateNewUser createUser={createUser} />
      </View>
      <TextInput
        style={styles.findUserInput}
        placeholder="Поиск пользователя"
        value={findUserInp}
        onChangeText={findUser}
      />
      {findUserInp && filteredUsers.length > 0 ? (
        <FlatList
          data={filteredUsers}
          renderItem={({ item }) => (
            <View style={styles.userContainer} key={item.id}>
              <TouchableHighlight onPress={() => goToPostPage(item)}>
                <View style={styles.userInfo}>
                  <Image style={styles.avatar} source={{ uri: item.avatar }} />
                  <Text style={styles.userName}>{item.first_name}</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => deleteUser(item.id)}
                underlayColor="#c0392b"
              >
                <Text style={styles.buttonText}>Удалить</Text>
              </TouchableHighlight>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <FlatList
          data={postsList}
          renderItem={({ item }) => (
            <View style={styles.userContainer} key={item.id}>
              <TouchableHighlight onPress={() => goToPostPage(item)}>
                <View style={styles.userInfo}>
                  <Image style={styles.avatar} source={{ uri: item.avatar }} />
                  <Text style={styles.userName}>{item.first_name}</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => deleteUser(item.id)}
                underlayColor="#c0392b"
              >
                <Text style={styles.buttonText}>Удалить</Text>
              </TouchableHighlight>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};


import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  createUserContainer: {
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  findUserInput: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#e74c3c",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
