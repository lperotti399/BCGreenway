import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import PARKS from "../assets/data/parksList";

const imgCarousel = [
  {
    imgId: 1,
    imgLocation: require("../assets/images/kennett-community-park.png"),
  },
  {
    imgId: 2,
    imgLocation: require("../assets/images/kennett-community-park.png"),
  },
  {
    imgId: 3,
    imgLocation: require("../assets/images/kennett-community-park.png"),
  },
  {
    imgId: 4,
    imgLocation: require("../assets/images/kennett-community-park.png"),
  },
  {
    imgId: 5,
    imgLocation: require("../assets/images/kennett-community-park.png"),
  },
];

const selectedParkName = "ChesLen Preserve";

function CarouselCards({ userPark }) {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={
          // ={imgCarousel}
          PARKS.filter((park) => park.parkName === userPark)[0].imgCarousel
        }
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        style={styles.pagination}
        dotsLength={
          PARKS.filter((park) => park.parkName === selectedParkName)[0]
            .imgCarousel.length
        }
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}

export default CarouselCards;

const styles = StyleSheet.create({
  pagination: {
    position: "absolute",
  },
});
