import React from "react";

import { SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";

import Hyperlink from "react-native-hyperlink";

function HyperlinkExample() {
  return (
    <SafeAreaView>
      <Hyperlink linkDefault={true} linkStyle={{ color: "#428672ff" }}>
        <Text>
          Please click on https://aboutreact.com to check if it can do any
          action
        </Text>
      </Hyperlink>
    </SafeAreaView>
  );
}

export default HyperlinkExample;
