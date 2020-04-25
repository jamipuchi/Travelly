import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import cities from "../assets/cities-world.json";

const bg = require("../assets/search-bg.jpg");

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  findInName(query) {
    if (query === "") {
      return [];
    }
    query = query.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
    const regex = new RegExp(`${query.trim()}`, "i");
    return cities.filter(
      (airport) =>
        airport.name.search(regex) >= 0 ||
        airport.city.search(regex) >= 0 ||
        airport.iata_code.search(regex) >= 0 ||
        airport.country.search(regex) >= 0
    );
  }

  render() {
    const { query } = this.state;
    const cities = this.findInName(query).slice(0, 10);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <ImageBackground source={bg} style={styles.image}>
        <SafeAreaView style={styles.container}>
          <Autocomplete
            autoCapitalize="none"
            autoCorrect={false}
            data={
              cities.length === 1 && comp(query, cities[0].name) ? [] : cities
            }
            defaultValue={query}
            onChangeText={(text) => this.setState({ query: text })}
            placeholder="Where do you want to go?"
            style={
              cities.length < 1
                ? styles.autocompleteContainer
                : styles.autocompleteContainerExpanded
            }
            listContainerStyle={styles.list}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    query: item.city + " (" + item.country + ")",
                  });
                  this.props.navigation.push("Search Results", {
                    city: item.city,
                    country: item.country,
                    iataCode: item.iata_code,
                  });
                }}
              >
                <Text style={styles.itemText}>
                  <Text style={{ color: "gray", fontSize: 10 }}>
                    {"   "}
                    {item.iata_code}
                  </Text>{" "}
                  {item.city} ({item.country})
                </Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 80,
  },
  autocompleteContainer: {
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: "white",
    height: 40,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  autocompleteContainerExpanded: {
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 0,
    backgroundColor: "white",
    height: 40,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  list: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    zIndex: 1,
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,

  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
