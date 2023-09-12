import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Background from "../Background";
import colors from "../Constants";
import Icon, { Icons } from "../bottomtab/Icon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Initial = () => {
  return (
    <Background>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>
            The joint event of the 16th Mediterranean Conference on Medical and
            Biological 2 Engineering and Computing (MEDICON) and the 5th
            International Conference on Medical and Biological engineering
            (CMBEBIH) Sarajevo
          </Text>
        </View>
        <View style={styles.iconView}>
          <View style={styles.iconTextView}>
            <Icon type={Icons.Feather} name="calendar" color={colors.frenchGray} />
            <Text style={styles.dateText}>14. – 16., September, 2023</Text>
          </View>
          <View style={styles.iconTextView}>
            <Icon type={Icons.Feather} name="map-pin" color={colors.frenchGray} />
            <Text style={styles.dateText}>
              Swissotel, Sarajevo, Bosnia and Herzegovina Congress center (floor 6)
            </Text>
          </View>
          <View style={styles.iconTextView}>
            <Icon type={Icons.Feather} name="mail" color={colors.frenchGray} />
            <Text style={styles.dateText}>www.medicon2023.com medicon2023@gmail.com</Text>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    marginHorizontal: windowWidth * 0.1,
    marginVertical: windowHeight * 0.1,
  },
  viewStyle: {
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 20,
  },
  textStyle: {
    backgroundColor: colors.cadetGray,
    padding: 15,
    textAlign: "center",
    fontSize: 18,
    color: colors.gunmetal,
  },
  iconView: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTextView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dateText: {
    marginLeft: 10,
    color: colors.frenchGray,
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
});

export default Initial;
