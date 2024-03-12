import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomIcon from '../../../components/Icon/CustomIcon';

type Props = {};

const MenuBtn = (props: Props) => {
  return (
    <View>
      <CustomIcon iconName="menu" size={30} color="black" />
    </View>
  );
};

export default MenuBtn;

const styles = StyleSheet.create({});
