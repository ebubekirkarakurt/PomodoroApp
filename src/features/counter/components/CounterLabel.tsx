import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  workTime: number;
  session: number; 
};

const CounterLabel = ({ workTime, session }: Props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Stay focused for {workTime}x{session} minutes</Text>
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
