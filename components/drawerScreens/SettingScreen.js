import React, {Component} from "react";
import {Animated, Easing} from "react-native";
import {Container, Content} from "native-base";

class SettingScreen extends Component {
  constructor() {
    super();

    this.animateValue = new Animated.Value(0);
  }

  animate() {
    this.animateValue.setValue(0);
    Animated.timing(this.animateValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => this.animate());
  }

  componentDidMount() {
    this.animate();
  }

  render() {
    const marginLeft = this.animateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
    const opacity = this.animateValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });
    const movingMargin = this.animateValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 300, 18],
    });
    const rotateX = this.animateValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "0deg"],
    });
    return (
      <Container>
        <Content>
          <Animated.View
            style={{
              marginLeft,
              marginTop: 50,
              width: 50,
              height: 50,
              backgroundColor: "#d50000",
            }}
          />
          <Animated.View
            style={{
              opacity,
              marginLeft: 150,
              marginTop: 50,
              width: 50,
              height: 50,
              backgroundColor: "#003d00",
            }}
          />
          <Animated.View
            style={{
              marginLeft: movingMargin,
              marginTop: 50,
              width: 50,
              height: 50,
              backgroundColor: "#82f7ff",
            }}
          />
          <Animated.View
            style={{
              transform: [{rotateX}],
              marginLeft: 150,
              marginTop: 50,
              width: 50,
              height: 50,
              backgroundColor: "#ff8a80",
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default SettingScreen;
