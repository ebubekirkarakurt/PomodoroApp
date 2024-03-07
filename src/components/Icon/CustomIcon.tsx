import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

type Props = {
  iconName: string;
  size: number;
  color: string;
};

const CustomIcon = ({ iconName, size, color = "black" }: Props) => {
  return (
    <View style={styles.icon}>
      <Icon name={iconName} size={size} color={color}></Icon>
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  icon: {
    padding: 5,
  },
});
