import React, {Component} from "react";
import {Header, Icon, Left, Container, Right, Content} from "native-base";
import {DrawerActions} from "@react-navigation/native";
import CustomCard from "../CustomCard";

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
        <Content>
          <CustomCard likes={20} />
        </Content>
      </Container>
    );
  }
}

export default NotificationScreen;
