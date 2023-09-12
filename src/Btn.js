import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Btn = ({ bgColor, btnLabel, textColor, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          borderRadius: 100,
          width: windowWidth * 0.8,
          paddingHorizontal: windowWidth * 0.05,
          borderColor: "#8EA3B8",
        },
      ]}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 18,
        }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    paddingVertical: 10,
    marginVertical: 5,
  },
});

export default Btn;
