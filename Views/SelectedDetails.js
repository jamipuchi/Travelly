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
  Alert,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import images from "../assets/images";
import MapView from "react-native-maps";
import { Marker, AnimatedRegion } from "react-native-maps";
import hotels from "../assets/hotels.json";
import flights from "../assets/flights.json";
import tickets from "../assets/tickets.json";
import FlightInfos from "./Cards/Info/FlightInfos";
import FlightCard from "./Cards/FlightCard";
import HotelCard from "./Cards/HotelCard";
import TicketCard from "./Cards/TicketCard";

export default class SelectedDetails extends Component {
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
            <Text style={styles.headerTitle}>Purchase details</Text>
          </View>
          <View />
        </View>
        {this.props.route.params.purchaseOn && (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Purchase",
                "If this wasn't a demo you would be redirected to payment",
                [{ text: "Ok" }]
              );
            }}
            style={styles.purchaseFooter}
          >
            <Text style={styles.purchaseText}>Purchase</Text>
            <View />
          </TouchableOpacity>
        )}
        <ScrollView>
          <View style={{ height: 40 }} />
          {this.props.route.params.flight >= 0 && (
            <FlightCard
              name={flights[this.props.route.params.flight].name}
              price={flights[this.props.route.params.flight].price}
            />
          )}
          {this.props.route.params.hotel >= 0 && (
            <HotelCard
              name={hotels[this.props.route.params.hotel].name}
              price={hotels[this.props.route.params.hotel].price}
              image={images.hotels[this.props.route.params.hotel]}
              stars={hotels[this.props.route.params.hotel].stars}
            />
          )}
          {this.props.route.params.tickets.map(function (item, i) {
            return (
              <TicketCard
                name={tickets[item].name}
                price={tickets[item].price}
                image={images.tickets[item]}
              />
            );
          })}
          <View
            style={{ height: this.props.route.params.purchaseOn ? 100 : 20 }}
          />
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
  purchaseFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#3D90E3",
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 2,
    zIndex: 100,
  },
  purchaseText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
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
