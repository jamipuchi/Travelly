import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconF from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

export default class BlablaText extends Component {
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
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dictum, felis nec consectetur aliquam, neque magna gravida diam, ut
            convallis tortor quam quis enim. Proin mattis luctus magna et
            tempus. Quisque ullamcorper sapien ante, non sodales neque faucibus
            vel. Curabitur sit amet ante ut justo lacinia ultrices nec et mi.
            Sed vel nulla eget odio tristique laoreet feugiat at nisi. Sed
            sapien dui, eleifend ac tincidunt a, laoreet sed metus. Morbi vitae
            nisl eu purus fermentum luctus dictum sed mauris. Mauris porttitor
            imperdiet quam, a malesuada ex. Mauris suscipit dolor nec neque
            sodales, nec lacinia nisi tincidunt. Vestibulum vitae est ut lacus
            tempus pharetra. Aenean imperdiet pharetra ultricies. Quisque
            faucibus neque blandit enim interdum sollicitudin. Donec rutrum eros
            nibh, et molestie nisi commodo eget. Praesent ex sem, molestie at
            ultrices eu, ullamcorper id nunc. Phasellus finibus sapien sed elit
            blandit, sed semper risus aliquam. In interdum eget tortor et
            fringilla. Sed id scelerisque quam. Suspendisse potenti. Nulla in
            augue porta, sagittis nulla quis, porta magna. Vivamus leo ante,
            fermentum in dictum in, hendrerit id arcu. Pellentesque et dapibus
            arcu. Aliquam erat volutpat. Integer non imperdiet nibh. Phasellus
            ac pharetra magna, ut tincidunt leo. Donec pretium nibh tincidunt
            lorem varius imperdiet. Quisque varius, erat id commodo consectetur,
            arcu turpis rhoncus neque, sit amet placerat ante eros in nisi.
            Pellentesque vehicula, ipsum eu vestibulum condimentum, arcu nunc
            euismod est, nec mattis nibh diam vel ex. Maecenas a faucibus elit.
            Sed ullamcorper vulputate erat, non fringilla libero interdum et.
            Suspendisse vel lorem ac urna tempus imperdiet. Praesent arcu augue,
            tempor ut ipsum ut, facilisis mollis nunc. Pellentesque malesuada
            arcu in risus vulputate vulputate et eu erat. Mauris et purus neque.
            Mauris elementum ligula non sapien bibendum ultrices. Sed commodo
            dapibus lacus, et eleifend purus blandit at. Donec fermentum
            tincidunt ipsum, ac scelerisque tellus fringilla a. In vestibulum
            tristique pulvinar. Aenean luctus risus sed lorem imperdiet
            efficitur porta eget tellus. In purus quam, malesuada quis nulla
            vestibulum, mollis mollis nunc. In hac habitasse platea dictumst.
            Proin ornare, tortor at sodales egestas, nisi orci pulvinar ex, nec
            egestas ex arcu quis risus. Aenean magna lacus, egestas sed
            venenatis et, tristique in ipsum. Curabitur venenatis odio finibus
            suscipit cursus. Donec vel rutrum ex. Vivamus at erat auctor,
            finibus leo ut, vulputate sem. Mauris ac lectus id arcu pretium
            pharetra. Mauris tincidunt, dui in auctor ornare, metus nisi
            convallis urna, eget bibendum elit lacus quis massa. Morbi non
            dictum urna. Maecenas commodo eros ex, id cursus mauris viverra ac.
            Aliquam vel quam quis leo congue tincidunt et sit amet tellus.
            Phasellus sagittis, nunc vitae ullamcorper posuere, erat eros mollis
            erat, ut tincidunt lorem sem vel justo. Curabitur elementum eros
            eget eros viverra, sit amet pretium magna ornare. Integer bibendum
            lorem dui, quis aliquam ex venenatis sed. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Phasellus dictum, felis nec
            consectetur aliquam, neque magna gravida diam, ut convallis tortor
            quam quis enim. Proin mattis luctus magna et tempus. Quisque
            ullamcorper sapien ante, non sodales neque faucibus vel. Curabitur
            sit amet ante ut justo lacinia ultrices nec et mi. Sed vel nulla
            eget odio tristique laoreet feugiat at nisi. Sed sapien dui,
            eleifend ac tincidunt a, laoreet sed metus. Morbi vitae nisl eu
            purus fermentum luctus dictum sed mauris. Mauris porttitor imperdiet
            quam, a malesuada ex. Mauris suscipit dolor nec neque sodales, nec
            lacinia nisi tincidunt. Vestibulum vitae est ut lacus tempus
            pharetra. Aenean imperdiet pharetra ultricies. Quisque faucibus
            neque blandit enim interdum sollicitudin. Donec rutrum eros nibh, et
            molestie nisi commodo eget. Praesent ex sem, molestie at ultrices
            eu, ullamcorper id nunc. Phasellus finibus sapien sed elit blandit,
            sed semper risus aliquam. In interdum eget tortor et fringilla. Sed
            id scelerisque quam. Suspendisse potenti. Nulla in augue porta,
            sagittis nulla quis, porta magna. Vivamus leo ante, fermentum in
            dictum in, hendrerit id arcu. Pellentesque et dapibus arcu. Aliquam
            erat volutpat. Integer non imperdiet nibh. Phasellus ac pharetra
            magna, ut tincidunt leo. Donec pretium nibh tincidunt lorem varius
            imperdiet. Quisque varius, erat id commodo consectetur, arcu turpis
            rhoncus neque, sit amet placerat ante eros in nisi. Pellentesque
            vehicula, ipsum eu vestibulum condimentum, arcu nunc euismod est,
            nec mattis nibh diam vel ex. Maecenas a faucibus elit. Sed
            ullamcorper vulputate erat, non fringilla libero interdum et.
            Suspendisse vel lorem ac urna tempus imperdiet. Praesent arcu augue,
            tempor ut ipsum ut, facilisis mollis nunc. Pellentesque malesuada
            arcu in risus vulputate vulputate et eu erat.
          </Text>
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
  text: { textAlign: "justify", margin: 20 },
});
