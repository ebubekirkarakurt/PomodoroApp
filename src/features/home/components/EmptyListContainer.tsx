import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Surface } from "react-native-paper";

type Props = {};

const EmptyListContainer = (props: Props) => {
  return (
    <Surface style={styles.main} elevation={3}>
      <Text style={styles.contentTxt}>There is no task here..</Text>
    </Surface>
  );
};

export default EmptyListContainer;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    margin: 30,
    borderRadius: 10,
  },
  contentTxt: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    padding: 20,
  },
});
