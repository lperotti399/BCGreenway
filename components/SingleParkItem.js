import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Linking,
} from "react-native";
import PARKS from "../assets/data/parksList";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import CarouselCards from "./CarouselCards";

import Hyperlink from "react-native-hyperlink";

const selectedParkName = "ChesLen Preserve";

function SingleParkItem(props) {
  function getParkMarkerCoordinate() {
    const value = PARKS.filter((park) => park.parkName === selectedParkName)[0]
      .region;
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
        data={PARKS.filter((park) => park.parkName === selectedParkName)}
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
    const value = PARKS.filter((park) => park.parkName === selectedParkName)[0]
      .region;

    return value;
  }
  const parkRegion = getParkRegion();

  return (
    <View>
      <View style={styles.townshipTextContainer}>
        <SingleParkTownshipText />
      </View>
      <SafeAreaView style={styles.imageContainer}>
        <CarouselCards />
      </SafeAreaView>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{props.description}</Text>
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
                  `https://www.google.com/maps/search/?api=1&query=${props.latitude}%2C${props.longitude}`
                );
              }}
            >
              GET DIRECTIONS
            </Text>
          </View>
        </View>
        <View style={[styles.overlayMap]}></View>
      </View>

      <View style={styles.notesAndTipsTextContainer}>
        <Text style={styles.notesAndTipsContainer}>NOTES & TIPS</Text>
      </View>
      <View style={styles.triangleContainer}>
        <View style={styles.triangle}></View>
      </View>

      <View style={styles.notesAndTips}>
        {PARKS.filter(
          (park) => park.parkName === selectedParkName
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
}
export default SingleParkItem;

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
  overlayMap: {
    position: "absolute",
    height: 360,
    left: 0,
    top: 0,
    width: "100%",
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
