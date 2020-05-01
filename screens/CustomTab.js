import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import NotificationScreen from "./NotificationScreen";
import {Icon} from "native-base";

const Tab = createBottomTabNavigator();

function CustomTab(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" style={{fontSize: 24, color: color}} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="search" style={{fontSize: 24, color: color}} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="notifications" style={{fontSize: 24, color: color}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default CustomTab;
