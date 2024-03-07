import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CounterHeader from "../components/CounterHeader";
import CounterItemInfo from "../components/CounterItemInfo";
import ProgressBar from "../components/ProgressBar";

type Props = {};

const Counter = (props: Props) => {
  return (
    <View style={styles.main}>
      <CounterHeader />
      <CounterItemInfo />
      <ProgressBar />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#e9f5fe",
  },
});
