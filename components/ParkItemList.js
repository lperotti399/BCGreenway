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

function ParkItemList() {
  const [selectedParkName, setSelectedParkName] = useState("");

  function handleParkPress(name) {
    alert(`name = ${name}`);
    selectedPark = ParkList.filter((park) => park.parkName === name);
    setSelectedParkName(name);
    const chosenPark = selectedParkName;
    console.log(chosenPark);
  }
  return (
    <FlatList
      data={PARKS.sort((a, b) => a.distanceAway - b.distanceAway)}
      alwaysBounceVertical={false}
      renderItem={(itemData) => {
        return (
          <Pressable onPress={() => handleParkPress(itemData.item.parkName)}>
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
                </View>

                <View style={styles.parkNameText}></View>
              </View>
              <View style={[styles.parkMilesContainer]}>
                <Text style={[styles.colorWhite, styles.parkMileDistance]}>
                  {itemData.item.distanceAway}
                </Text>
                <Text style={[styles.colorWhite, styles.parkMileDirection]}>
                  MILES {itemData.item.distanceDirection}
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
  );
}

export default ParkItemList;

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
