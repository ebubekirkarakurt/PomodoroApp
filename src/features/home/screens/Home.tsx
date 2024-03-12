import { StyleSheet, View } from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import TaskInput from '../components/TaskInput';
import TaskItemsList from '../components/TaskItemsList';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store/store';
import AddTaskContainer from '../components/AddTaskContainer';

const Home = () => {
  const isPressed = useAppSelector(
    (state: RootState) => state.isPressed.pressed,
  );

  return (
    <View style={styles.main}>
      <View>
        <HomeHeader />
        <TaskInput />
        <TaskItemsList />
      </View>
      {isPressed ? <AddTaskContainer /> : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#e9f5fe',
  },
});
