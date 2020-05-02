import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import languages from "../assets/languages.json";
import currencies from "../assets/currencies.json";
import Icon from "react-native-vector-icons/AntDesign";

const logo = require("../assets/icon.png");

export default class WebHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      loggedOut: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.popToTop()}
              style={{ flexDirection: "row" }}
            >
              <Image style={styles.tinyLogo} source={logo} />
              <Text style={styles.logoText}>Travelly</Text>
            </TouchableOpacity>
            <Text style={styles.sloganText}>Flights - Hotels - Tickets</Text>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text>Currency </Text>
            <select style={{ width: 100, marginRight: 50 }} selected={10}>
              {currencies.map((item, i) => {
                return item == "US Dollar (USD)" ? (
                  <option selected value={item}>
                    {item}
                  </option>
                ) : (
                  <option value={item} s>
                    {item}
                  </option>
                );
              })}
            </select>
            <Text>Language </Text>
            <select style={{ width: 100 }} selected={10}>
              {languages.map((item, i) => {
                return item == "English" ? (
                  <option selected value={item}>
                    {item}
                  </option>
                ) : (
                  <option value={item} s>
                    {item}
                  </option>
                );
              })}
            </select>

            {!this.state.loggedOut ? (
              <TouchableOpacity
                style={{ marginLeft: 50 }}
                onPress={() =>
                  this.setState({ expanded: !this.state.expanded })
                }
              >
                <Icon name="user" size={20} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ marginLeft: 50 }}
                onPress={() => this.setState({ loggedOut: false })}
              >
                <Icon name="login" size={20} color="black" />
              </TouchableOpacity>
            )}

            {this.state.expanded && (
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  top: 25,
                  backgroundColor: "white",
                  borderRadius: 5,
                  borderTopRightRadius: 0,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 6.27,

                  elevation: 3,
                  zIndex: 100000,
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.push("Trips")}
                  style={{ padding: 5, paddingRight: 20 }}
                >
                  <Text>My Trips</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({ loggedOut: true, expanded: false })
                  }
                  style={{ padding: 5, paddingRight: 20 }}
                >
                  <Text>Log out</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 1200,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
    padding: 20,
    zIndex: 1000,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logoText: {
    color: "#3D90E3",
    alignSelf: "center",
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  sloganText: {
    color: "black",
    alignSelf: "center",
    marginLeft: 20,
  },
});
