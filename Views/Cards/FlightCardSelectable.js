import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FlightInfos from "./Info/FlightInfos";
import Checkbox from "./Checkbox";

export default class FlightCardSelectable extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.card}>
        <View style={styles.hotelInfo}>
          <View style={styles.airlineName}>
            <Text>{this.props.name}</Text>
          </View>
        </View>
        <View style={{ marginTop: 60 }}>
          <FlightInfos />
        </View>

        <Checkbox
          onSelected={this.props.onSelected}
          selected={this.props.selected}
          i={this.props.i}
        />
        <View style={styles.separator} />
        <Text style={styles.hotelPrice}>${this.props.price}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
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
  hotelPrice: {
    position: "absolute",
    bottom: 15,
    left: 0,
    fontSize: 20,
    textAlign: "center",
    width: "100%",
  },
  separator: {
    width: "90%",
    position: "absolute",
    bottom: 50,
    left: "5%",
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
});
