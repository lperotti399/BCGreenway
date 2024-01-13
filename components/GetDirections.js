import React from "react";
import { Linking, Text, View, StyleSheet } from "react-native";

function GetDirections() {
  return (
    <View style={styles.rectangle}>
      <Text
        style={styles.directionsText}
        onPress={() => {
          Linking.openURL(
            "https://www.google.com/maps/search/?api=1&query=39.9222%2C-75.7256"
          );
        }}
      >
        GET DIRECTIONS
      </Text>
    </View>
  );
}

export default GetDirections;

const styles = StyleSheet.create({
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
