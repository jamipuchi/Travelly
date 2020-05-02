import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  CheckBox,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import hotels from "../assets/hotels.json";
import flights from "../assets/flights.json";
import tickets from "../assets/tickets.json";
import Icon from "react-native-vector-icons/Entypo";
import images from "../assets/images";
import HotelCardSelectable from "./Cards/HotelCardSelectable";
import FlightCardSelectable from "./Cards/FlightCardSelectable";
import Checkbox from "./Cards/Checkbox";
import TicketCardSelectable from "./TicketCardSelectable";
import FilterPill from "./Cards/FilterPill";
import WebFooter from "./WebFooter";
import WebHeader from "./WebHeader";
import HotelDetailsWeb from "./HotelDetailsWeb";
import TicketDetailsWeb from "./TicketDetailsWeb";
import FlightDetailsWeb from "./FlightDetailsWeb";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHotel: -1,
      selectedFlight: -1,
      selectedTickets: [],
      flightPills: [],
      hotelPills: [],
      ticketPills: [],
      overlayView: null,
    };
    this.selectHotel = this.selectHotel.bind(this);
    this.selectFlight = this.selectFlight.bind(this);
    this.selectTicket = this.selectTicket.bind(this);
    this.selectFlightPill = this.selectFlightPill.bind(this);
    this.selectHotelPill = this.selectHotelPill.bind(this);
    this.selectTicketPill = this.selectTicketPill.bind(this);
  }

  selectHotel(selected, i) {
    this.setState({
      selectedHotel: selected ? -1 : i,
    });
  }

  selectFlight(selected, i) {
    this.setState({
      selectedFlight: selected ? -1 : i,
    });
  }

  selectTicket(selected, i) {
    if (!selected) {
      this.setState(() => ({
        selectedTickets: [...this.state.selectedTickets, i + 1],
      }));
    } else {
      var array = [...this.state.selectedTickets];
      var index = array.indexOf(i + 1);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ selectedTickets: array });
      }
    }
  }

  selectFlightPill(pill) {
    if (!this.state.flightPills.includes(pill)) {
      this.setState(() => ({
        flightPills: [...this.state.flightPills, pill],
      }));
    } else {
      var array = [...this.state.flightPills];
      var index = array.indexOf(pill);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ flightPills: array });
      }
    }
  }

  selectHotelPill(pill) {
    if (!this.state.hotelPills.includes(pill)) {
      this.setState(() => ({
        hotelPills: [...this.state.hotelPills, pill],
      }));
    } else {
      var array = [...this.state.hotelPills];
      var index = array.indexOf(pill);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ hotelPills: array });
      }
    }
  }

  selectTicketPill(pill) {
    if (!this.state.ticketPills.includes(pill)) {
      this.setState(() => ({
        ticketPills: [...this.state.ticketPills, pill],
      }));
    } else {
      var array = [...this.state.ticketPills];
      var index = array.indexOf(pill);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ ticketPills: array });
      }
    }
  }

  renderHotels(s) {
    return hotels
      .filter(
        (item) =>
          s.state.hotelPills.some((r) => item.category.includes(r)) ||
          s.state.hotelPills.length == 0
      )
      .map(function (item, i) {
        const selected = s.state.selectedHotel == i;
        return (
          <HotelCardSelectable
            name={item.name}
            price={item.price}
            stars={item.stars}
            navigation={s.props.navigation}
            image={images.hotels[item.id]}
            onSelected={s.selectHotel}
            selected={selected}
            i={i}
            onPress={() =>
              s.setState({
                overlayView: (
                  <HotelDetailsWeb
                    route={{
                      params: { hotelName: item.name, hotelPrice: item.price },
                    }}
                    onClose={() => {
                      s.setState({ overlayView: null });
                    }}
                  />
                ),
              })
            }
          />
        );
      });
  }

  renderFlights(s) {
    return flights
      .filter(
        (item) =>
          s.state.flightPills.includes(item.class) ||
          s.state.flightPills.length == 0
      )
      .map(function (item, i) {
        const selected = s.state.selectedFlight == i;
        return (
          <FlightCardSelectable
            name={item.name}
            price={item.price}
            id={item.id}
            airport={s.props.route.params.iataCode}
            class={item.class}
            selected={selected}
            i={i}
            navigation={s.props.navigation}
            onSelected={s.selectFlight}
            onPress={() =>
              s.setState({
                overlayView: (
                  <FlightDetailsWeb
                    route={{
                      params: {
                        flightName: item.name,
                        flightPrice: item.price,
                        flightId: item.id,
                        airport: s.props.route.params.iataCode,
                        class: item.class,
                      },
                    }}
                    onClose={() => {
                      s.setState({ overlayView: null });
                    }}
                  />
                ),
              })
            }
          />
        );
      });
  }

  renderTickets(s) {
    return tickets
      .filter(
        (item) =>
          s.state.ticketPills.includes(item.type) ||
          s.state.ticketPills.length == 0
      )
      .map(function (item, i) {
        const selected = s.state.selectedTickets.includes(item.id);
        return (
          <TicketCardSelectable
            name={item.name}
            image={images.tickets[item.id - 1]}
            price={item.price}
            onSelected={s.selectTicket}
            id={item.id}
            selected={selected}
            i={i}
            navigation={s.props.navigation}
            onSelected={s.selectTicket}
            onPress={() =>
              s.setState({
                overlayView: (
                  <TicketDetailsWeb
                    route={{
                      params: {
                        ticketName: item.name,
                        ticketPrice: item.price,
                        ticketId: item.id,
                      },
                    }}
                    onClose={() => {
                      s.setState({ overlayView: null });
                    }}
                  />
                ),
              })
            }
          />
        );
      });
  }

  render() {
    const { city, country, iataCode } = this.props.route.params;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        {(this.state.selectedFlight >= 0 ||
          this.state.selectedHotel >= 0 ||
          this.state.selectedTickets.length > 0) && (
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => {
              this.props.navigation.push("Selected Details", {
                flight: this.state.selectedFlight,
                hotel: this.state.selectedHotel,
                tickets: this.state.selectedTickets.map((item, i) => item - 1),
                purchaseOn: true,
              });
            }}
          >
            <Icon name="shopping-cart" size={20} color="white" />
          </TouchableOpacity>
        )}
        {this.state.overlayView != null && (
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "absolute",
              zIndex: 5000,
              right: 0,
              left: 0,
              bottom: 0,
              top: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "100%",
                maxWidth: 1000,
                maxHeight: 900,
                borderRadius: 10,
              }}
            >
              {this.state.overlayView}
            </View>
          </View>
        )}
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.container}>
            <WebHeader navigation={this.props.navigation} />
            <View style={styles.headerText}>
              <Text style={styles.headerTitle}>{city}</Text>
              <Text style={styles.headerSubTitle}>{country}</Text>
            </View>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Flights</Text>
              {[
                { name: "Economy", label: "economy" },
                { name: "Business", label: "business" },
                { name: "First Class", label: "firstClass" },
              ].map((item, i) => {
                return (
                  <FilterPill
                    name={item.name}
                    label={item.label}
                    selected={this.state.flightPills.includes(item.label)}
                    onSelected={this.selectFlightPill}
                  />
                );
              })}
            </View>
            <ScrollView style={styles.cardsContainer} horizontal={true}>
              {this.renderFlights(this)}
              <View style={{ width: 20 }} />
            </ScrollView>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Hotels</Text>
              {[
                { name: "Family", label: "family" },
                { name: "Couples", label: "couples" },
                { name: "Relax", label: "relax" },
                { name: "Value", label: "value" },
                { name: "Centric", label: "centric" },
              ].map((item, i) => {
                return (
                  <FilterPill
                    name={item.name}
                    label={item.label}
                    selected={this.state.hotelPills.includes(item.label)}
                    onSelected={this.selectHotelPill}
                  />
                );
              })}
            </View>
            <ScrollView style={styles.cardsContainer} horizontal={true}>
              {this.renderHotels(this)}
              <View style={{ width: 20 }} />
            </ScrollView>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Tickets</Text>
              {[
                { name: "Museum", label: "museum" },
                { name: "Theatre", label: "theatre" },
                { name: "Attraction", label: "attraction" },
                { name: "Park", label: "park" },
              ].map((item, i) => {
                return (
                  <FilterPill
                    name={item.name}
                    label={item.label}
                    selected={this.state.ticketPills.includes(item.label)}
                    onSelected={this.selectTicketPill}
                  />
                );
              })}
            </View>
            <ScrollView style={styles.cardsContainer} horizontal={true}>
              {this.renderTickets(this)}
              <View style={{ width: 20 }} />
            </ScrollView>
            <View height={20} />
            <WebFooter  navigation={this.props.navigation} />
          </ScrollView>
        </View>
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
    marginBottom: 50,
  },
  headerTitle: {
    flexGrow: 1,
    fontSize: 30,
    textAlign: "center",
  },
  headerSubTitle: {
    marginTop: 10,
    flexGrow: 1,
    fontSize: 15,
    color: "gray",
    textAlign: "center",
  },
  container: {},
  cardsContainer: {
    paddingRight: 20,
    maxWidth: 1200,
    width: "100%",
    alignSelf: "center",
  },
  sectionTitle: {
    marginLeft: 20,
    fontSize: 20,
    alignSelf: "flex-start",
  },
  buyButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#3D90E3",
    zIndex: 100,
    shadowColor: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,

    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
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
  sectionTitleContainer: {
    flexDirection: "row",
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
});
