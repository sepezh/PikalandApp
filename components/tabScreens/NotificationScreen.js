import React, {Component} from "react";
import {Header, Icon, Left, Container, Right, Content} from "native-base";
import {DrawerActions} from "@react-navigation/native";

class NotificationScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Header style={{backgroundColor: "#fff"}}>
          <Left>
            <Icon
              name="menu"
              style={{color: "#000"}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </Left>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default NotificationScreen;
