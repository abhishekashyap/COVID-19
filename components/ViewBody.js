import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";

export default function ViewBody(props) {
  return (
    <View style={styles.bodyContainer}>
      <FlatList
        data={props.contentList}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <Ionicons
              name={props.listIcon}
              size={32}
              color={props.listIconColor}
            />
            <Text style={[styles.item, globalStyles.text]}>{item.content}</Text>
          </View>
        )}
      />
      <Text style={styles.footer}>"{props.footer}"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  footer: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "circular-std"
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  item: {
    flex: 1,
    fontSize: 20,
    padding: 10,
    margin: 10,
    backgroundColor: "#ecf0f1",
    borderRadius: 10
  }
});
