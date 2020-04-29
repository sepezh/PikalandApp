import React, {Component} from "react";
import {Text} from "react-native";
import {Header, Icon, Left, Container, Right, Content} from "native-base";
import {DrawerActions} from "@react-navigation/native";

class NotificationScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="menu"
              style={{color: "white"}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </Left>
          <Right />
        </Header>
        <Content>
          <Text>This is Notification Page</Text>
        </Content>
      </Container>
    );
  }
}

export default NotificationScreen;
