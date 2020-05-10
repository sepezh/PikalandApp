import React, {Component} from "react";
import {Animated, Easing} from "react-native";
import {Container, Content, View} from "native-base";

class ProfileScreen extends Component {
  constructor() {
    super();

    this.spinValue = new Animated.Value(0);
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  componentDidMount() {
    this.spin();
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    return (
      <Container>
        <Content>
          <View style={{marginLeft: 70, marginTop: 70}}>
            <Animated.Image
              style={{
                width: 200,
                height: 200,
                transform: [{rotate: spin}],
              }}
              source={require("../../assets/Mitnik-Miller.png")}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen;
