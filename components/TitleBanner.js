import { StyleSheet, View, Text } from "react-native";

import NewsIcon from "./NewsIcon";

function TitleBanner() {
  return (
    <View style={[styles.titleBannerContainer]}>
      <View style={[styles.bannerTextContainer]}>
        <Text style={[styles.titleBannerText, styles.colorWhite]}>
          Nearby Places
        </Text>
      </View>
      <View style={[styles.iconContainer]}>
        <NewsIcon />
      </View>
    </View>
  );
}

export default TitleBanner;

const styles = StyleSheet.create({
  titleBannerContainer: {
    //flex: 1,
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
    //textAlignVertical: "center",
    fontFamily: "Trebuchet-BoldItalic",
    fontWeight: "bold",
  },
  bannerTextContainer: {
    alignItems: "center",
    flex: 9,
    //borderWidth: 5,
    //borderColor: "black",
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});
