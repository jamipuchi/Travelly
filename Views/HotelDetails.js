import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import images from "../assets/images";
import MapView from "react-native-maps";
import { Marker, AnimatedRegion } from "react-native-maps";

export default class HotelDetails extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => this.props.navigation.pop()}
          >
            <Icon
              style={styles.backButton}
              name="chevron-left"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>
              {this.props.route.params.hotelName}
            </Text>
            <Text style={styles.headerSubTitle}>
              ${this.props.route.params.hotelPrice} for 1 night
            </Text>
          </View>
          <View />
        </View>
        <ScrollView>
          <ScrollView style={styles.cardsContainer} horizontal={true}>
            {images.hotels.map(function (item, i) {
              return (
                <View style={styles.card}>
                  <ImageBackground
                    source={images.hotels[i]}
                    style={styles.hotelImage}
                  />
                </View>
              );
            })}
          </ScrollView>
          <Text style={styles.titleText}>Description</Text>
          <Text style={styles.descriptionText}>
            The {this.props.route.params.hotelName} is a modern, elegant 4-star
            hotel overlooking the sea, perfect for a romantic, charming
            vacation, in the enchanting setting of Taormina and the Ionian Sea.
            The rooms at the Panoramic Hotel are new, well-lit and inviting. Our
            reception staff will be happy to help you during your stay in
            Taormina, suggesting itineraries, guided visits and some good
            restaurants in the historic centre. While you enjoy a cocktail by
            the swimming pool on the rooftop terrace, you will be stunned by the
            breathtaking view of the bay of Isola Bella. Here, during your
            summer stays, our bar serves traditional Sicilian dishes, snacks and
            salads. At the end of a stairway across from the hotel, the white
            pebbles on the beach of Isola Bella await you as well as beach
            facilities with lounge chairs and umbrellas and areas with free
            access to the pristine clear sea that becomes deep just a few metres
            from the shore. Available services include Voip telephone – ideal
            for low-cost international calls – Wi-Fi internet connection,
            breakfast and 24-hour reception.
          </Text>
          <Text style={styles.titleText}>Amenities</Text>
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <IconMC
              style={{ marginRight: 10 }}
              name="food"
              size={20}
              color="black"
            />
            <IconMC
              style={{ marginRight: 10 }}
              name="shower"
              size={20}
              color="black"
            />
            <Icon
              style={{ marginRight: 10 }}
              name="tv"
              size={20}
              color="black"
            />
            <IconMC
              style={{ marginRight: 10 }}
              name="car"
              size={20}
              color="black"
            />
            <IconMC
              style={{ marginRight: 10 }}
              name="parking"
              size={20}
              color="black"
            />
            <Icon
              style={{ marginRight: 10 }}
              name="signal"
              size={20}
              color="black"
            />
          </View>
          <Text style={styles.titleText}>Sleeping arrangement</Text>
          <Text style={{ marginLeft: 20, marginTop: 10 }}>
            <IconMC name="bed-empty" size={20} color="black" />
            {"  1 king sized bed"}
          </Text>
          <Text style={styles.titleText}>Location</Text>
          <MapView
            style={{
              height: 300,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {Platform.OS == "android" || Platform.OS == "ios" ? (
              <Marker
                coordinate={{
                  latitude: 37.79495,
                  longitude: -122.4524,
                }}
                title={this.props.route.params.hotelName}
                description={this.props.route.params.hotelName}
              />
            ) : (
              <View />
            )}
          </MapView>
          <Text style={styles.titleText}>Reviews</Text>
          <Text style={styles.descriptionText}>No reviews yet</Text>
          <View style={{ height: 60 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    flexGrow: 1,
    justifyContent: "center",
    marginRight: 50,
  },
  headerTitle: {
    flexGrow: 1,
    fontSize: 30,
    textAlign: "center",
  },
  headerSubTitle: {
    flexGrow: 1,
    fontSize: 15,
    color: "gray",
    textAlign: "center",
  },
  container: {
    marginTop: 20,
  },
  cardsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  sectionTitle: {
    marginLeft: 20,
    fontSize: 20,
  },
  card: {
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
  },
  hotelImage: {
    borderRadius: 10,
    overflow: "hidden",
    height: 300,
    width: 250,
  },
  selectButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#62DD84",
    borderWidth: 1,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  selectButtonSelected: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#62DD84",
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "#62DD84",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  hotelInfo: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  },

  hotelName: {
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(256, 256, 256, 0.8)",
    maxWidth: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  airlineName: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 130,
  },
  selectText: { color: "#62DD84" },
  selectedText: { color: "white" },
  checkboxUnselected: {
    height: 15,
    width: 15,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    marginRight: 5,
  },
  checkboxSelected: {
    height: 15,
    width: 15,
    borderColor: "#62DD84",
    color: "white",
    borderWidth: 1,
    borderRadius: 3,
    marginRight: 5,
  },
  star: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  hotelPrice: {
    position: "absolute",
    bottom: 15,
    left: 0,
    fontSize: 20,
    textAlign: "center",
    width: "100%",
  },
  separator: {
    width: "90%",
    position: "absolute",
    bottom: 50,
    left: "5%",
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  time1: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 25,
    flexDirection: "row",
    justifyContent: "space-between",
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
  pillUnselected: {
    marginLeft: 10,
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
  pillSelected: {
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "#3D90E3",
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
  titleText: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  descriptionText: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: "justify",
    marginTop: 10,
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
