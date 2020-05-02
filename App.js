import React, { Component } from "react";
import { Platform, Text, Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Search from "./Views/Search";
import SearchResults from "./Views/SearchResults";
import { render } from "react-dom";
import HotelDetails from "./Views/HotelDetails";
import TicketDetails from "./Views/TicketDetails";
import FlightDetails from "./Views/FlightDetails";
import SelectedDetails from "./Views/SelectedDetails";
import Explore from "./Views/Explore";
import Trips from "./Views/Trips";
import Settings from "./Views/Settings";
import Select from "./Views/Select";
import BlablaText from "./Views/BlablaText";
import HomePage from "./Views/HomePage";
import WebSearchResults from "./Views/WebSearchResults";
import SelectedDetailsWeb from "./Views/SelectedDetailsWeb";
import BlablaTextWeb from "./Views/BlablaTextWeb";
import TripsWeb from "./Views/TripsWeb";

const Stack = createStackNavigator();

function ExploreNavigator() {
  return (
    <Stack.Navigator initialRouteName="Explore" headerMode="none">
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Search Results" component={SearchResults} />
      <Stack.Screen name="Hotel Details" component={HotelDetails} />
      <Stack.Screen name="Ticket Details" component={TicketDetails} />
      <Stack.Screen name="Flight Details" component={FlightDetails} />
      <Stack.Screen name="Selected Details" component={SelectedDetails} />
    </Stack.Navigator>
  );
}

function TripsNavigator() {
  return (
    <Stack.Navigator initialRouteName="Trips" headerMode="none">
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="Search Results" component={SearchResults} />
      <Stack.Screen name="Hotel Details" component={HotelDetails} />
      <Stack.Screen name="Ticket Details" component={TicketDetails} />
      <Stack.Screen name="Flight Details" component={FlightDetails} />
      <Stack.Screen name="Selected Details" component={SelectedDetails} />
    </Stack.Navigator>
  );
}

function SettingsNavigator() {
  return (
    <Stack.Navigator initialRouteName="Settings" headerMode="none">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Select" component={Select} />
      <Stack.Screen name="BlablaText" component={BlablaText} />
    </Stack.Navigator>
  );
}

function SearchNavigator() {
  return (
    <Stack.Navigator initialRouteName="Search" headerMode="none">
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Search Results" component={SearchResults} />
      <Stack.Screen name="Hotel Details" component={HotelDetails} />
      <Stack.Screen name="Ticket Details" component={TicketDetails} />
      <Stack.Screen name="Flight Details" component={FlightDetails} />
      <Stack.Screen name="Selected Details" component={SelectedDetails} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        activeTintColor: "#3D90E3",
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={TripsNavigator}
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="wallet-travel"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default class App extends Component {
  render() {
    if (
      Platform.OS === "web" &&
      Dimensions.get("window").width > Dimensions.get("window").height
    ) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Homepage" headerMode="none">
            <Stack.Screen name="Homepage" component={HomePage} />
            <Stack.Screen name="Search Results" component={WebSearchResults} />
            <Stack.Screen
              name="Selected Details"
              component={SelectedDetailsWeb}
            />
            <Stack.Screen name="Blabla" component={BlablaTextWeb} />
            <Stack.Screen name="Trips" component={TripsWeb} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      );
    }
  }
}
