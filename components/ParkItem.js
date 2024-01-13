import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import PARKS from "../assets/data/parksList";
const ParkList = [...PARKS];
let selectedPark = [];

function ParkItem(props, { onSelectNumber }) {
  const [selectedParkName, setSelectedParkName] = useState("");

  function handleParkPress(name) {
    //console.log({ name });
    alert(`name = ${name}`);
    selectedPark = ParkList.filter((park) => park.parkName === name);
    //console.log(selectedPark);
    setSelectedParkName(name);
    const chosenPark = selectedParkName;
    //onSelectNumber(chosenPark);
    console.log(chosenPark);
  }
  return (
    <Pressable onPress={() => handleParkPress(props.name)}>
      <ImageBackground
        //source={require("../assets/images/background.png")}
        source={Number(props.image)}
        resizeMode="cover"
        style={[styles.parkItem]}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={[styles.parkNameContainer]}>
          <View style={[styles.parkNameText, styles.backgroundWhite]}>
            <Text style={(styles.colorBlack, styles.parkTextFont)}>
              {props.name}
            </Text>
          </View>

          <View style={styles.parkNameText}></View>
        </View>
        <View style={[styles.parkMilesContainer]}>
          <Text style={[styles.colorWhite, styles.parkMileDistance]}>
            {props.distance}
          </Text>
          <Text style={[styles.colorWhite, styles.parkMileDirection]}>
            MILES {props.direction}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

export default ParkItem;

const styles = StyleSheet.create({
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
});
