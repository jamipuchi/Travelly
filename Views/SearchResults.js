import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  CheckBox,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import hotels from "../assets/hotels.json";
import flights from "../assets/flights.json";
import tickets from "../assets/tickets.json";
import Icon from "react-native-vector-icons/Entypo";
import images from "../assets/images";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHotel: -1,
      selectedFlight: -1,
      selectedTickets: [],
      flightHours: [],
      flightPills: [],
      hotelPills: [],
      ticketPills: [],
    };
    for (let i = 0; i < flights.length * 4; i++) {
      this.state.flightHours.push(
        ("0" + Math.round(Math.random() * 24)).slice(-2) +
          ":" +
          ("0" + Math.round(Math.random() * 60)).slice(-2)
      );
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
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              s.props.navigation.push("Hotel Details", {
                hotelName: item.name,
                hotelPrice: item.price,
              })
            }
          >
            <ImageBackground
              source={images.hotels[item.id]}
              style={styles.hotelImage}
            >
              <View style={styles.hotelInfo}>
                <View style={styles.hotelName}>
                  <Text>{item.name}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  {[...Array(item.stars)].map((e, i) => (
                    <Icon
                      key={i}
                      color="#F2C94C"
                      style={styles.star}
                      size={20}
                      name="star"
                    />
                  ))}
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  s.setState({
                    selectedHotel: selected ? -1 : i,
                  });
                }}
                horizontal={true}
                style={
                  !selected ? styles.selectButton : styles.selectButtonSelected
                }
              >
                <View
                  style={
                    selected
                      ? styles.checkboxUnselected
                      : styles.checkboxSelected
                  }
                >
                  {selected ? (
                    <Icon name="check" size={12} color="#62DD84" />
                  ) : (
                    <View />
                  )}
                </View>
                <Text
                  style={!selected ? styles.selectText : styles.selectedText}
                >
                  {selected ? "Selected" : "Select"}
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.hotelPrice}>${item.price} for 1 night</Text>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() =>
              s.props.navigation.push("Flight Details", {
                flightName: item.name,
                flightPrice: item.price,
                flightId: item.id,
                airport: s.props.route.params.iataCode,
                class: item.class,
              })
            }
            style={styles.card}
          >
            <View style={styles.hotelInfo}>
              <View style={styles.airlineName}>
                <Text>{item.name}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                s.setState({
                  selectedFlight: selected ? -1 : i,
                });
              }}
              horizontal={true}
              style={
                !selected ? styles.selectButton : styles.selectButtonSelected
              }
            >
              <View
                style={
                  selected ? styles.checkboxUnselected : styles.checkboxSelected
                }
              >
                {selected ? (
                  <Icon name="check" size={12} color="#62DD84" />
                ) : (
                  <View />
                )}
              </View>
              <Text style={!selected ? styles.selectText : styles.selectedText}>
                {selected ? "Selected" : "Select"}
              </Text>
            </TouchableOpacity>
            <View style={styles.time1}>
              <Text style={{ fontSize: 17 }}>{s.state.flightHours[i * 4]}</Text>
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
                    right: 2,
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
                  <Text>{item.type}</Text>
                </View>
              </View>
              <Text style={{ fontSize: 17 }}>
                {s.state.flightHours[i * 4 + 1]}
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                top: 160,
                left: 20,
                right: 25,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 17 }}>
                {s.state.flightHours[i * 4 + 2]}
              </Text>
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
                    right: 2,
                  }}
                  size={14}
                  name="chevron-thin-right"
                />
                <View style={styles.pill}>
                  <Text>{item.type}</Text>
                </View>
              </View>
              <Text style={{ fontSize: 17 }}>
                {s.state.flightHours[i * 4 + 3]}
              </Text>
            </View>
            <View style={styles.separator} />
            <Text style={styles.hotelPrice}>${item.price}</Text>
          </TouchableOpacity>
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
        const selected = s.state.selectedTickets.includes(i);
        return (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              s.props.navigation.push("Ticket Details", {
                ticketName: item.name,
                ticketPrice: item.price,
                ticketId: item.id,
              })
            }
          >
            <ImageBackground
              source={images.tickets[item.id - 1]}
              style={styles.hotelImage}
            >
              <View style={styles.hotelInfo}>
                <View style={styles.hotelName}>
                  <Text>{item.name}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (!selected) {
                    s.setState(() => ({
                      selectedTickets: [...s.state.selectedTickets, i],
                    }));
                  } else {
                    var array = [...s.state.selectedTickets];
                    var index = array.indexOf(i);
                    if (index !== -1) {
                      array.splice(index, 1);
                      s.setState({ selectedTickets: array });
                    }
                  }
                }}
                horizontal={true}
                style={
                  !selected ? styles.selectButton : styles.selectButtonSelected
                }
              >
                <View
                  style={
                    selected
                      ? styles.checkboxUnselected
                      : styles.checkboxSelected
                  }
                >
                  {selected ? (
                    <Icon name="check" size={12} color="#62DD84" />
                  ) : (
                    <View />
                  )}
                </View>
                <Text
                  style={!selected ? styles.selectText : styles.selectedText}
                >
                  {selected ? "Selected" : "Select"}
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.hotelPrice}>{item.price}</Text>
          </TouchableOpacity>
        );
      });
  }

  render() {
    const { city, country, iataCode } = this.props.route.params;
    console.log(this.state.selectedTickets);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {(this.state.selectedFlight >= 0 ||
          this.state.selectedHotel >= 0 ||
          this.state.selectedTickets.length > 0) && (
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => {
              this.props.navigation.push("Selected Details", {
                flight: this.state.selectedFlight,
                hotel: this.state.selectedHotel,
                tickets: this.state.selectedTickets,
              });
            }}
          >
            <Icon name="shopping-cart" size={20} color="white" />
          </TouchableOpacity>
        )}

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
            <Text style={styles.headerTitle}>{city}</Text>
            <Text style={styles.headerSubTitle}>{country}</Text>
          </View>
          <View />
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.container}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.sectionTitle}>Flights</Text>
              <TouchableOpacity
                style={
                  this.state.flightPills.includes("economy")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.flightPills.includes("economy")) {
                    this.setState(() => ({
                      flightPills: [...this.state.flightPills, "economy"],
                    }));
                  } else {
                    var array = [...this.state.flightPills];
                    var index = array.indexOf("economy");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ flightPills: array });
                    }
                  }
                }}
              >
                <Text>Economy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.flightPills.includes("business")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.flightPills.includes("business")) {
                    this.setState(() => ({
                      flightPills: [...this.state.flightPills, "business"],
                    }));
                  } else {
                    var array = [...this.state.flightPills];
                    var index = array.indexOf("business");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ flightPills: array });
                    }
                  }
                }}
              >
                <Text>Business</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.flightPills.includes("firstClass")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.flightPills.includes("firstClass")) {
                    this.setState(() => ({
                      flightPills: [...this.state.flightPills, "firstClass"],
                    }));
                  } else {
                    var array = [...this.state.flightPills];
                    var index = array.indexOf("firstClass");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ flightPills: array });
                    }
                  }
                }}
              >
                <Text>First class</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.cardsContainer} horizontal={true}>
              {this.renderFlights(this)}
              <View style={{ width: 20 }} />
            </ScrollView>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.sectionTitle}>Hotels</Text>
              <TouchableOpacity
                style={
                  this.state.hotelPills.includes("family")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.hotelPills.includes("family")) {
                    this.setState(() => ({
                      hotelPills: [...this.state.hotelPills, "family"],
                    }));
                  } else {
                    var array = [...this.state.hotelPills];
                    var index = array.indexOf("family");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ hotelPills: array });
                    }
                  }
                }}
              >
                <Text>Family</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.hotelPills.includes("couples")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.hotelPills.includes("couples")) {
                    this.setState(() => ({
                      hotelPills: [...this.state.hotelPills, "couples"],
                    }));
                  } else {
                    var array = [...this.state.hotelPills];
                    var index = array.indexOf("couples");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ hotelPills: array });
                    }
                  }
                }}
              >
                <Text>Couples</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.hotelPills.includes("relax")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.hotelPills.includes("relax")) {
                    this.setState(() => ({
                      hotelPills: [...this.state.hotelPills, "relax"],
                    }));
                  } else {
                    var array = [...this.state.hotelPills];
                    var index = array.indexOf("relax");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ hotelPills: array });
                    }
                  }
                }}
              >
                <Text>Relax</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.hotelPills.includes("value")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.hotelPills.includes("value")) {
                    this.setState(() => ({
                      hotelPills: [...this.state.hotelPills, "value"],
                    }));
                  } else {
                    var array = [...this.state.hotelPills];
                    var index = array.indexOf("value");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ hotelPills: array });
                    }
                  }
                }}
              >
                <Text>Value</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.hotelPills.includes("centric")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.hotelPills.includes("centric")) {
                    this.setState(() => ({
                      hotelPills: [...this.state.hotelPills, "centric"],
                    }));
                  } else {
                    var array = [...this.state.hotelPills];
                    var index = array.indexOf("centric");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ hotelPills: array });
                    }
                  }
                }}
              >
                <Text>Centric</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.cardsContainer} horizontal={true}>
              {this.renderHotels(this)}
              <View style={{ width: 20 }} />
            </ScrollView>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.sectionTitle}>Tickets</Text>
              <TouchableOpacity
                style={
                  this.state.ticketPills.includes("museum")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.ticketPills.includes("museum")) {
                    this.setState(() => ({
                      ticketPills: [...this.state.ticketPills, "museum"],
                    }));
                  } else {
                    var array = [...this.state.ticketPills];
                    var index = array.indexOf("museum");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ ticketPills: array });
                    }
                  }
                }}
              >
                <Text>Museum</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.ticketPills.includes("theatre")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.ticketPills.includes("theatre")) {
                    this.setState(() => ({
                      ticketPills: [...this.state.ticketPills, "theatre"],
                    }));
                  } else {
                    var array = [...this.state.ticketPills];
                    var index = array.indexOf("theatre");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ ticketPills: array });
                    }
                  }
                }}
              >
                <Text>Theatre</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.ticketPills.includes("attraction")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.ticketPills.includes("attraction")) {
                    this.setState(() => ({
                      ticketPills: [...this.state.ticketPills, "attraction"],
                    }));
                  } else {
                    var array = [...this.state.ticketPills];
                    var index = array.indexOf("attraction");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ ticketPills: array });
                    }
                  }
                }}
              >
                <Text>Attraction</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.ticketPills.includes("park")
                    ? styles.pillSelected
                    : styles.pillUnselected
                }
                onPress={() => {
                  if (!this.state.ticketPills.includes("park")) {
                    this.setState(() => ({
                      ticketPills: [...this.state.ticketPills, "park"],
                    }));
                  } else {
                    var array = [...this.state.ticketPills];
                    var index = array.indexOf("park");
                    if (index !== -1) {
                      array.splice(index, 1);
                      this.setState({ ticketPills: array });
                    }
                  }
                }}
              >
                <Text>Park</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.cardsContainer} horizontal={true}>
              {this.renderTickets(this)}
              <View style={{ width: 20 }} />
            </ScrollView>
            <View height={20} />
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    height: 250,
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
});
