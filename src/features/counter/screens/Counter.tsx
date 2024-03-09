import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CounterHeader from "../components/CounterHeader";
import CounterItemInfo from "../components/CounterItemInfo";
import ProgressBar from "../components/ProgressBar";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamsList } from "@/navigation/navigation";

type CounterRouteProp = RouteProp<RootStackParamsList, 'Counter'>;

type Props = {
  route: CounterRouteProp
};

const Counter = ({route}: Props) => {
  
  const item = route.params;

  return (
    <View style={styles.main}>
      <CounterHeader />
      <CounterItemInfo title={item.title} workTime={item.workTime} />
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
