import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import images from "../assets/images";
import TripCard from "./Cards/TripCard";

const trips = {
  upcoming: ["Rome", "Paris", "Venice", "Barcelona"],
  past: ["Salzburg", "Bangkok", "Singapore", "Dubai", "New York"],
};

export default class Trips extends Component {
  renderExplore(list, photos, opacity) {
    return list.map((item, i) => {
      return (
        <TripCard
          photo={photos[i]}
          cityName={item}
          opacity={opacity}
          navigation={this.props.navigation}
        />
      );
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Trips</Text>
        </View>
        <ScrollView>
          <Text style={styles.sectionTitle}>Upcoming</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.renderExplore(trips.upcoming, images.trips.upcoming, false)}
          </View>
          <Text style={styles.sectionTitle}>Past</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.renderExplore(trips.past, images.trips.past, true)}
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
  },
  headerTitle: {
    fontSize: 30,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "6.5%",
    height: Dimensions.get("window").width * 0.5,
    width: "40%",
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
  sectionTitle: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
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
});
