import React, { useState } from "react";
import { StyleSheet, TextInput, View, Dimensions, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "./Constants";

const windowWidth = Dimensions.get("window").width;

const Field = ({ error, password, onFocus = () => {}, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  const borderColor = error ? colors.red : isFocused ? colors.gunmetal : colors.cadetGray;

  return (
    <View>
      <View style={[styles.container, { borderColor }]}>
        <TextInput
          autoCorrect={false}
          autoCapitalize={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          secureTextEntry={hidePassword}
          style={styles.input}
          placeholderTextColor={colors.cadetGray}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={styles.icon}
          />
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    borderWidth: 2,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  input: {
    color: colors.airForceBlue,
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.8,
    flex: 1,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
    marginLeft: 10,
  },
  icon: {
    fontSize: 18,
    color: colors.cadetGray,
    paddingHorizontal: windowWidth * 0.02,
  },
});

export default Field;
