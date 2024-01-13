import {
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Text,
  Image,
  FlatList,
} from "react-native";
//import SingleParkTitleBanner from "../components/SingleParkTitleBanner";
import SingleParkItemList from "../components/SingleParkItemList";
import NavigationBar from "../components/NavigationBar";
import React, { useState } from "react";
import PlacesIcon from "../components/PlacesIcon";
import ActivitiesIcon from "../components/ActivitiesIcon";
import AboutIcon from "../components/AboutIcon";
import NewsIcon from "../components/NewsIcon";
import PARKS from "../assets/data/parksList";

function ParkText(props) {
  return (
    <Text style={[styles.titleBannerText, styles.colorWhite]}>
      {props.name}
    </Text>
  );
}

function SingleParkBannerText({ userPark }) {
  return (
    <FlatList
      data={PARKS.filter((park) => park.parkName === userPark)}
      alwaysBounceVertical={false}
      renderItem={(itemData) => {
        return <ParkText name={itemData.item.parkName} id={itemData.item.id} />;
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
}

function SelectedParkScreen({
  userPark,
  resetPark,
  onPickAbout,
  onPickNews,
  onPickActivities,
}) {
  function resetParkHandler() {
    resetPark("");
    console.log("Ive been pressed");
  }
  function pickedNewsHandler() {
    onPickNews(1);

    console.log("News icon has been pressed");
  }

  function pickedAboutHandler() {
    onPickAbout(1);

    console.log("About icon has been pressed");
  }
  function resetParkHandler() {
    resetPark("");
    console.log("Ive been pressed");
  }

  function pickActivitiesHandler() {
    onPickActivities(1);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        {/* <SingleParkTitleBanner userPark={userPark} resetPark={resetPark} /> */}
        <View>
          <View style={[styles.titleBannerContainer]}>
            <View style={[styles.backIconContainer]}>
              <Pressable onPress={resetParkHandler}>
                <Image
                  source={require("../assets/images/left-arrow.png")}
                  style={styles.newsIconImage}
                />
              </Pressable>
            </View>
            <View style={[styles.bannerTextContainer]}>
              <SingleParkBannerText userPark={userPark} />
            </View>
            <View style={[styles.iconContainer]}>
              <Pressable onPress={pickedNewsHandler}>
                <NewsIcon />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.parkContainer}>
        <SingleParkItemList userPark={userPark} />
      </View>
      <View style={styles.navContainer}>
        <View style={[styles.navBarContainer]}>
          <View style={[styles.placesContainer]}>
            <Pressable
              style={styles.placesIconContainer}
              onPress={resetParkHandler}
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
              style={styles.activitiesIconContainer}
              onPress={pickActivitiesHandler}
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
              onPress={pickedAboutHandler}
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
export default SelectedParkScreen;

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
  newsIconImage: {
    //backgroundColor: "white",
    width: 30,
    height: 30,
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
    //backgroundColor: "white",
    width: 20,
    height: 20,
  },
  placesIconContainer: {
    alignItems: "center",
    // paddingTop: 2,
  },
  placesIconText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(37, 127, 107)",
    fontFamily: "Arial Rounded MT Bold",
    marginTop: 8,
  },
  placesImageContainer: {
    flexDirection: "row",
  },
  navBarContainer: {
    flexDirection: "row",
    //justifyContent: "space-evenly",
    //flex: 1,
    backgroundColor: "rgb(254, 254, 254)",
    padding: 20,
  },
  placesContainer: {
    flex: 1,
    //borderWidth: 2,
    //borderColor: "black",
    justifyContent: "center",
    alignItems: "center",

    //width: "100%",
  },
  activitiesContainer: {
    flex: 1,
    //width: "100%",
    //borderWidth: 2,
    //borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutContainer: {
    flex: 1,
    //borderWidth: 2,
    //borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  parkContainer: {
    flex: 7,
    //marginHorizontal: 10,
  },
  navContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    //marginBottom: 30,
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
  titleBannerContainer: {
    //flex: 1,
    backgroundColor: "rgb(37, 127, 107)",
    flexDirection: "row",
    paddingLeft: 5,
    paddingVertical: 20,
    paddingRight: 8,
  },
  colorWhite: {
    color: "white",
  },
  titleBannerText: {
    color: "rgb(254, 254, 254)",
    fontSize: 22,
    //textAlignVertical: "center",
    fontFamily: "Trebuchet-BoldItalic",
    fontWeight: "bold",
  },
  bannerTextContainer: {
    alignItems: "center",
    flex: 9,
    //borderWidth: 5,
    //borderColor: "black",
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  backIconContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  townshipContainer: {
    backgroundColor: "rgb(37, 127, 107)",
    flexDirection: "row",
  },
  townshipTitle: {
    textAlign: "center",
    color: "rgb(254, 254, 254)",
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 11,
    fontWeight: "bold",
    flex: 1,
    padding: 5,
  },
  newsIconImage: {
    //backgroundColor: "white",
    width: 20,
    height: 20,
  },
});
