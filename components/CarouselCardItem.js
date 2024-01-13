import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
//+ 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
//* 0.7);

function CarouselCardItem({ item, index }) {
  return (
    <View style={styles.container} key={index}>
      <Image
        key={item.imgId}
        style={styles.image}
        source={Number(item.imgLocation)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
});

export default CarouselCardItem;
