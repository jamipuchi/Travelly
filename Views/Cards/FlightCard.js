import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FlightInfos from "./Info/FlightInfos";

export default class FlightCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.hotelInfo}>
          <View style={styles.airlineName}>
            <Text>{this.props.name}</Text>
          </View>
        </View>
        <FlightInfos />
        <View style={styles.separator} />
        <Text style={styles.price}>${this.props.price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 200,
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
  },
  hotelInfo: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  },
  airlineName: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 130,
  },
  separator: {
    width: "90%",
    position: "absolute",
    bottom: 50,
    left: "5%",
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  price: {
    position: "absolute",
    bottom: 15,
    left: 0,
    fontSize: 20,
    textAlign: "center",
    width: "100%",
  },
});
