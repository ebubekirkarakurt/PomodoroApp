import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';
import { useAppNavigation } from '@/navigation/utils/useAppNavigator';
import CounterLabel from './CounterLabel';

type Props = {
  workTime: number;
  session: number;
  breakTime: number;
};

const ProgressBar = ({ workTime, session, breakTime }: Props) => {
  const [timerValue, setTimerValue] = useState<number>(workTime);
  const [isPressed, setIsPressed] = useState(false);
  const [currentSession, setCurrentSession] = useState(0);

  const navigation = useAppNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerValue((prevValue: number) =>
        prevValue >= 1 ? prevValue - 1 : 0,
      );
    }, 1000); // 60.000 means 60 seconds

    if (isPressed) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isPressed, timerValue]);

  const startAgain = () => {
    if (timerValue == 0 && currentSession !== session) {
      setTimeout(() => {
        setTimerValue(workTime);
        setCurrentSession((prev: number) => prev + 1);
      }, breakTime * 1000);
    }
  };

  if (currentSession < session) {
    startAgain();
  }

  function giveUp() {
    setIsPressed(true);
    Alert.alert(
      'Are you sure for give up?',
      'If you countine with this options, your progess will be lost...',
      [
        {
          text: 'Yes',
          onPress: () => navigation.navigate('Home'),
        },
        {
          text: 'No',
          onPress: () => setIsPressed(false),
        },
      ],
    );
  }

  return (
    <View style={styles.main}>
      <Progress.Circle
        showsText={true}
        formatText={() => (
          <Text>
            {currentSession == session
              ? 'Last Round!!'
              : timerValue == 0
                ? 'Rest Time: ' + breakTime + ' minutes'
                : timerValue + ' minutes'}
          </Text>
        )}
        textStyle={{ fontSize: 15, fontWeight: '400', color: 'black' }}
        size={200}
        thickness={18}
        unfilledColor="#D9D9D9"
        indeterminate={false}
        color="#99CC29"
        progress={timerValue / workTime}
        borderColor="transparent"
      />
      <CounterLabel workTime={workTime} />
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: 'blue' }]}
        onPress={() => setIsPressed(!isPressed)}
      >
        <Text style={styles.btnTxt}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#b23b3b' }]}
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
    alignItems: 'center',
    margin: 20,
  },
  btn: {
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  giveupBtn: {
    backgroundColor: '#b23b3b',
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  btnTxt: {
    fontSize: 24,
    padding: 10,
    color: 'white',
  },
});
