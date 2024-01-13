import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function NewsTitleBanner() {
  return (
    <View style={[styles.titleBannerContainer]}>
      <View style={[styles.bannerTextContainer]}>
        <Text style={[styles.titleBannerText, styles.colorWhite]}>News</Text>
      </View>

      <View style={[styles.iconContainer]}>
        <Pressable>
          <Image
            source={require("../assets/images/icons8-message-25.png")}
            style={styles.newsIconImage}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default NewsTitleBanner;

const styles = StyleSheet.create({
  newsIconImage: {
    width: 30,
    height: 30,
  },
  titleBannerContainer: {
    backgroundColor: "rgb(37, 127, 107)",
    flexDirection: "row",
    paddingLeft: 20,
    paddingVertical: 20,
    paddingRight: 8,
  },
  colorWhite: {
    color: "white",
  },
  titleBannerText: {
    color: "rgb(254, 254, 254)",
    fontSize: 22,
    fontFamily: "Trebuchet-BoldItalic",
    fontWeight: "bold",
  },
  bannerTextContainer: {
    alignItems: "center",
    flex: 9,
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});
