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
import WebHeader from "./WebHeader";
import TripCardWeb from "./Cards/TripCardWeb";
import WebFooter from "./WebFooter";

const trips = {
  upcoming: ["Rome", "Paris", "Venice", "Barcelona"],
  past: ["Salzburg", "Bangkok", "Singapore", "Dubai", "New York"],
};

export default class TripsWeb extends Component {
  renderExplore(list, photos, opacity) {
    return list.map((item, i) => {
      return (
        <TripCardWeb
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
        <ScrollView>
          <WebHeader navigation={this.props.navigation} />
          <View
            style={{
              maxWidth: 1200,
              width: "100%",
              alignSelf: "center",
            }}
          >
            <View style={styles.headerText}>
              <Text style={styles.headerTitle}>Trips</Text>
            </View>
            <Text style={styles.sectionTitle}>Upcoming</Text>
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}
            >
              {this.renderExplore(trips.upcoming, images.trips.upcoming, false)}
            </View>
            <Text style={styles.sectionTitle}>Past</Text>
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}
            >
              {this.renderExplore(trips.past, images.trips.past, true)}
            </View>
            <WebFooter navigation={this.props.navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    justifyContent: "center",
    alignSelf: "center",
  },
  headerTitle: {
    fontSize: 30,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    height: Dimensions.get("window").width * 0.5,
    width: 400,
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
    marginTop: 20,
  },
  safeAreaView: {
    alignSelf: "center",
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
