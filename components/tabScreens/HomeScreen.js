import React, {Component} from "react";
import {
  Header,
  Icon,
  Thumbnail,
  Left,
  Container,
  Right,
  Content,
} from "native-base";
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
            {/* <Thumbnail
              small
              source={require("../assets/Profile.jpg")}
              onCli={() => navigation.dispatch(DrawerActions.openDrawer())}
            /> */}
          </Left>
          <Right />
        </Header>
        <Content />
      </Container>
    );
  }
}

export default HomeScreen;
