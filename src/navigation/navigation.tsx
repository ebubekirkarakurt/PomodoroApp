import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../features/home/screens/Home';
import Counter from '../features/counter/screens/Counter';

export type RootStackParamsList = {
  Home: undefined;
  Counter: {
    title: string;
    workTime: number;
    breakTime: number;
    session: number;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const screenOptions: NativeStackNavigationOptions = { headerShown: false };

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Counter" component={Counter} />
    </RootStack.Navigator>
  );
};
