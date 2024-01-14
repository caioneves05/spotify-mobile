/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/style-prop-object */
import { View, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { BellIcon } from 'components/atoms/BellIcon';
import { ClockIcon } from 'components/atoms/ClockIcon';
import { ConfigIcon } from 'components/atoms/ConfigIcon';

export const Home = () => (
  <View>
    <StatusBar style="light" />
    <View className="top-[10%] mt-10 flex-row items-center justify-between">
      <Text className="left-3 text-lg font-bold text-white">Good Evening</Text>
      <View className="right-2 flex-row items-center justify-center space-x-4">
        <BellIcon size={24} />
        <ClockIcon size={24} />
        <ConfigIcon size={24} />
      </View>
    </View>
  </View>
);
