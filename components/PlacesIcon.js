import { StyleSheet, Text, Pressable, Image, View } from "react-native";

function PlacesIcon() {
  return (
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
  );
}

export default PlacesIcon;

const styles = StyleSheet.create({
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
});
