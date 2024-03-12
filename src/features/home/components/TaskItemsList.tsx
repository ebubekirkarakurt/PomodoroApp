import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import EmptyListContainer from './EmptyListContainer';
import CustomIcon from '@/components/Icon/CustomIcon';
import { Surface } from 'react-native-paper';
import { useAppNavigation } from '@/navigation/utils/useAppNavigator';
import {
  useDeleteTaskMutation,
  useGetTaskQuery,
} from '@/features/service/taskService';

import Swipeable from 'react-native-swipeable';

type Props = {};

const TaskItemsList = (props: Props) => {
  const { data, isLoading, refetch } = useGetTaskQuery('');
  // console.log("data: ", JSON.stringify(data, null, 2));

  const [deleteTask, { isError }] = useDeleteTaskMutation();

  const [isRefreshed, setIsRefreshed] = useState(false);

  const isPressed = useAppSelector(
    (state: RootState) => state.isPressed.pressed,
  );

  const navigation = useAppNavigation();

  const onRefresh = () => {
    setIsRefreshed(true);
    refetch();

    setTimeout(() => {
      setIsRefreshed(false);
    }, 1000);
  };

  const rightButtons = (id: number) => [
    <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteTask(id)}>
      <Text style={styles.deleteBtnTxt}>Delete</Text>
    </TouchableOpacity>,
  ];

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>All Tasks</Text>
      {data && isPressed === false ? (
        <FlatList
          style={{ height: 500 }}
          data={data}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={isRefreshed} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => {
            return (
              <Swipeable rightButtons={rightButtons(item.id)}>
                <Surface style={styles.taskContainer} elevation={3}>
                  <View style={styles.emojiContainer}>
                    <Text> {item.emoji} </Text>
                  </View>
                  <View style={{ flex: 1, margin: 5 }}>
                    <Text style={styles.tasktitle}>{item.title}</Text>
                    <Text style={styles.taskTime}>{item.workTime} minutes</Text>
                  </View>
                  <View style={styles.playContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Counter', {
                          title: item.title,
                          workTime: item.workTime,
                          breakTime: item.breakTime,
                          session: item.session,
                          emoji: item.emoji,
                        })
                      }
                    >
                      <CustomIcon
                        iconName="play-outline"
                        size={30}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </Surface>
              </Swipeable>
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
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  taskContainer: {
    margin: 10,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    backgroundColor: 'green',
    borderRadius: 100,
    margin: 10,
  },
  deleteBtn: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  deleteBtnTxt: {
    fontSize: 18,
    color: 'red',
    flex: 1,
    textAlignVertical: 'center',
    padding: 10,
  },
});
