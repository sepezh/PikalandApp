import React, {Component} from "react";
import {Container, Content, Text, Button} from "native-base";
import ImagePicker from "react-native-image-picker";
import {Image} from "react-native";

class MyHomesScreen extends Component {
  constructor() {
    super();
  }
  state = {
    image: "",
  };

  clickHandler = () => {
    const options = {
      title: "Select",
      storageOptions: {
        skipBackup: true,
        path: "image",
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response", response);

      if (response.didCancel) {
        console.log("User canselled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        this.setState({image: response});
      }
    });
  };
  render() {
    return (
      <Container>
        <Content style={{padding: 5}}>
          <Button onPress={this.clickHandler} info>
            <Text>Pick image</Text>
          </Button>
          <Image
            source={{uri: this.state.image.uri}}
            style={{
              width: "100%",
              height: 400,
              marginVertical: 5,
              flex: 1,
              borderRadius: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default MyHomesScreen;
