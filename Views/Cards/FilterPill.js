import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default class FilterPill extends Component {
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.selected ? styles.pillSelected : styles.pillUnselected
        }
        onPress={() => this.props.onSelected(this.props.label)}
      >
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  pillUnselected: {
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 4,
    marginBottom: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
    elevation: 10,
  },
  pillSelected: {
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "#3D90E3",
    shadowColor: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 4,
    marginBottom: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
