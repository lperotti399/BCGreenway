import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
