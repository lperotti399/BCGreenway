import { StyleSheet, View, Text } from "react-native";
import PlacesIcon from "./PlacesIcon";
import ActivitiesIcon from "./ActivitiesIcon";
import AboutIcon from "./AboutIcon";

function NavigationBar() {
  return (
    <View style={[styles.navBarContainer]}>
      <View style={[styles.placesContainer]}>
        <PlacesIcon />
      </View>
      <View style={[styles.activitiesContainer]}>
        <ActivitiesIcon />
      </View>
      <View style={[styles.aboutContainer]}>
        <AboutIcon />
      </View>
    </View>
  );
}

export default NavigationBar;

const styles = StyleSheet.create({
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
});
