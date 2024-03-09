import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store/store";
import EmptyListContainer from "./EmptyListContainer";
import CustomIcon from "@/components/Icon/CustomIcon";
import { Surface } from "react-native-paper";
import { useAppNavigation } from "@/navigation/utils/useAppNavigator";
import { useGetTaskQuery } from "@/features/service/taskService";

type Props = {};

const TaskItemsList = (props: Props) => {

  const isPressed = useAppSelector(
    (state: RootState) => state.isPressed.pressed,
  );

  const {data, isLoading} = useGetTaskQuery("") || [];
  // console.log("data: ", JSON.stringify(data, null, 2));
  
  const navigation = useAppNavigation();

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>All Tasks</Text>
      { data && isPressed === false ? (
        <FlatList
          style={{height: 500}}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {

            return (
              <Surface style={styles.taskContainer} elevation={3}>
                <View style={styles.emojiContainer}>
                  <CustomIcon
                    iconName="sticker-emoji"
                    size={20}
                    color="black"
                  />
                </View>
                <View style={{ flex: 1, margin: 5 }}>
                  <Text style={styles.tasktitle}>{item.title}</Text>
                  <Text style={styles.taskTime}>{item.workTime} minutes</Text>
                </View>
                <View style={styles.playContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Counter", {
                      title: item.title, 
                      workTime: item.workTime, 
                      breakTime: item.breakTime, 
                      session: item.session
                    })}
                  >
                    <CustomIcon
                      iconName="play-outline"
                      size={30}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </Surface>
            );
          }}
        />
      ) : isPressed ? null : (
        <EmptyListContainer />
      )}
    </View>
  );
};

export default TaskItemsList;

const styles = StyleSheet.create({
  main: {
    margin: 20,
  },
  emojiContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
  },
  taskContainer: {
    margin: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tasktitle: {
    padding: 5,
    fontSize: 20,
  },
  taskTime: {
    padding: 5,
    fontSize: 16,
  },
  playContainer: {
    backgroundColor: "green",
    borderRadius: 100,
    margin: 10,
  },
});
