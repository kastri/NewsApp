import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewsScreen from '../screens/News';
import NewsDetailScreen from '../screens/Article';
import SettingsScreen from '../screens/Settings';
import useThemeContext from '../services/ThemeManager/useThemeContext';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const NewsStack = createStackNavigator();

function NewsStackScreen() {
  const {theme}: any = useThemeContext();
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerTintColor: Colors[theme].text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <NewsStack.Screen
        name="News Detail"
        component={NewsDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerTintColor: Colors[theme].text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </NewsStack.Navigator>
  );
}
export default function MyTabs() {
  const {theme}: any = useThemeContext();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: Colors[theme].tint,
        style: {
          backgroundColor: Colors[theme].background,
        },
      }}>
      <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="newspaper"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
