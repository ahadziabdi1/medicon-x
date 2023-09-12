import { View, Text, StyleSheet, Dimensions, Keyboard } from "react-native";
import React from "react";
import Background from "../Background";
import Field from "../Field";
import Btn from "../Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";
import colors from "../Constants";

const windowWidth = Dimensions.get("window").width;

const NewPassword = (props) => {
  const [fields, setFields] = React.useState({
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    setErrors({});
    if (!fields.password) {
      handleError("Please enter a password", "password");
      valid = false;
    } else if (fields.password.length < 8) {
      handleError("It must be at least 8 characters in length", "password");
      valid = false;
    }
    if (fields.password !== fields.confirmpassword) {
      handleError("Passwords do not match", "confirmpassword");
      valid = false;
    }
    if (valid) {
      alert("You have created a new password. \n Please sign in to continue.");
      props.navigation.navigate("Login");
    }
  };
  const handleOnChange = (text, field) => {
    setFields((prevState) => ({ ...prevState, [field]: text }));
  };
  const handleError = (errorMessage, field) => {
    setErrors((prevState) => ({ ...prevState, [field]: errorMessage }));
  };
  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>New Password</Text>
          <View style={styles.formContainer}>
            <Field
              placeholder="Enter New Password"
              password
              error={errors.password}
              onFocus={() => {
                handleError(null, "password");
              }}
              onChangeText={(text) => handleOnChange(text, "password")}
            />
            <Field
              placeholder="Confirm Password"
              password
              error={errors.confirmpassword}
              onFocus={() => {
                handleError(null, "confirmpassword");
              }}
              onChangeText={(text) => handleOnChange(text, "confirmpassword")}
            />
            <Btn
              onPress={validate}
              bgColor="#8EA3B8"
              textColor="white"
              btnLable="Send"
            />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: windowWidth * 0.05,
  },
  heading: {
    color: colors.frenchGray,
    fontSize: 42,
    marginTop: windowWidth * 0.5,
    padding: 15,
  },
  formContainer: {
    backgroundColor: "#CDD7E0",
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default NewPassword;
