import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import StartViewScreen from '../screens/StartViewScreen';
import ScrollViewScreen from '../screens/ScrollViewScreen';
import LinksScreen from '../screens/ListView';
import RecyclerListViewScreen from '../screens/RecyclerListViewScreen';

const StartStack = createStackNavigator({
  Start: StartViewScreen,
});

StartStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-information-circle'}
    />
  ),
};

const HomeStack = createStackNavigator({
  Home: ScrollViewScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Array.map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? (
          `ios-code${focused ? '-working' : ''}`
        ) : (
          'md-information-circle'
        )
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Virtualized List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? (
          `ios-code${focused ? '-working' : ''}`
        ) : (
          'md-information-circle'
        )
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: RecyclerListViewScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Recycler List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? (
          `ios-code${focused ? '-working' : ''}`
        ) : (
          'md-information-circle'
        )
      }
    />
  ),
};

export default createBottomTabNavigator({
  StartStack,
  HomeStack,
  LinksStack,
  SettingsStack,
});
