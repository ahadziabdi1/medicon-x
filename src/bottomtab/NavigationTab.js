import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "../Constants";
import Initial from "../screens/Initial";
import Icon, { Icons } from "../bottomtab/Icon";
import * as Animatable from "react-native-animatable";
import colors from "../Constants";
import Account from "../screens/Account";
import Add from "../screens/Add";
import ConferenceProgram from "../screens/ConferenceProgram";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const tabBarHeight = windowHeight * 0.1;
const tabBarBottomMargin = windowHeight * 0.05;
const tabBarHorizontalMargin = windowWidth * 0.07;
const tabBarBorderRadius = 24;
const tabBarBackgroundColor = colors.airForceBlue;

const TabArr = [
  {
    route: "Initial",
    label: "Initial",
    type: Icons.Feather,
    icon: "home",
    component: Initial,
  },
  {
    route: "ConferenceProgram",
    label: "Program",
    type: Icons.Feather,
    icon: "menu",
    component: ConferenceProgram,
  },
  // {
  //   route: "Add",
  //   label: "Add",
  //   type: Icons.Feather,
  //   icon: "user-plus",
  //   component: Add,
  // },
  {
    route: "Account",
    label: "Account",
    type: Icons.FontAwesome,
    icon: "user",
    component: Account,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View style={styles.container} ref={viewRef} duration={1000}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: colors.gunmetal,
              borderRadius: 25,
            }}
          />
          <View style={styles.iconContainer}>
            <Icon
              type={item.type}
              name={item.icon}
              color={focused ? Constants.turquoise : Constants.gunmetal}
            />
          </View>
        </View>
        <Animatable.Text
          ref={textRef}
          style={{ fontSize: 12, color: colors.gunmetal, textAlign: "center" }}
        >
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: tabBarHeight,
          position: "absolute",
          bottom: tabBarBottomMargin,
          left: tabBarHorizontalMargin,
          right: tabBarHorizontalMargin,
          borderRadius: tabBarBorderRadius,
          backgroundColor: tabBarBackgroundColor,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: colors.airForceBlue,
    backgroundColor: colors.airForceBlue,
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavigationTab;
