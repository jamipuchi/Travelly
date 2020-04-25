import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  Text,
} from "react-native";

export default class ExploreCard extends Component {
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
        style={styles.card}
      >
        <ImageBackground source={this.props.photo} style={styles.image}>
          <View style={styles.cardName}>
            <Text>
              {this.props.cityName} ({this.props.countryName})
            </Text>
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
    marginLeft: 20,
    height: 300,
    width: 250,
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
