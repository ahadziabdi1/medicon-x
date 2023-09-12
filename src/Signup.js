import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from "react-native";
import React from "react";
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";
import colors from "./Constants";
import Icon, { Icons } from "../src/bottomtab/Icon";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2gGEVtiNTJJFU5y9_efRbRl50vtMDCaQ",
  authDomain: "confer-418d0.firebaseapp.com",
  projectId: "confer-418d0",
  storageBucket: "confer-418d0.appspot.com",
  messagingSenderId: "349494137545",
  appId: "1:349494137545:web:2ed6c5b22934cd54ac3318",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const windowWidth = Dimensions.get("window").width;

const Signup = (props) => {
  const [fields, setFields] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    setErrors({});
    if (!fields.email) {
      handleError("Please enter a email", "email");
      valid = false;
    } else if (!fields.email.match(/^\S+@\S+\.\S+$/)) {
      handleError("Please enter a valid email", "email");
      valid = false;
    }

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
      handleLogin();
    }
  };
  const handleOnChange = (text, field) => {
    setFields((prevState) => ({ ...prevState, [field]: text }));
  };
  const handleError = (errorMessage, field) => {
    setErrors((prevState) => ({ ...prevState, [field]: errorMessage }));
  };

  const handleLogin = async () => {
    const { email, password } = fields;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Thanks for signing up! \n Your profile has been created.");
        props.navigation.navigate("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle login error
        console.error(errorCode, errorMessage);
        alert("Email already in use!");
      });
  };

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subHeading}>Sign Up to continue</Text>
          <View style={styles.formContainer}>
            <Field
              placeholder="Email"
              error={errors.email}
              onFocus={() => {
                handleError(null, "email");
              }}
              onChangeText={(text) => handleOnChange(text, "email")}
            />
            <Field
              placeholder="Password"
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
              btnLabel="Sign Up"
            />
            {/*<View style={styles.OR}>
              <Text style={styles.network}>OR</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => {
                  }}
                >
                  <Icon
                    style={{
                      padding: 8,
                      color: colors.fireEngineRed,
                      fontSize: 18,
                    }}
                    type={Icons.FontAwesome}
                    name="google"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                  }}
                >
                  <Icon
                    style={{
                      padding: 8,
                      color: colors.cornflowerBlue,
                      fontSize: 18,
                    }}
                    type={Icons.FontAwesome}
                    name="facebook"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                  }}
                >
                  <Icon
                    style={{ padding: 8, color: colors.sapphire, fontSize: 18 }}
                    type={Icons.FontAwesome}
                    name="linkedin"
                  />
                </TouchableOpacity>
              </View>
            </View>*/}
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles.loginLink}>Sign In</Text>
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
    backgroundColor: "#CDD7E0",
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
  OR: {
    justifyContent: "center",
    alignItems: "center",
  },
  network: {
    color: "#8EA3B8",
    fontSize: 14,
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
    paddingTop: 8,
  },
});

export default Signup;
