import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAppNavigation } from "@/navigation/utils/useAppNavigator";
import CustomIcon from "@/components/Icon/CustomIcon";

type Props = {};

const CounterHeader = (props: Props) => {
  const navigation = useAppNavigation();
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomIcon iconName="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTxt}>Pomodro Timer</Text>
      <View style={{ width: 20 }}></View>
    </View>
  );
};

export default CounterHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  headerTxt: {
    fontSize: 22,
    fontWeight: "600",
  },
});
