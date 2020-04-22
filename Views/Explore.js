import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";

const places = {
  family: ["Rome", "Paris", "Venice", "Barcelona"],
  sightseeing: ["Salzburg", "Bangkok", "Singapore", "Dubai", "New York"],
  couples: ["Bora Bora", "Bali", "Orkney", "Cape Town"],
};

export default class Explore extends Component {
  renderExplore(list) {
    return list.map((item, i) => {
      return (
        <View style={styles.card}>
          <View style={styles.cardName}>
            <Text>{item}</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Explore</Text>
        </View>
        <ScrollView>
          <Text style={styles.sectionTitle}>Family</Text>
          <ScrollView style={styles.cardsContainer} horizontal={true}>
            {this.renderExplore(places.family)}
            <View style={{ width: 20 }} />
          </ScrollView>
          <Text style={styles.sectionTitle}>Sightseeing</Text>
          <ScrollView style={styles.cardsContainer} horizontal={true}>
            {this.renderExplore(places.sightseeing)}
            <View style={{ width: 20 }} />
          </ScrollView>
          <Text style={styles.sectionTitle}>Romantic</Text>
          <ScrollView style={styles.cardsContainer} horizontal={true}>
            {this.renderExplore(places.couples)}
            <View style={{ width: 20 }} />
          </ScrollView>
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
  cardsContainer: {
    paddingRight: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
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
    backgroundColor: "black",
  },
  cardName: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 10,
    borderRadius: 10,
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
