import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Surface } from 'react-native-paper';

type Props = {
  title: string;
  workTime: number;
  emoji: string;
};

const CounterItemInfo = ({ title, workTime, emoji }: Props) => {

  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.timing(rotateValue, {
      toValue: 360,
      duration: 3000,
      useNativeDriver: true,
    });

    const repeatAnimation = Animated.loop(rotateAnimation);
    
    repeatAnimation.start();

    return () => {
      repeatAnimation.stop();
    };
  }, [rotateValue]);

  const interpolatedRotate = rotateValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: interpolatedRotate }],
  };


  return (
    <Surface style={styles.taskContainer} elevation={3}>
      <Animated.View style={styles.emojiContainer}>
        <Text > {emoji} </Text>
      </Animated.View>
      <View style={{ flex: 1, margin: 5 }}>
        <Text style={styles.tasktitle}>{title}</Text>
        <Text style={styles.taskTime}>{workTime} minutes</Text>
      </View>
      <Animated.View style={[styles.playContainer, animatedStyle]}>
        <Image
          source={require('../../../../assets/sand-watch.png')}
          style={styles.img}
        />
      </Animated.View>
    </Surface>
  );
};

export default CounterItemInfo;

const styles = StyleSheet.create({
  emojiContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    fontSize: 20,
  },
  taskContainer: {
    margin: 25,
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
    backgroundColor: '#f1f1f1',
    borderRadius: 100,
    margin: 5,
    padding: 10,
  },
  img: {
    width: 40,
    height: 40,
  },
});
