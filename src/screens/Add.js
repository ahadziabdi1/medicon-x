import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import Background from "../Background";
import Icon, { Icons } from "../bottomtab/Icon";
import colors from "../Constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InvitationItem = ({ item, onAccept, onDecline }) => (
  <View style={styles.invitationContainer}>
    <Text style={styles.inviterText}>Matched by: {item.inviter}</Text>
    <RectButton style={styles.button} onPress={onAccept}>
      <Icon style={styles.icon} type={Icons.FontAwesome} name="check" />
    </RectButton>
    <RectButton
      style={[styles.button, styles.declineButton]}
      onPress={onDecline}
    >
      <Icon style={styles.icon} type={Icons.FontAwesome} name="minus" />
    </RectButton>
  </View>
);

const Add = () => {
  const [pendingInvitations, setPendingInvitations] = useState([
    { id: "1", inviter: "User1" }, //this will be in base
    { id: "2", inviter: "User2" }, //this will be in base
  ]);

  const handleInvitationAction = (invitationId, action) => {
    setPendingInvitations((prevInvitations) =>
      prevInvitations.filter((invitation) => invitation.id !== invitationId)
    );
    // Send an API request to accept or decline the invitation on the server
  };

  const renderItem = ({ item }) => (
    <InvitationItem
      item={item}
      onAccept={() => handleInvitationAction(item.id, "accept")}
      onDecline={() => handleInvitationAction(item.id, "decline")}
    />
  );

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          People who have similar interest like you
        </Text>
        <Carousel
          data={pendingInvitations}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth - windowWidth * 0.1}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: colors.frenchGray,
    fontSize: 42,
    textAlign: "center",
    marginTop: windowWidth * 0.5,
    marginLeft: windowWidth * 0.1,
    marginRight: windowWidth * 0.1,
    marginBottom: windowWidth * 0.05,
  },
  invitationContainer: {
    backgroundColor: "#CDD7E0",
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  inviterText: {
    fontSize: 14,
    color: colors.gunmetal,
  },
  typeText: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.pineGreen,
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    marginTop: 7,
    borderRadius: 20,
  },
  declineButton: {
    backgroundColor: colors.red,
  },
  icon: {
    position: "absolute",
    top: 8,
    left: windowWidth * 0.4,
    fontSize: 18,
    paddingVertical: windowWidth * 0.02,
    color: colors.gunmetal,
  },
});

export default Add;
