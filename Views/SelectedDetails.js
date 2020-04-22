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
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconMC from "react-native-vector-icons/MaterialCommunityIcons";
import images from "../assets/images";
import MapView from "react-native-maps";
import { Marker, AnimatedRegion } from "react-native-maps";
import hotels from "../assets/hotels.json";
import flights from "../assets/flights.json";
import tickets from "../assets/tickets.json";

export default class SelectedDetails extends Component {
  render() {
    console.log(this.props.route.params.flight);
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
        {(this.props.route.params.flight >= 0 ||
          this.props.route.params.hotel >= 0 ||
          this.props.route.params.tickets.length > 0) && (
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
            <View style={styles.card}>
              <View style={styles.hotelInfo}>
                <View style={styles.airlineName}>
                  <Text>{flights[this.props.route.params.flight].name}</Text>
                </View>
              </View>
              <View
                style={{
                  marginRight: 20,
                  marginLeft: 20,
                  marginTop: 60,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 17 }}>16:30</Text>
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
                    <Text>Direct</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 17 }}>18:30</Text>
              </View>
              <View
                style={{
                  marginRight: 20,
                  marginLeft: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 17 }}>16:30</Text>
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
                    <Text>Direct</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 17 }}>18:30</Text>
              </View>
              <View style={styles.separator} />
              <Text style={styles.hotelPrice}>
                ${flights[this.props.route.params.flight].price}
              </Text>
            </View>
          )}
          {this.props.route.params.hotel >= 0 && (
            <View style={styles.card}>
              <ImageBackground
                source={images.hotels[this.props.route.params.hotel]}
                style={styles.hotelImage}
              >
                <View style={styles.hotelInfo}>
                  <View style={styles.hotelName}>
                    <Text>{hotels[this.props.route.params.hotel].name}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    {[
                      ...Array(hotels[this.props.route.params.hotel].stars),
                    ].map((e, i) => (
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
              </ImageBackground>
              <Text style={styles.hotelPrice}>
                ${hotels[this.props.route.params.hotel].price} for 1 night
              </Text>
            </View>
          )}
          {this.props.route.params.tickets.map(function (item, i) {
            return (
              <View style={styles.card}>
                <ImageBackground
                  source={images.tickets[item]}
                  style={styles.hotelImage}
                >
                  <View style={styles.hotelInfo}>
                    <View style={styles.hotelName}>
                      <Text>{tickets[item].name}</Text>
                    </View>
                  </View>
                </ImageBackground>
                <Text style={styles.hotelPrice}>{tickets[item].price}</Text>
              </View>
            );
          })}

          <View style={{ height: 100 }} />
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
    height: 200,
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
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden",
    height: 150,
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
