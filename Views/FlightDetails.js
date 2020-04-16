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
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import images from "../assets/images";
import MapView from "react-native-maps";
import { Marker, AnimatedRegion } from "react-native-maps";

export default class FlightDetails extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
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
              {this.props.route.params.flightName}
            </Text>
            <Text style={styles.headerSubTitle}>
              ${this.props.route.params.flightPrice}
            </Text>
          </View>
          <View />
        </View>

        <ScrollView>
          <View style={{ height: 40 }} />
          <View style={styles.time1}>
            <Text style={{ fontSize: 17 }}>14:30</Text>
            <View
              style={{
                flexDirection: "row",
                width: "60%",
                height: 20,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "90%",
                  position: "absolute",
                  top: 10,
                  left: "5%",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  height: 1,
                }}
              />
              <Icon
                style={{
                  color: "black",
                  position: "absolute",
                  top: 3,
                  right: "5%",
                  marginRight: -5,
                }}
                size={14}
                name="chevron-thin-right"
              />
              <View
                style={{
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
                }}
              >
                <Text>Direct</Text>
              </View>
            </View>
            <Text style={{ fontSize: 17 }}>16:30</Text>
          </View>
          <View style={styles.time1}>
            <Text style={{ fontSize: 17 }}>14:30</Text>
            <View
              style={{
                flexDirection: "row",
                width: "60%",
                height: 20,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "90%",
                  position: "absolute",
                  top: 10,
                  left: "5%",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  height: 1,
                }}
              />
              <Icon
                style={{
                  color: "black",
                  position: "absolute",
                  top: 3,
                  right: "5%",
                  marginRight: -5,
                }}
                size={14}
                name="chevron-thin-right"
              />
              <View
                style={{
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
                }}
              >
                <Text>Direct</Text>
              </View>
            </View>
            <Text style={{ fontSize: 17 }}>16:30</Text>
          </View>
          <View style={{ height: 40 }} />

          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flexGrow: 1 }}>
              <Text style={styles.titleText}>Departs from</Text>
              <Text style={styles.descriptionText}>BCN</Text>
            </View>
            <View style={{ flexGrow: 1 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
                Arrives in
              </Text>
              <Text style={{ marginTop: 10 }}>
                {this.props.route.params.airport}
              </Text>
            </View>
          </View>
          <Text style={styles.titleText}>Info</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 10,
                textAlignVertical: "top",
              }}
            >
              <Icon name="ticket" size={20} color="black" />
              {"  "}
              {this.props.route.params.class} class
            </Text>
          </View>
          <Text style={styles.titleText}>Departing Location</Text>
          <MapView
            style={{
              height: 100,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
            initialRegion={{
              latitude: 41.2974,
              longitude: 2.0833,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {Platform.OS == "android" || Platform.OS == "ios" ? (
              <Marker
                coordinate={{
                  latitude: 41.2974,
                  longitude: 2.0833,
                }}
                title={this.props.route.params.flightName}
                description={this.props.route.params.flightName}
              />
            ) : (
              <View />
            )}
          </MapView>
          <Text style={styles.titleText}>Arriving Location</Text>

          <MapView
            style={{
              height: 100,
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
                title={this.props.route.params.flightName}
                description={this.props.route.params.flightName}
              />
            ) : (
              <View />
            )}
          </MapView>
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
    marginRight: 20,
    marginTop: 10,
    height: 300,
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
    width: "100%",
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
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
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
});
