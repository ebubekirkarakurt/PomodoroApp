import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { useAppDispatch } from '@/redux/hooks';
import { setItem } from '@/redux/action/setEmoji';

type Props = {};

const EmojiSelectorContainer = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1 }}>
      <EmojiSelector
        category={Categories.all}
        onEmojiSelected={(emoji) => {
          dispatch(setItem(emoji));
        }}
        showHistory={false}
        showSectionTitles={false}
        showTabs={false}
        columns={10}
      />
    </View>
  );
};

export default EmojiSelectorContainer;

const styles = StyleSheet.create({});
