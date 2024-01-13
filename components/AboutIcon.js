import { StyleSheet, Text, Pressable, Image } from "react-native";

function AboutIcon() {
  return (
    <Pressable style={styles.aboutIconContainer}>
      <Image
        source={require("../assets/images/icons8-leaf-64.png")}
        style={styles.aboutIconImage}
      />
      <Text style={styles.aboutIconText}>ABOUT</Text>
    </Pressable>
  );
}

export default AboutIcon;

const styles = StyleSheet.create({
  aboutIconImage: {
    //backgroundColor: "white",
    width: 40,
    height: 40,
    opacity: 0.5,
  },
  aboutIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  aboutIconText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(37, 127, 107)",
    fontFamily: "Arial Rounded MT Bold",
    opacity: 0.5,
  },
});
