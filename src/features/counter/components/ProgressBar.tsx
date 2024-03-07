import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import { useAppNavigation } from "@/navigation/utils/useAppNavigator";
import CounterLabel from "./CounterLabel";

type Props = {};

const ProgressBar = (props: Props) => {

  const [timerValue, setTimerValue] = useState(12);
  const [isPressed, setIsPressed] = useState(false);

  const navigation = useAppNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerValue((prevValue) => (prevValue >= 0 ? prevValue - 1 : 0));
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, timerValue * 1000); // Timer pause automatically

    if (isPressed) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isPressed]);

  function giveUp() {
    setIsPressed(true);
    Alert.alert(
      "Are you sure for give up?",
      "If you countine with this options, your progess will be lost...",
      [
        {
          text: "Yes",
          onPress: () => navigation.navigate("Home"),
        },
        {
          text: "No",
          onPress: () => setIsPressed(false),
        },
      ],
    );
  }

  return (
    <View style={styles.main}>
      <Progress.Circle
        showsText={true}
        formatText={() => <Text>{timerValue} minutes</Text>}
        textStyle={{ fontSize: 15, fontWeight: "400", color: "black" }}
        size={200}
        thickness={18}
        unfilledColor="#D9D9D9"
        indeterminate={false}
        color="#99CC29"
        progress={timerValue / 12}
        borderColor="transparent"
      />
      <CounterLabel />
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "blue" }]}
        onPress={() => setIsPressed(!isPressed)}
      >
        <Text style={styles.btnTxt}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#b23b3b" }]}
        onPress={giveUp}
      >
        <Text style={styles.btnTxt}>Give Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    margin: 20,
  },
  btn: {
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  giveupBtn: {
    backgroundColor: "#b23b3b",
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  btnTxt: {
    fontSize: 24,
    padding: 10,
    color: "white",
  },
});
