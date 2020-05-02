import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconF from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.route.params.info.default,
    };
  }

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
              size={40}
              color="black"
            />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>
              {this.props.route.params.name}
            </Text>
          </View>
        </View>
        <ScrollView>
          {this.props.route.params.info.list.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => this.setState({ selected: i })}
                style={styles.clickableRow}
              >
                <Text>{item}</Text>
                {i == this.state.selected ? (
                  <IconF
                    style={styles.rightArrow}
                    name="ios-checkmark"
                    size={30}
                    color="white"
                  />
                ) : (
                  <View />
                )}
              </TouchableOpacity>
            );
          })}
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
    paddingBottom: 20,
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

  safeAreaView: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 5,
      },
      android: {
        marginTop: StatusBar.currentHeight + 20,
      },
    }),
  },
  clickableRow: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    justifyContent: "space-between",
  },
  rightArrow: {
    width: 30,
    height: 30,
    borderRadius: 15,
    paddingLeft: 8,
    backgroundColor: "#4CD964",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.01,
    shadowRadius: 6.27,

    elevation: 3,
    overflow: "hidden",
  },
});
