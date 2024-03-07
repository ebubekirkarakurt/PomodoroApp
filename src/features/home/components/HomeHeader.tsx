import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuBtn from "./MenuBtn";

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.headerTxt}>Hello Glen,</Text>
        <Text style={styles.headerLabel}>Be productive today!</Text>
      </View>
      <MenuBtn />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  headerTxt: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  headerLabel: {
    fontSize: 18,
    color: "#333333",
  },
});
