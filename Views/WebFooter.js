import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class WebFooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("Blabla", {
              name: "Terms of Service",
            })
          }
        >
          <Text>Terms of Service</Text>
        </TouchableOpacity>
        <Text>-</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("Blabla", {
              name: "Privacy Policy",
            })
          }
        >
          <Text>Privacy Policy</Text>
        </TouchableOpacity>
        <Text>-</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("Blabla", {
              name: "Third Party Licenses",
            })
          }
        >
          <Text>Third Party Licenses</Text>
        </TouchableOpacity>
        <Text>-</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("Blabla", {
              name: "About Us",
            })
          }
        >
          <Text>About Us</Text>
        </TouchableOpacity>
        <Text>-</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("Blabla", {
              name: "Cookie Policy",
            })
          }
        >
          <Text>Cookie Policy</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 1200,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    padding: 20,
    flexDirection: "row",
  },
});
