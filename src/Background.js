import { View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("./assets/Background.png")}
        style={{ height: "100%" }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};

export default Background;
