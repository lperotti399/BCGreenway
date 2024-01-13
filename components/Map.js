import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function GreenwayMap() {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 39.92222794737232,
          longitude: -75.72569401299627,
          latitudeDelta: 0.005,
          longitudeDelta: 0.004,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: 200,
  },
});
