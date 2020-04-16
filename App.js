import * as React from "react";
import { Text, View } from "react-native";
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

const Stack = createStackNavigator();

function Explore() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Explore!</Text>
    </View>
  );
}

function Trips() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Trips!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
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
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
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
        component={Settings}
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

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
