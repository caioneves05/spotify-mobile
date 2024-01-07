import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { Home } from 'components/organisms/Home';

export const ScreenHome = () => (
  <View className="flex-1 bg-primary-500">
    <StatusBar translucent />
    <Home />
  </View>
);
