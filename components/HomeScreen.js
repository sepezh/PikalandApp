import React, {Component} from "react";
import {Text} from "react-native";
import {Header, Icon, Left, Container, Right, Content} from "native-base";
import {DrawerActions} from "@react-navigation/native";

class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Header style={{backgroundColor: "#fff)"}}>
          <Left>
            <Icon
              name="menu"
              style={{color: "#000"}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </Left>
          <Right />
        </Header>
        <Content />
      </Container>
    );
  }
}

export default HomeScreen;
