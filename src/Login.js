import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Dimensions,
} from "react-native";
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn";
import colors from "./Constants";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUsersStore } from "./store/userStore";

const windowWidth = Dimensions.get("window").width;

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

const Login = ({ navigation }) => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    setErrors({});

    if (!fields.email) {
      handleError("Please enter an email", "email");
      valid = false;
    }

    if (!fields.password) {
      handleError("Please enter a password", "password");
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

  const saveUserEmail = useUsersStore((state) => state.setUser);
  const handleLogin = async () => {
    const { email, password } = fields;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, " user");
        saveUserEmail(user.email);
        alert("Welcome back!\n");
        navigation.navigate("NavigationTab");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        alert("Wrong credentials!\n Check your Password/Email");
      });
  };

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Sign In</Text>
          <Text style={styles.subHeading}>Welcome back!</Text>
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
            {/*<View>
              <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                <Text style={styles.forgetPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View> */}
            <Btn
              onPress={validate}
              bgColor="#8EA3B8"
              textColor="white"
              btnLabel="Sign In"
            />
            {/*
            <View style={styles.OR}>
              <Text style={styles.network}>OR</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => {}}>
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
                <TouchableOpacity onPress={() => {}}>
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
                <TouchableOpacity onPress={() => {}}>
                  <Icon
                    style={{ padding: 8, color: colors.sapphire, fontSize: 18 }}
                    type={Icons.FontAwesome}
                    name="linkedin"
                  />
                </TouchableOpacity>
                  </View> 
            </View> */}
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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
    backgroundColor: "#CDD7E0",
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  forgetPassword: {
    color: colors.pineGreen,
    fontSize: 12,
    padding: 5,
    marginLeft: windowWidth * 0.45,
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

export default Login;
