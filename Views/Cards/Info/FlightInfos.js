import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default class FlightInfos extends Component {
  render() {
    return (
      <View style={styles.flightInfos}>
        <View style={styles.flightInfo}>
          <Text style={styles.timeTextStyle}>16:30</Text>
          <View style={styles.arrowContainer}>
            <View style={styles.arrow} />
            <Icon
              style={styles.arrowIcon}
              size={14}
              name="chevron-thin-right"
            />
            <View style={styles.pill}>
              <Text>Direct</Text>
            </View>
          </View>
          <Text style={styles.timeTextStyle}>18:30</Text>
        </View>
        <View style={styles.flightInfo}>
          <Text style={styles.timeTextStyle}>16:30</Text>
          <View style={styles.arrowContainer}>
            <View style={styles.arrow} />
            <Icon
              style={styles.arrowIcon}
              size={14}
              name="chevron-thin-right"
            />
            <View style={styles.pill}>
              <Text>Direct</Text>
            </View>
          </View>
          <Text style={styles.timeTextStyle}>18:30</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flightInfo: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flightInfos: {
    marginTop: 30,
  },
  pill: {
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  arrowIcon: {
    color: "black",
    position: "absolute",
    top: 3,
    right: 2,
  },
  arrow: {
    width: "90%",
    position: "absolute",
    top: 10,
    left: "5%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 1,
  },
  arrowContainer: {
    flexDirection: "row",
    width: "60%",
    height: 20,
    justifyContent: "center",
  },
  timeTextStyle: { fontSize: 17 },
});
