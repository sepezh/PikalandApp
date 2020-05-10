import React, {Component} from "react";
import {Header, Icon, Left, Container, Content, Input, Item} from "native-base";
import {DrawerActions} from "@react-navigation/native";

class SearchScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor: "#fff"}}>
          <Left style={{flex: null, marginRight: 10}}>
            <Icon
              name="menu"
              style={{color: "#000"}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </Left>
          <Item style={{backgroundColor: "#f4f4f4"}}>
            <Input placeholder="Search" />
            <Icon name="search" />
          </Item>
        </Header>
        <Content />
      </Container>
    );
  }
}

export default SearchScreen;
