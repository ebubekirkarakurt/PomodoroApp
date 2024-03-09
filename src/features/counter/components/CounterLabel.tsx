import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  workTime: number
};

const CounterLabel = ({workTime}: Props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Stay focused for {workTime} minutes</Text>
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
