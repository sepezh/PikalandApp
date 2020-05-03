import * as React from "react";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {Image, View, useWindowDimensions} from "react-native";
import {Icon} from "native-base";
import BookmarkScreen from "./BookmarkScreen";
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./SettingScreen";
import CustomTab from "./CustomTab";

const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerStyle={isLargeScreen ? null : {width: "100%"}}
      drawerPosition={"left"}
      drawerContent={props => (
        <DrawerContentScrollView {...props}>
          <View>
            <Image
              source={require("../assets/Melanie-Mikecz-Pikaland.jpg")}
              resizeMode={"cover"}
              style={{width: "100%", height: 250}}
            />
          </View>
          <View>
            <DrawerItem
              label="Bookmarks"
              onPress={() => props.navigation.navigate("Bookmark")}
              icon={({focused, color, size}) => (
                <Icon color={color} size={size} name="bookmark" />
              )}
            />
            <DrawerItem
              label="Profile"
              onPress={() => props.navigation.navigate("Profile")}
              icon={({focused, color, size}) => (
                <Icon color={color} size={size} name="person" />
              )}
            />
            <DrawerItem
              label="Settings"
              onPress={() => props.navigation.navigate("Setting")}
              icon={({focused, color, size}) => (
                <Icon color={color} size={size} name="md-settings" />
              )}
            />
          </View>
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen name="Tab" component={CustomTab} />
      <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default CustomDrawer;
