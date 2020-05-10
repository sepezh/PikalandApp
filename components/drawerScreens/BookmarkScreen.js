import React, {Component} from "react";
import {Text, Animated, StyleSheet} from "react-native";
import {Container, Button} from "native-base";

class BookmarkScreen extends Component {
  constructor() {
    super();

    this.springValue = new Animated.Value(0.7);
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 0.7,
      friction: 1,
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <Container style={style.container}>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{scale: this.springValue}],
          }}
          source={require("../../assets/Mitnik-Miller.png")}
        />
        <Button info onPress={this.spring.bind(this)} style={{padding: 10}}>
          <Text>Click to me</Text>
        </Button>
      </Container>
    );
  }
}

style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BookmarkScreen;
