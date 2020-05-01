import React, {Component} from "react";
import {
  Header,
  Icon,
  Left,
  Container,
  Content,
  Input,
  Text,
  Item,
} from "native-base";
import {DrawerActions} from "@react-navigation/native";

class SearchScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Header
          searchBar
          rounded
          style={{backgroundColor: "rgb(255, 255, 255)"}}>
          <Left style={{flex: null, marginRight: 10}}>
            <Icon
              name="menu"
              style={{color: "Black"}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </Left>
          <Item style={{backgroundColor: "rgb(199, 199, 204)"}}>
            <Input placeholder="Search" />
            <Icon name="search" />
          </Item>
        </Header>
        <Content>
          <Text>This is Search Page</Text>
        </Content>
      </Container>
    );
  }
}

export default SearchScreen;
