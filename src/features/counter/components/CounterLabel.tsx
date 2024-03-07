import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const CounterLabel = (props: Props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Stay focused for 60 minutes</Text>
    </View>
  );
};

export default CounterLabel;

const styles = StyleSheet.create({
  main: {
    margin: 20,
    padding: 20,
  },
  txt: {
    fontSize: 18,
  },
});
