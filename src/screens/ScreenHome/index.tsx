import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { Home } from 'components/organisms/Home';

export const ScreenHome = () => (
  <View className="flex-1 bg-background-main-50">
    <StatusBar translucent />
    <Home />
  </View>
);
