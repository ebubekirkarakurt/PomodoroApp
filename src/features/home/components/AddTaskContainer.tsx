import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomIcon from '../../../components/Icon/CustomIcon';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setPressed } from '../../../redux/action/isPressedSlider';
import { RootState } from '../../../redux/store/store';
import { useCreateTaskMutation } from '@/features/service/taskService';
import EmojiSelectorContainer from './EmojiSelectorContainer';
import { useTaskStore } from '../utils/state';

const AddTaskContainer = () => {
  const {
    title,
    workTime,
    breakTime,
    session,
    setTitle,
    increaseWorkTime,
    decreaseWorkTime,
    increaseBreakTime,
    decreaseBreakTime,
    setSession,
  } = useTaskStore();

  const [isEmojiActive, setIsEmojiActive] = useState(false);

  const dispatch = useAppDispatch();
  const emoji = useAppSelector((state: RootState) => state.setEmoji.emoji);

  const isPressed = useAppSelector(
    (state: RootState) => state.isPressed.pressed,
  );

  const [createTask, { isLoading }] = useCreateTaskMutation();

  return (
    <View style={styles.main}>
      <View style={styles.mainHeader}>
        <Text style={styles.mainTitle}>Add New Task</Text>
        <TouchableOpacity onPress={() => dispatch(setPressed(!isPressed))}>
          <CustomIcon iconName="close" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.emojiContainer}>
          <TouchableOpacity onPress={() => setIsEmojiActive(!isEmojiActive)}>
            <Text style={{ padding: 5, fontSize: 20 }}>{emoji}</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(txt) => setTitle(txt)}
          placeholder="New task here.."
        />
      </View>
      {isEmojiActive ? (
        <EmojiSelectorContainer />
      ) : (
        <>
          <View style={styles.timeSection}>
            <Text style={styles.title}>Minutes Per Work: {workTime}m </Text>
            <View style={styles.sectionLabel}>
              <TouchableOpacity
                style={styles.timeBtn}
                onPress={() => {
                  increaseWorkTime(workTime);
                }}
              >
                <CustomIcon iconName="plus" size={20} color="black" />
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 7,
                  marginBottom: 7,
                  borderColor: 'white',
                  borderWidth: 0.9,
                }}
              />
              <TouchableOpacity
                style={styles.timeBtn}
                onPress={() => {
                  decreaseWorkTime(workTime);
                }}
              >
                <CustomIcon iconName="minus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.timeSection}>
            <Text style={styles.title}>Minutes Per Break: {breakTime}m </Text>
            <View style={styles.sectionLabel}>
              <TouchableOpacity
                style={styles.timeBtn}
                onPress={() => {
                  increaseBreakTime(breakTime);
                }}
              >
                <CustomIcon iconName="plus" size={20} color="black" />
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 7,
                  marginBottom: 7,
                  borderColor: 'white',
                  borderWidth: 0.9,
                }}
              />
              <TouchableOpacity
                style={styles.timeBtn}
                onPress={() => {
                  decreaseBreakTime(breakTime);
                }}
              >
                <CustomIcon iconName="minus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sessionContainer}>
            <Text style={styles.title}> Sessions: </Text>
            <View>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={styles.sessionItemContainer}
                      onPress={() => {
                        setSession(item);
                      }}
                    >
                      <Text
                        style={{ fontSize: 20, width: 25, textAlign: 'center' }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </>
      )}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          dispatch(setPressed(!isPressed));
          createTask({ title, workTime, breakTime, session, emoji });
        }}
      >
        <Text style={styles.btnTxt}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskContainer;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    padding: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1,
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: '600',
    padding: 10,
  },
  emojiContainer: {
    padding: 8,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  sessionContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sessionItemContainer: {
    backgroundColor: '#d3d3d3',
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 13,
    borderRadius: 10,
    marginStart: 10,
    fontSize: 17,
  },
  timeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  sectionLabel: {
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  timeBtn: {
    padding: 2,
    alignItems: 'center',
    width: 40,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 30,
  },
  btnTxt: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
});
