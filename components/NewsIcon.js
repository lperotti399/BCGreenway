import { StyleSheet, View, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";

function NewsIcon() {
  return (
    //<Pressable>
    <Image
      source={require("../assets/images/icons8-message-25.png")}
      style={styles.newsIconImage}
    />
    // </Pressable>
  );
}

export default NewsIcon;

const styles = StyleSheet.create({
  newsIconImage: {
    //backgroundColor: "white",
    width: 30,
    height: 30,
  },
});
