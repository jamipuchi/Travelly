import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  Platform,
} from "react-native";
import images from "../assets/images";
import { TouchableOpacity } from "react-native-gesture-handler";
import ExploreCard from "./Cards/ExploreCard";

const places = {
  family: [
    { cityName: "Rome", countryName: "Italy" },
    { cityName: "Paris", countryName: "France" },
    { cityName: "Venice", countryName: "Italy" },
    { cityName: "Barcelona", countryName: "Spain" },
  ],
  sightseeing: [
    { cityName: "Salzburg", countryName: "Austria" },
    { cityName: "Bangkok", countryName: "Thailand" },
    { cityName: "Singapore", countryName: "Singapore" },
    { cityName: "Dubai", countryName: "United Arab Emirates" },
    { cityName: "New York", countryName: "United States" },
  ],
  couples: [
    { cityName: "Bora Bora", countryName: "French Polynesia" },
    { cityName: "Bali", countryName: "Indonesia" },
    { cityName: "Orkney", countryName: "Scotland" },
    { cityName: "Cape Town", countryName: "South Africa" },
  ],
};

export default class Explore extends Component {
  renderExplore(list, photos) {
    return list.map((item, i) => {
      return (
        <ExploreCard
          cityName={item.cityName}
          countryName={item.countryName}
          navigation={this.props.navigation}
          photo={photos[i]}
        />
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
            {this.renderExplore(places.family, images.explore.family)}
            <View style={{ width: 20 }} />
          </ScrollView>
          <Text style={styles.sectionTitle}>Sightseeing</Text>
          <ScrollView style={styles.cardsContainer} horizontal={true}>
            {this.renderExplore(places.sightseeing, images.explore.sightseeing)}
            <View style={{ width: 20 }} />
          </ScrollView>
          <Text style={styles.sectionTitle}>Romantic</Text>
          <ScrollView style={styles.cardsContainer} horizontal={true}>
            {this.renderExplore(places.couples, images.explore.romantic)}
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
});
