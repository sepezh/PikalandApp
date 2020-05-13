import React, {Component} from "react";
import {Header, Icon, Left, Container, Right, Content} from "native-base";
import {DrawerActions} from "@react-navigation/native";
import CustomCard from "../CustomCard";

class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    const images = {
      imgURI: "https://placeimg.com/640/480/architecture",
    };
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
        <Content>
          <CustomCard imgURI={images.imgURI + "?t=1"} />
          <CustomCard imgURI={images.imgURI + "?t=3"} />
          <CustomCard imgURI={images.imgURI + "?t=5"} />
          <CustomCard imgURI={images.imgURI + "?t=9"} />
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
