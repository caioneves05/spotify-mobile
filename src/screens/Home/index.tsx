import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { Main } from 'components/atoms/Main';

export const Home = () => (
  <View className="flex-1 bg-primary-500">
    <StatusBar style="light" translucent />
    <Main />
  </View>
);
