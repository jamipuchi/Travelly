import React, { Component } from "react";
import Autocomplete from "react-native-autocomplete-input";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";
import cities from "../assets/cities-world.json";
import ExploreCardWeb from "./Cards/ExploreCardWeb";
import images from "../assets/images";
import WebFooter from "./WebFooter";
import WebHeader from "./WebHeader";

export default class HomePage extends Component {
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
    console.log(query);
    return (
      <ScrollView>
        <WebHeader navigation={this.props.navigation} />
        <View style={[styles.container, { zIndex: 100 }]}>
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
        </View>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Explore</Text>
        </View>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <ExploreCardWeb
              navigation={this.props.navigation}
              discount=""
              width={"40%"}
              height={500}
              photo={images.explore.romantic[0]}
              cityName={"Bora Bora"}
              countryName={"French Polynesia"}
              slogan={"Relax and enjoy the sea"}
            />
            <View style={{ width: "1%" }} />
            <ExploreCardWeb
              navigation={this.props.navigation}
              discount=""
              width={"29%"}
              height={500}
              photo={images.explore.family[2]}
              cityName={"Venice"}
              countryName={"Italy"}
              slogan={"See Venice, Stay Venice"}
            />
            <View style={{ width: "1%" }} />
            <ExploreCardWeb
              navigation={this.props.navigation}
              discount=""
              width={"29%"}
              height={500}
              photo={images.explore.family[3]}
              cityName={"Barcelona"}
              countryName={"Spain"}
              slogan={"Barcelona is much more! "}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#3D90E3",
            marginBottom: 50,
            marginTop: 50,
          }}
        >
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                paddingBottom: 50,
                paddingTop: 50,
              }}
            >
              <View style={{ width: "33.3%", justifyContent: "center" }}>
                <Image
                  resizeMode="contain"
                  style={styles.reasonImage}
                  source={images.reasons[0]}
                />
                <Text style={styles.reasonTitle}>Multi-platform</Text>
                <Text style={styles.reasonText}>
                  Doesn't matter the device you have, Travelly will work!
                </Text>
              </View>
              <View style={{ width: "33.3%", justifyContent: "center" }}>
                <Image
                  resizeMode="contain"
                  style={styles.reasonImage}
                  source={images.reasons[1]}
                />
                <Text style={styles.reasonTitle}>Trusted</Text>
                <Text style={styles.reasonText}>
                  Our customers trust us because of our reliability
                </Text>
              </View>
              <View style={{ width: "33.3%", justifyContent: "center" }}>
                <Image
                  resizeMode="contain"
                  style={styles.reasonImage}
                  source={images.reasons[2]}
                />
                <Text style={styles.reasonTitle}>Fast</Text>
                <Text style={styles.reasonText}>
                  Build with the latest technology, Travelly will always feel
                  fast
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Deals</Text>
        </View>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <ExploreCardWeb
              navigation={this.props.navigation}
              discount="20%"
              width={"40%"}
              height={500}
              photo={images.explore.romantic[0]}
              cityName={"Bora Bora"}
              countryName={"French Polynesia"}
              slogan={"Relax and enjoy the sea"}
            />
            <View style={{ width: "1%" }} />
            <ExploreCardWeb
              navigation={this.props.navigation}
              discount="15%"
              width={"29%"}
              height={500}
              photo={images.explore.family[2]}
              cityName={"Venice"}
              countryName={"Italy"}
              slogan={"See Venice, Stay Venice"}
            />
            <View style={{ width: "1%" }} />
            <ExploreCardWeb
              navigation={this.props.navigation}
              discount="10%"
              width={"29%"}
              height={500}
              photo={images.explore.family[3]}
              cityName={"Barcelona"}
              countryName={"Spain"}
              slogan={"Barcelona is much more! "}
            />
          </View>
        </View>
        <WebFooter navigation={this.props.navigation} />
      </ScrollView>
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
  },
  autocompleteContainer: {
    flexGrow: 1,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: "white",
    height: 40,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    zIndex: 1000,
  },
  autocompleteContainerExpanded: {
    flexGrow: 1,
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
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    zIndex: 1000,
  },
  itemText: {
    margin: 10,
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
  sectionTitle: {
    fontSize: 20,
  },
  reasonTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  reasonText: {
    color: "white",
    textAlign: "center",
    marginRight: 40,
    marginLeft: 40,
  },
  reasonImage: { height: 200, width: 200, alignSelf: "center" },
});
