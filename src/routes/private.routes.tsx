/* eslint-disable react/no-unstable-nested-components */
import { ScreenHome } from 'screens/ScreenHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeIcon } from 'components/atoms/HomeIcon';
import { SearchIcon } from 'components/atoms/SearchIcon';
import { LibraryIcon } from 'components/atoms/LibraryIcon';

const Tab = createBottomTabNavigator();

export const PrivateRoutes = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#b3b3b3',
      tabBarLabelStyle: {
        margin: 0,
        padding: 10,
        color: '#b3b3b3',
      },
      tabBarStyle: {
        height: 65,
        borderTopWidth: 0,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'black',
      },
    }}
  >
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <HomeIcon
            size={30}
            color={color}
            fillIcon={focused ? '#b3b3b3' : '#121212'}
          />
        ),
      }}
      name="Home"
      component={ScreenHome}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <SearchIcon size={24} color={color} />,
      }}
      name="Search"
      component={ScreenHome}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <LibraryIcon
            size={24}
            color={color}
            fillIcon={focused ? '#b3b3b3' : '#121212'}
          />
        ),
      }}
      name="Library"
      component={ScreenHome}
    />
  </Tab.Navigator>
);
