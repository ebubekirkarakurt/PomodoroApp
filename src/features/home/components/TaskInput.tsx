import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomIcon from "../../../components/Icon/CustomIcon";
import { useAppDispatch } from "../../../redux/hooks";
import { setPressed } from "../../../redux/action/isPressedSlider";

type Props = {};

const TaskInput = (props: Props) => {
  const [isPressed, setisPressed] = useState(false);

  const dispatch = useAppDispatch();
  return (
    <>
      <Pressable
        style={styles.main}
        onPress={() => {
          setisPressed(!isPressed);
          dispatch(setPressed(!isPressed));
        }}
      >
        <View style={styles.btnContainer}>
          <Text style={styles.container}> Create new task.. </Text>
          <View style={styles.icon}>
            <CustomIcon iconName="plus" size={24} color="purple" />
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  main: {
    margin: 20,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  container: {
    padding: 20,
    fontSize: 18,
    flex: 1,
  },
  icon: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
});
