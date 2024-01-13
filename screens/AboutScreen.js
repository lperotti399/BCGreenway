import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import Hyperlink from "react-native-hyperlink";
import PlacesIcon from "../components/PlacesIcon";
import ActivitiesIcon from "../components/ActivitiesIcon";
import AboutIcon from "../components/AboutIcon";

import { Linking } from "react-native";

//import NavigationBar from "../components/NavigationBar";

//import React, { useState } from "react";
import PARKS from "../assets/data/parksList";

import React, { useEffect, useState } from "react";

function AboutScreen({ resetAbout, onPickNews, onPickActivities }) {
  function resetNewsHandler() {
    resetNews("");
  }

  function resetAboutHandler() {
    resetAbout("");
  }

  function resetAboutAndSetNewsHandler() {
    resetAbout("");
    onPickNews(1);
  }
  function pickedActivitiesandResetAboutHandler() {
    onPickActivities(1);
    resetAbout("");
    console.log("Activities icon has been pressed");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <View style={[styles.titleBannerContainer]}>
          <View style={[styles.bannerTextContainer]}>
            <Text style={[styles.titleBannerText, styles.colorWhite]}>
              About
            </Text>
          </View>

          <View style={[styles.iconContainer]}>
            <Pressable onPress={resetAboutAndSetNewsHandler}>
              <Image
                source={require("../assets/images/icons8-message-25.png")}
                style={styles.newsIconImage}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.parkContainer}>
        <ScrollView>
          <Text style={styles.newsHeader}>
            Protecting the Brandywine Watershed
          </Text>
          <Hyperlink
            linkDefault={true}
            linkStyle={{ color: "#18584Aff" }}
            linkText={(url) =>
              url === "https://ledigital.com/privacy-policies/brandywine.html"
                ? "Privacy Policy"
                : url
            }
          >
            <Text style={styles.newsBody}>
              The Brandywine Creek Greenway is an initiative of the Brandywine
              Conservancy and twenty-nine municipal partners. The Greenway is
              envisioned as a forty-mile long conservation corridor that
              connects trails, open spaces, parks, river access points, and area
              attractions. It embraces the natural and cultural resources of the
              Brandywine Creek corridor and supports healthy, sustainable
              communities. {"\n\n"}This app is made possible with generous
              support from the William Penn Foundation. {"\n\n"} For information
              on the Brandywine Creek Greenway, visit
              www.brandywine.org/conservancy/greenway
              {"\n\n"} View our
              https://ledigital.com/privacy-policies/brandywine.html
            </Text>
          </Hyperlink>
          <Image
            source={require("../assets/images/BC_horizontal_CMYK.png")}
            style={styles.aboutLogo}
          />
        </ScrollView>
      </View>
      <View style={styles.navContainer}>
        <View style={[styles.navBarContainer]}>
          <View style={[styles.placesContainer]}>
            <Pressable
              style={styles.placesIconContainer}
              onPress={resetAboutHandler}
            >
              <View style={styles.placesImageContainer}>
                <Image
                  source={require("../assets/images/icons8-bench-26.png")}
                  style={styles.placesIconImage}
                />
                <Image
                  source={require("../assets/images/icons8-trees-26.png")}
                  style={styles.placesIconImage}
                />
              </View>

              <Text style={styles.placesIconText}>PLACES</Text>
            </Pressable>
          </View>
          <View style={[styles.activitiesContainer]}>
            <Pressable
              onPress={pickedActivitiesandResetAboutHandler}
              style={styles.activitiesIconContainer}
            >
              <Image
                source={require("../assets/images/icons8-runner-48.png")}
                style={styles.activitiesIconImage}
              />
              <Text style={styles.activitiesIconText}>ACTIVITIES</Text>
            </Pressable>
          </View>
          <View style={[styles.aboutContainer]}>
            <Pressable style={styles.aboutIconContainer}>
              <Image
                source={require("../assets/images/icons8-leaf-64.png")}
                style={styles.aboutIconImage}
              />
              <Text style={styles.aboutIconText}>ABOUT</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  activitiesIconImage: {
    //backgroundColor: "white",
    width: 40,
    height: 40,
    opacity: 0.5,
  },
  activitiesIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  activitiesIconText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(37, 127, 107)",
    fontFamily: "Arial Rounded MT Bold",
    opacity: 0.5,
  },
  aboutLogo: {
    width: 300,
    height: 100,
  },
  aboutIconImage: {
    //backgroundColor: "white",
    width: 40,
    height: 40,
  },
  aboutIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  aboutIconText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(37, 127, 107)",
    fontFamily: "Arial Rounded MT Bold",
  },
  placesIconImage: {
    width: 20,
    height: 20,
    opacity: 0.5,
  },
  placesIconContainer: {
    alignItems: "center",
  },
  placesIconText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(37, 127, 107)",
    fontFamily: "Arial Rounded MT Bold",
    marginTop: 8,
    opacity: 0.5,
  },
  placesImageContainer: {
    flexDirection: "row",
  },
  navBarContainer: {
    flexDirection: "row",
    backgroundColor: "rgb(254, 254, 254)",
    padding: 20,
  },
  placesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activitiesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  newsIconImage: {
    width: 30,
    height: 30,
  },
  titleBannerContainer: {
    backgroundColor: "rgb(37, 127, 107)",
    flexDirection: "row",
    paddingLeft: 20,
    paddingVertical: 20,
    paddingRight: 8,
  },
  colorWhite: {
    color: "white",
  },
  titleBannerText: {
    color: "rgb(254, 254, 254)",
    fontSize: 22,
    fontFamily: "Trebuchet-BoldItalic",
    fontWeight: "bold",
  },
  bannerTextContainer: {
    alignItems: "center",
    flex: 9,
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  newsHeader: {
    fontSize: 22,
    paddingLeft: 20,
    paddingTop: 30,
    fontStyle: "italic",
  },
  newsDate: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    color: "rgba(24, 88, 74, 1)",
  },
  newsBody: {
    paddingLeft: 20,
    paddingTop: 10,
    textAlign: "justify",
    lineHeight: 20,
    paddingRight: 30,
  },
  parkContainer: {
    flex: 7,
    marginHorizontal: 10,
  },
  navContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    //paddingHorizontal: 16,
  },
  parkItem: {
    marginTop: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    //borderRadius: 10,
    backgroundColor: "#495D63",
    flexDirection: "row",

    //opacity: 0.7,
  },
  colorWhite: {
    color: "white",
  },
  colorBlack: {
    color: "black",
  },
  parkMilesContainer: {
    alignItems: "center",
    flex: 1,
  },
  parkMileDistance: {
    fontSize: 48,
    fontWeight: "bold",
  },
  parkMileDirection: {
    fontSize: 12,
    fontWeight: "bold",
  },
  parkNameContainer: {
    padding: 8,
    flex: 1,
  },
  backgroundWhite: {
    backgroundColor: "white",
  },
  parkNameText: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  parkTextFont: {
    //fontFamily: "Trebuchet-BoldItalic",
    fontFamily: "TrebuchetMS-Italic",
    fontSize: 14,
  },
  activityItem: {
    backgroundColor: "white",
    padding: 5,
    alignSelf: "center",
  },
  activityImage: {
    width: 25,
    height: 25,
  },
  activityItemContainer: {
    margin: 5,
    padding: 5,
  },
  activityList: {
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 4,
  },
});
