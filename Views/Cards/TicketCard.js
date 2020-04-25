import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default class TicketCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <ImageBackground source={this.props.image} style={styles.image}>
          <View style={styles.info}>
            <View style={styles.name}>
              <Text>{this.props.name}</Text>
            </View>
          </View>
        </ImageBackground>
        <Text style={styles.price}>${} for 1 night</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
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
  image: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden",
    height: "85%",
    width: "100%",
  },
  price: {
    position: "absolute",
    bottom: 15,
    left: 0,
    fontSize: 20,
    textAlign: "center",
    width: "100%",
  },
  info: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  },
  name: {
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(256, 256, 256, 0.8)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
