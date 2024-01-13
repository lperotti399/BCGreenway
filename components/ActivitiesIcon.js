import { StyleSheet, Text, Pressable, Image } from "react-native";

function ActivitiesIcon() {
  return (
    <Pressable style={styles.activitiesIconContainer}>
      <Image
        source={require("../assets/images/icons8-runner-48.png")}
        style={styles.activitiesIconImage}
      />
      <Text style={styles.activitiesIconText}>ACTIVITIES</Text>
    </Pressable>
  );
}

export default ActivitiesIcon;

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
});
