import React from "react";
import {Image} from "react-native";
import {Card, CardItem, Body, Left, Button, Icon, Text} from "native-base";

const CustomCard = props => {
  return (
    <Card>
      <CardItem style={{height: 280}}>
        <Body>
          <Image
            source={{uri: props.imgURI}}
            style={{
              width: "100%",
              height: 250,
              flex: 1,
              borderRadius: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Body>
      </CardItem>
      <CardItem style={{height: 100, padding: 5}}>
        <Body>
          <Text>city park street</Text>
          <Text>Newyork</Text>
          <Text>4 Bed . 4 Bath</Text>
          <Text>$299,900</Text>
        </Body>
      </CardItem>
      <CardItem style={{height: 30}}>
        <Left>
          <Button iconLeft transparent>
            <Icon
              type="FontAwesome"
              name="heart-o"
              style={{color: "#757575"}}
            />
            <Text style={{color: "#757575"}}>Save</Text>
          </Button>

          <Button iconLeft transparent>
            <Icon
              type="SimpleLineIcons"
              name="share"
              style={{color: "#757575"}}
            />
            <Text style={{color: "#757575"}}>Share</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
};

export default CustomCard;
