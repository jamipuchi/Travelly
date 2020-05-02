import React, { Component } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar
} from "react-native";

export default class TripCardWeb extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.push("Selected Details", {
            flight: Math.floor(Math.random() * 7),
            hotel: Math.floor(Math.random() * 10),
            tickets: [
              Math.floor(Math.random() * 16),
              Math.floor(Math.random() * 16),
              Math.floor(Math.random() * 16),
            ],
            purchaseOn: false,
          })
        }
        style={styles.card}
      >
        <ImageBackground
          source={this.props.photo}
          style={!this.props.opacity ? styles.image : styles.imageopa}
        >
          <View style={styles.cardName}>
            <Text>{this.props.cityName}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 25,
    height: 320,
    width: 300,
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
  imageopa: {
    opacity: 0.5,
    borderRadius: 10,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
});
