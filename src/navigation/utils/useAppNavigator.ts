import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { RootStackParamsList } from '../navigation';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamsList>>();
};
