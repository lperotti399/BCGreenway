import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  Dimensions,
  Image,
} from "react-native";

import PlacesIcon from "../components/PlacesIcon";
import ActivitiesIcon from "../components/ActivitiesIcon";
import AboutIcon from "../components/AboutIcon";

//import NavigationBar from "../components/NavigationBar";

//import React, { useState } from "react";
import PARKS from "../assets/data/parksList";

import React, { useEffect, useState } from "react";

function NewsScreen({
  resetNews,
  onPickAbout,
  resetActivities,
  onPickActivities,
}) {
  function resetNewsandActivitiesHandler() {
    resetNews("");
    resetActivities("");
  }

  function pickedAboutHandler() {
    onPickAbout(1);

    console.log("About icon has been pressed");
  }

  function pickedAboutAndResetNewsHandler() {
    onPickAbout(1);
    resetNews("");
  }
  function pickedActivitiesandResetNewsHandler() {
    onPickActivities(1);
    resetNews("");
    console.log("Activities icon has been pressed");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <View style={[styles.titleBannerContainer]}>
          <View style={[styles.bannerTextContainer]}>
            <Text style={[styles.titleBannerText, styles.colorWhite]}>
              News
            </Text>
          </View>

          <View style={[styles.iconContainer]}>
            <Pressable>
              <Image
                source={require("../assets/images/icons8-message-25.png")}
                style={styles.newsIconImage}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.parkContainer}>
        <Text style={styles.newsHeader}>Note</Text>
        <Text style={styles.newsDate}>May 8th 2020</Text>
        <Text style={styles.newsBody}>
          Some parks/preserves may have altered schedules and rules depending on
          local/state rules during Covid-19 pandemic. Please check individual
          park websites for any changes to operating hours or policies as well
          as state regulations for visitation.
        </Text>
      </View>
      <View style={styles.navContainer}>
        <View style={[styles.navBarContainer]}>
          <View style={[styles.placesContainer]}>
            <Pressable
              onPress={resetNewsandActivitiesHandler}
              style={styles.placesIconContainer}
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
              onPress={pickedActivitiesandResetNewsHandler}
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
            <Pressable
              style={styles.aboutIconContainer}
              onPress={pickedAboutAndResetNewsHandler}
            >
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

export default NewsScreen;

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
  aboutIconImage: {
    //backgroundColor: "white",
    width: 40,
    height: 40,
    opacity: 0.5,
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
    opacity: 0.5,
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
    lineHeight: 25,
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
