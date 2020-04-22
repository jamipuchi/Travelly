import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  Button,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo";
import languages from "../assets/languages.json";
import currencies from "../assets/currencies.json";
import cities from "../assets/cities-world.json";

const trips = {
  upcoming: ["Rome", "Paris", "Venice", "Barcelona"],
  past: ["Salzburg", "Bangkok", "Singapore", "Dubai", "New York"],
};

const airports = cities.splice(0, 100).map((item, i) => {
  return item.name + " (" + item.iata_code + ")";
});

const icon = require("../assets/icon.png");

export default class Settings extends Component {
  rowButton(item) {
    return (
      <TouchableOpacity
        style={styles.clickableRow}
        onPress={() =>
          this.props.navigation.push(item.screen, {
            name: item.name,
            info: item.props,
          })
        }
      >
        <Text style={styles.rowText}>{item.name}</Text>
        <Icon
          style={styles.rightArrow}
          name="chevron-thin-right"
          size={25}
          color="lightgray"
        />
      </TouchableOpacity>
    );
  }

  renderButtons() {
    return [
      {
        name: "Select your language",
        screen: "Select",
        props: { list: languages, default: 36 },
      },
      {
        name: "Select your airport",
        screen: "Select",
        props: {
          list: airports,
          default: 30,
        },
      },
      {
        name: "Select your currency",
        screen: "Select",
        props: { list: currencies, default: 0 },
      },
      { name: "Terms of Service", screen: "BlablaText", props: {} },
      { name: "Privacy Policy", screen: "BlablaText", props: {} },
      { name: "Third Party Licenses", screen: "BlablaText", props: {} },
      { name: "About us", screen: "BlablaText", props: {} },
    ].map((item, i) => {
      return this.rowButton(item);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Trips</Text>
        </View>
        <ScrollView>
          {this.renderButtons()}
          <View
            style={{
              width: "100%",
              borderTopWidth: 1,
              borderTopColor: "lightgray",
            }}
          />
          <View style={styles.logoView}>
            <Image style={styles.tinyLogo} source={icon} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
  },
  safeAreaView: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 5,
      },
      android: {
        marginTop: StatusBar.currentHeight + 5,
      },
    }),
  },
  clickableRow: {
    flexDirection: "row",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    justifyContent: "space-between",
  },
  rowText: { fontSize: 18 },
  logoView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 40,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
