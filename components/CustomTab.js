import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./tabScreens/HomeScreen";
import SearchScreen from "./tabScreens/SearchScreen";
import NotificationScreen from "./tabScreens/NotificationScreen";
import LoginScreen from "./tabScreens/LoginScreen";
import {Icon} from "native-base";
import {StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();

function CustomTab(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" style={(style.iconSize, {color: color})} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" style={(style.iconSize, {color: color})} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="notifications"
              style={(style.iconSize, {color: color})}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              type="MaterialCommunityIcons"
              name="login"
              style={(style.iconSize, {color: color})}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  iconSize: {
    fontSize: 24,
  },
});

export default CustomTab;
