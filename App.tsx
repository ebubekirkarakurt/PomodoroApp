import { StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@/navigation/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent={false} />
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
