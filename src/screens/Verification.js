import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Keyboard,
  TextInput,
} from "react-native";
import Background from "../Background";
import Btn from "../Btn";
import colors from "../Constants";

const windowWidth = Dimensions.get("window").width;

const Verification = (props) => {
  const [fields, setFields] = React.useState({
    code: "",
  });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    Keyboard.dismiss();
    setErrors({});

    const expectedCode = "1111"; //this code should be associated with an email

    if (internalVal !== expectedCode) {
      setInternalVal(""); // Clear the input when the code is invalid
      setErrors({ code: "Invalid code, please try again." });
      alert("Please enter the correct verification code");

      // Return focus to the TextInput after invalid code
      if (textInputRef.current) {
        textInputRef.current.focus();
      }

      return;
    }

    props.navigation.navigate("NewPassword");
  };

  const handleChangeText = (val) => {
    setFields({ ...fields, code: val });
  };

  let textInputRef = useRef(null);
  const lengthInput = 4;
  const [internalVal, setInternalVal] = useState("");
  const onChangeText = (val) => {
    setInternalVal(val);
  };

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const renderCellText = (index) => {
    if (index < internalVal.length) {
      return (
        <Text style={styles.cellText}>
          {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
        </Text>
      );
    }
    return (
      <TextInput
        ref={textInputRef}
        onChangeText={onChangeText}
        value={internalVal}
        maxLength={lengthInput}
        keyboardType="numeric"
        style={[styles.cellText, styles.cellTextFocused]}
        caretColor="black"
      />
    );
  };

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Verification</Text>
          <Text style={styles.subHeading}>Enter Verification Code</Text>
          <View style={styles.formContainer}>
            <View style={styles.containerInput}>
              {Array(lengthInput)
                .fill()
                .map((data, index) => (
                  <View
                    key={index}
                    style={[
                      styles.cellView,
                      {
                        borderBottomColor:
                          index === internalVal.length
                            ? colors.turquoise
                            : colors.gunmetal,
                      },
                    ]}
                  >
                    {renderCellText(index)}
                  </View>
                ))}
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>If you didn't receive a code,{" "}</Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                <Text style={styles.loginLink}>Resend</Text>
              </TouchableOpacity>
            </View>
            <Btn
              onPress={validate}
              bgColor="#8EA3B8"
              textColor="white"
              btnLable="Send"
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={styles.loginLink}>Sign Up</Text>
            </TouchableOpacity>
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
  },
  subHeading: {
    color: "#8EA3B8",
    fontSize: 18,
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: colors.frenchGray,
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 14,
    color: "#8EA3B8",
  },
  loginLink: {
    color: "#49C9B3",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellView: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: 40,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
  },
  cellText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.gunmetal,
  },
  cellTextFocused: {
    position: "absolute",
    opacity: 0,
  },
});

export default Verification;