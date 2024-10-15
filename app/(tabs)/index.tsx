import React from "react";
import { StyleSheet } from "react-native";
import MyNavigate from "../../components/navigation/MyNavigate"
export default function HomeScreen() {
  return (
    <>
      <MyNavigate />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "purple",
    width: 100,
    height: 100,
    position: "absolute",
  },
  container: {
    flex: 1,
    maxWidth: 1200,
    width: "100%",
    margin: "auto",
    borderWidth: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  scrollView: {
    padding: 10,
    borderWidth: 1,
    flexDirection: "row",
  },

  imgItem: {
    borderWidth: 1,
    width: 200,
    height: 200,
  },
  addImgBtn: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginLeft: "auto",
  },
  genereal: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    width: 250,
    alignSelf: "center",
  },
});
