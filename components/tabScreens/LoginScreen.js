import React, {Component} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import {strings} from "../../local/i18n";

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Sepezh",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>
          {strings("login.welcome", {name: this.state.username})}
        </Text>
        <Button title={strings("login.login_btn")} />
        <Button title={strings("login.signup_btn")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default LoginScreen;
