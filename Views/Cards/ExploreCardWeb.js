import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
} from "react-native";
import images from "../../assets/images";

export default class ExploreCardWeb extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.push("Search Results", {
            city: this.props.cityName,
            country: this.props.countryName,
            iataCode: "",
          })
        }
        style={[
          styles.card,
          { width: this.props.width, height: this.props.height },
        ]}
      >
        <ImageBackground source={this.props.photo} style={styles.image}>
          {this.props.discount != "" && (
            <Image
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: 200,
                width: 200,
              }}
              source={images.band}
            />
          )}
          {this.props.discount != "" && (
            <Text
              style={{
                position: "absolute",
                top: 65,
                right: 55,
                fontSize: 25,
                color: "white",
                textAlign: "center",
                transform: [{ rotate: "45deg" }],
              }}
            >
              {this.props.discount}
            </Text>
          )}

          <View style={styles.cardName}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {this.props.cityName} ({this.props.countryName})
            </Text>
            <Text>{this.props.slogan}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    backgroundColor: "black",
  },
  cardName: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
});
