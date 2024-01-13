import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
} from "react-native";

import NewsIcon from "./NewsIcon";
import PARKS from "../assets/data/parksList";

const selectedParkName = "ChesLen Preserve";

function ParkText(props) {
  return (
    <Text style={[styles.titleBannerText, styles.colorWhite]}>
      {props.name}
    </Text>
  );
}

function SingleParkBannerText({ userPark }) {
  return (
    <FlatList
      data={PARKS.filter((park) => park.parkName === userPark)}
      alwaysBounceVertical={false}
      renderItem={(itemData) => {
        return <ParkText name={itemData.item.parkName} id={itemData.item.id} />;
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
}

function SingleParkTitleBanner({ userPark, resetPark }) {
  function resetParkHandler() {
    resetPark("");
    console.log("Ive been pressed");
  }

  return (
    <View>
      <View style={[styles.titleBannerContainer]}>
        <View style={[styles.backIconContainer]}>
          <Pressable onPress={resetParkHandler}>
            <Image
              source={require("../assets/images/left-arrow.png")}
              style={styles.newsIconImage}
            />
          </Pressable>
        </View>
        <View style={[styles.bannerTextContainer]}>
          <SingleParkBannerText userPark={userPark} />
        </View>
        <View style={[styles.iconContainer]}>
          <NewsIcon />
        </View>
      </View>
    </View>
  );
}

export default SingleParkTitleBanner;

const styles = StyleSheet.create({
  titleBannerContainer: {
    //flex: 1,
    backgroundColor: "rgb(37, 127, 107)",
    flexDirection: "row",
    paddingLeft: 5,
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
  backIconContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  townshipContainer: {
    backgroundColor: "rgb(37, 127, 107)",
    flexDirection: "row",
  },
  townshipTitle: {
    textAlign: "center",
    color: "rgb(254, 254, 254)",
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 11,
    fontWeight: "bold",
    flex: 1,
    padding: 5,
  },
  newsIconImage: {
    //backgroundColor: "white",
    width: 20,
    height: 20,
  },
});
