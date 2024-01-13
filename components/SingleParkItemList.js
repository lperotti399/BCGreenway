import PARKS from "../assets/data/parksList";
import SingleParkItem from "./SingleParkItem";

const selectedParkName = "ChesLen Preserve";

import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Linking,
} from "react-native";

import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import CarouselCards from "./CarouselCards";

import Hyperlink from "react-native-hyperlink";

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

function SingleParkItemList({ userPark }) {
  function getParkMarkerCoordinate() {
    const value = PARKS.filter((park) => park.parkName === userPark)[0].region;
    return value;
  }
  const parkMarkerCoordinate = getParkMarkerCoordinate();
  console.log(parkRegion);

  function TownshipText(props) {
    return <Text style={styles.townshipContainer}>{props.township}</Text>;
  }

  function SingleParkTownshipText() {
    return (
      <FlatList
        data={PARKS.filter((park) => park.parkName === userPark)}
        alwaysBounceVertical={false}
        renderItem={(itemData) => {
          return (
            <TownshipText
              township={itemData.item.township}
              id={itemData.item.id}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    );
  }

  function getParkRegion() {
    const value = PARKS.filter((park) => park.parkName === userPark)[0].region;

    return value;
  }
  const parkRegion = getParkRegion();

  return (
    <FlatList
      data={PARKS.filter((park) => park.parkName === userPark)}
      alwaysBounceVertical={false}
      renderItem={(itemData) => {
        return (
          <View>
            <View style={styles.townshipTextContainer}>
              <SingleParkTownshipText />
            </View>
            <SafeAreaView style={styles.imageContainer}>
              <CarouselCards userPark={userPark} />
            </SafeAreaView>
            <View style={styles.activityList}>
              {PARKS.filter(
                (park) => park.parkName === userPark
              )[0].activities.map((activity) => {
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
                    <Text style={styles.activityText}>{activity}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.facilityList}>
              {PARKS.filter(
                (park) => park.parkName === userPark
              )[0].facilities.map((facility) => {
                return (
                  <View style={styles.facilityItem}>
                    <Text style={styles.facilityText}>{facility}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.description}>
                {itemData.item.description1}
              </Text>
            </View>
            <View>
              <MapView
                style={styles.map}
                initialRegion={parkRegion}
                pitchEnabled={false}
                rotateEnabled={false}
                zoomEnabled={false}
                scrollEnabled={false}
                provider={PROVIDER_GOOGLE}
              >
                <Marker coordinate={parkMarkerCoordinate} />
              </MapView>
              <View style={styles.overlay}>
                <View style={styles.rectangle}>
                  <Text
                    style={styles.directionsText}
                    onPress={() => {
                      Linking.openURL(
                        // "https://www.google.com/maps/search/?api=1&query=39.9222%2C-75.7256"
                        `https://www.google.com/maps/search/?api=1&query=${itemData.item.latitude}%2C${itemData.item.longitude}`
                      );
                    }}
                  >
                    GET DIRECTIONS
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.notesAndTipsTextContainer}>
              <Text style={styles.notesAndTipsContainer}>NOTES & TIPS</Text>
            </View>
            <View style={styles.triangleContainer}>
              <View style={styles.triangle}></View>
            </View>

            <View style={styles.notesAndTips}>
              {PARKS.filter(
                (park) => park.parkName === userPark
              )[0].notesAndTips.map((note) => {
                return (
                  <Hyperlink
                    key={note.noteId}
                    linkDefault={true}
                    linkStyle={{ color: "#18584Aff" }}
                  >
                    <View style={styles.note}>
                      <Text>{`\n\u2022 ${note.noteName}`}</Text>
                    </View>
                  </Hyperlink>
                );
              })}
            </View>
          </View>
        );
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
}

export default SingleParkItemList;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    padding: 10,
  },
  description: {
    textAlign: "justify",
    lineHeight: 20,
  },
  notesAndTips: {
    padding: 15,
    margin: 10,
  },
  activityItem: {
    //margin: 5,
    backgroundColor: "#ECEAE4ff",
    padding: 5,

    alignSelf: "center",
  },
  activityImage: {
    width: 35,
    height: 35,
  },
  activityItemContainer: {
    margin: 5,
    padding: 5,
  },
  activityList: {
    paddingLeft: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 10,
  },
  activityText: {
    fontSize: 10,
    marginTop: 5,
  },
  facilityItem: { margin: 5, backgroundColor: "#ECEAE4ff", padding: 5 },
  facilityList: {
    paddingLeft: 20,
    flexDirection: "row",
  },
  facilityText: {
    fontSize: 10,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 15,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "rgba(24, 88, 74, 1)",
    transform: [{ rotate: "180deg" }],
  },
  triangleContainer: {
    flex: 1,
    alignItems: "center",
  },
  mapContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    padding: 20,
  },
  bannerTextContainer: {
    alignItems: "center",
    flex: 9,
    //borderWidth: 5,
    //borderColor: "black",
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 120,
  },
  map: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  townshipContainer: {
    //color: "white",
    //fontWeight: "bold",
    //flex: 1,
    color: "rgb(254, 254, 254)",
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 11,
    fontWeight: "bold",
  },
  townshipTextContainer: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgb(37, 127, 107)",
  },
  notesAndTipsTextContainer: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(24, 88, 74, 1)",
  },
  notesAndTipsContainer: {
    //flex: "row",
    color: "white",
    fontWeight: "bold",
    flex: 1,
  },
  rectangle: {
    width: 80 * 2,
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "rgba(24, 88, 74, 1)",
    borderLeftColor: "rgba(24, 88, 74, 1)",
    borderBottomColor: "rgba(24, 88, 74, 1)",
    borderRightColor: "rgba(24, 88, 74, 1)",
    borderWidth: 2,
    marginBottom: 30,
  },
  directionsText: {
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    color: "rgba(24, 88, 74, 1)",
    fontFamily: "Trebuchet-BoldItalic",
  },
});
