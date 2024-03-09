import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import CustomIcon from '@/components/Icon/CustomIcon'

type Props = {
  title: string,
  workTime: number
}

const CounterItemInfo = ({title, workTime}: Props) => {

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
                  <Text style={styles.tasktitle}>{title}</Text>
                  <Text style={styles.taskTime}>{workTime} minutes</Text>
                </View>
                <View style={styles.playContainer}>
                    <Image
                      source={require("../../../../assets/sand-watch.png")}
                      style={styles.img}
                    />
                </View>
              </Surface>
  )
}

export default CounterItemInfo

const styles = StyleSheet.create({
    emojiContainer: {
      margin: 10,
      padding: 10,
      backgroundColor: "#f1f1f1",
      borderRadius: 10,
    },
    taskContainer: {
      margin: 25,
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
      backgroundColor: "#f1f1f1",
      borderRadius: 100,
      margin: 5,
      padding: 10
    },
    img:{
      width: 40,
      height: 40
    }
})