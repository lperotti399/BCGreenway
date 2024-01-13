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

import NavigationBar from "../components/NavigationBar";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import NewsIcon from "../components/NewsIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//import React, { useState } from "react";
import PARKS from "../assets/data/parksList";

import React, { useEffect, useState } from "react";

function getImage(input) {
  if (input === "TRAILS") {
    return require("../assets/images/hiking.png");
  } else if (input === "BOATING") {
    return require("../assets/images/man-in-canoe.png");
  } else if (input === "BIKING") {
    return require("../assets/images/bicycle-rider.png");
  } else if (input === "FISHING") {
    return require("../assets/images/fishing-man.png");
  } else if (input === "EQUESTRIAN") {
    return require("../assets/images/map.png");
  } else if (input === "SWIMMING") {
    return require("../assets/images/swimming.png");
  } else if (input === "BIRDING") {
    return require("../assets/images/binoculars.png");
  } else if (input === "SPORTS") {
    return require("../assets/images/badminton.png");
  } else if (input === "PLAYGROUND") {
    return require("../assets/images/swing.png");
  } else if (input === "PICNIC") {
    return require("../assets/images/picnic-table.png");
  }
}

function ParkListScreen({
  onPickPark,
  onPickNews,
  onPickAbout,
  onPickActivities,
}) {
  let [currentLocation, setCurrentLocation] = useState({
    accuracy: 5,
    altitude: 0,
    altitudeAccuracy: -1,
    heading: -1,
    latitude: 39.8846,
    longitude: -75.5063,
    speed: -1,
  });
  const [initialRegion, setInitialRegion] = useState(null);
  const [selectedParkName, setSelectedParkName] = useState("");
  const [newsButton, setNewsButton] = useState("");

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      console.log(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    };

    getLocation();
  }, []);

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1); // deg2rad below
    let dLon = deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c * 0.621371; // Distance in km
    let e = d.toFixed(1);
    return e;
  }
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getCompassDirectFromLatLon(lat1, long1, lat2, long2) {
    margin = Math.PI / 90; // 2 degree tolerance for cardinal directions
    o = lat1 - lat2;
    a = long1 - long2;
    angle = Math.atan2(o, a);

    if (angle > -margin && angle < margin) {
      return "EAST";
    } else if (angle > Math.PI / 2 - margin && angle < Math.PI / 2 + margin) {
      return "NORTH";
    } else if (angle > Math.PI - margin && angle < -Math.PI + margin) {
      return "WEST";
    } else if (angle > -Math.PI / 2 - margin && angle < -Math.PI / 2 + margin) {
      return "SOUTH";
    } else if (angle > 0 && angle < Math.PI / 2) {
      return "NORTH EAST";
    } else if (angle > Math.PI / 2 && angle < Math.PI) {
      return "NORTH WEST";
    } else if (angle > -Math.PI / 2 && angle < 0) {
      return "SOUTH EAST";
    } else {
      return "SOUTH WEST";
    }
  }

  let newPARKS = PARKS.map((park) => {
    return {
      ...park,
      userDistance: getDistanceFromLatLonInKm(
        currentLocation.latitude,
        currentLocation.longitude,
        park.latitude,
        park.longitude
      ),
      compassDirection: getCompassDirectFromLatLon(
        park.latitude,
        park.longitude,
        currentLocation.latitude,
        currentLocation.longitude
      ),
    };
  });
  function handleParkPress(name) {
    onPickPark(name);
    setSelectedParkName(name);
  }

  function pickedNewsHandler() {
    onPickNews(1);

    console.log("News icon has been pressed");
  }

  function pickedAboutHandler() {
    onPickAbout(1);

    console.log("About icon has been pressed");
  }
  function pickedActivitiesHandler() {
    onPickActivities(1);
    console.log("Activities icon has been pressed");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <View style={[styles.titleBannerContainer]}>
          <View style={[styles.bannerTextContainer]}>
            <Text style={[styles.titleBannerText, styles.colorWhite]}>
              Nearby Places
            </Text>
          </View>
          <View style={[styles.iconContainer]}>
            <Pressable onPress={pickedNewsHandler}>
              <Image
                source={require("../assets/images/icons8-message-25.png")}
                style={styles.newsIconImage}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.parkContainer}>
        <FlatList
          data={newPARKS.sort((a, b) => a.userDistance - b.userDistance)}
          alwaysBounceVertical={false}
          keyboardShouldPersistTaps="handled"
          renderItem={(itemData) => {
            console.log(typeof itemData.item.activities);
            return (
              <Pressable
                onPress={() => {
                  handleParkPress(itemData.item.parkName);
                }}
                keyboardShouldPersistTaps="handled"
              >
                <ImageBackground
                  source={Number(itemData.item.parkImg)}
                  resizeMode="cover"
                  style={[styles.parkItem]}
                  imageStyle={{ opacity: 0.5 }}
                >
                  <View style={[styles.parkNameContainer]}>
                    <View style={[styles.parkNameText, styles.backgroundWhite]}>
                      <Text style={(styles.colorBlack, styles.parkTextFont)}>
                        {itemData.item.parkName}
                      </Text>
                    </View>

                    <View style={styles.activityList}>
                      {PARKS.filter(
                        (park) => park.parkName === itemData.item.parkName
                      )[0].activities?.map((activity) => {
                        const image = getImage(activity);
                        console.log(image);
                        return (
                          <View style={styles.activityItemContainer}>
                            <View style={styles.activityItem}>
                              <Image
                                style={styles.activityImage}
                                source={Number(image)}
                              />
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  </View>

                  <View style={[styles.parkMilesContainer]}>
                    <Text style={[styles.colorWhite, styles.parkMileDistance]}>
                      {itemData.item.userDistance}
                    </Text>
                    <Text style={[styles.colorWhite, styles.parkMileDirection]}>
                      MILES {itemData.item.compassDirection}
                    </Text>
                  </View>
                </ImageBackground>
              </Pressable>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <View style={styles.navContainer}>
        <View style={[styles.navBarContainer]}>
          <View style={[styles.placesContainer]}>
            <Pressable style={styles.placesIconContainer}>
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
              onPress={pickedActivitiesHandler}
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
              onPress={pickedAboutHandler}
              style={styles.aboutIconContainer}
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

export default ParkListScreen;

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
    marginHorizontal: 10,
  },
  newsIconImage: {
    width: 30,
    height: 30,
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
  titleBannerContainer: {
    //flex: 1,
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
});
