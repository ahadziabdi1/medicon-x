import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon, { Icons } from "../bottomtab/Icon";
import colors from "../Constants";
import Background from "../Background";
import { SelectList } from "react-native-dropdown-select-list";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { useUsersStore } from "../store/userStore";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Account = (props) => {
  const [selected, setSelected] = React.useState("");

  const [selected1, setSelected1] = React.useState([]);

  const data = [
    { key: "1", value: "Sharing Knowledge \nand Experience" },
    { key: "2", value: "Marketing" },
    { key: "3", value: "Networking" },
    { key: "4", value: "Learning and Education" },
  ];

  const data1 = [
    { key: "1", value: "Health/\nHealthcare/\nE-health" },
    { key: "2", value: "Biomedical \nengineering" },
    { key: "3", value: "Medicine/\nTelemedicine" },
    { key: "4", value: "Clinical \nengineering" },
    { key: "5", value: "Pharmaceutics" },
    { key: "6", value: "Robotics" },
    { key: "7", value: "Genetic \nengineering" },
    { key: "8", value: "Physics" },
  ];

  const [user, setUser] = useState({
    email: useUsersStore((state) => state.user), // This will be from API
    password: "12345678", // This will be from API
  });

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleSaveEmail = () => {
    setIsEditingEmail(false);
  };

  const handleEditPassword = () => {
    setIsEditingPassword(true);
  };

  const handleSavePassword = () => {
    setIsEditingPassword(false);
  };

  return (
    <Background>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text style={styles.heading}>Profile</Text>
          <View style={styles.formContainer}>
            <View style={styles.emailPasswordContainer}>
              <View style={styles.emailPasswordLabelContainer}>
                <Text style={styles.emailpasswordLabel}>Email:</Text>
                {isEditingEmail ? (
                  <TextInput
                    style={styles.editableEmailPassword}
                    value={user.email}
                    onChangeText={(newEmail) =>
                      setUser({ ...user, email: newEmail })
                    }
                  />
                ) : (
                  <Text style={styles.info}>{user.email}</Text>
                )}
              </View>
              {/* {isEditingEmail ? (
                <TouchableOpacity
                  onPress={handleSaveEmail}
                  style={styles.iconContainer}
                >
                  <Icon
                    style={styles.iconStyle}
                    type={Icons.FontAwesome}
                    name="save"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={handleEditEmail}
                  style={styles.iconContainer}
                >
                  <Icon
                    style={styles.iconStyle}
                    type={Icons.FontAwesome}
                    name="edit"
                  />
                </TouchableOpacity>
              )} */}
            </View>
            <View style={styles.emailPasswordContainer}>
              <View style={styles.emailPasswordLabelContainer}>
                <Text style={styles.emailpasswordLabel}>Password:</Text>
                {isEditingPassword ? (
                  <TextInput
                    style={styles.editableEmailPassword}
                    value={user.password}
                    onChangeText={(newPassword) =>
                      setUser({ ...user, password: newPassword })
                    }
                    secureTextEntry={false}
                  />
                ) : (
                  <Text style={styles.info} secureTextEntry={true}>
                    {"*".repeat(user.password.length)}{" "}
                  </Text>
                )}
              </View>
              {/* {isEditingPassword ? (
                <TouchableOpacity
                  onPress={handleSavePassword}
                  style={styles.iconContainer}
                >
                  <Icon
                    style={styles.iconStyle}
                    type={Icons.FontAwesome}
                    name="save"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={handleEditPassword}
                  style={styles.iconContainer}
                >
                  <Icon
                    style={styles.iconStyle}
                    type={Icons.FontAwesome}
                    name="edit"
                  />
                </TouchableOpacity>
              )} */}
            </View>
            {/*<View style={styles.rowContainer}>
              <Text style={styles.label}>Why am I here?</Text>
              <SelectList
                dropdownStyles={{
                  borderColor: colors.cadetGray,
                  borderRadius: 20,
                  borderWidth: 2,
                  padding: 0,
                }}
                maxHeight={60}
                dropdownTextStyles={{ color: colors.gunmetal }}
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
              />
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Additional information</Text>
              <MultipleSelectList
                dropdownStyles={{
                  borderColor: colors.cadetGray,
                  borderRadius: 20,
                  borderWidth: 2,
                }}
                maxHeight={200}
                dropdownTextStyles={{ color: colors.gunmetal }}
                setSelected={(val) => setSelected1(val)}
                data={data1}
                save="value"
              />
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Scheduling calendar</Text>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => props.navigation.navigate("Calendar")} //navigate to google calendar
              >
                <Icon
                  style={styles.iconStyle}
                  type={Icons.FontAwesome}
                  name="calendar"
                />
              </TouchableOpacity>
              </View> */}
            <View style={styles.signoutContainer}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
              >
                <Icon
                  style={styles.signouticon}
                  type={Icons.FontAwesome}
                  name="sign-out"
                />
              </TouchableOpacity>
            </View>
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
    paddingLeft: windowWidth * 0.05,
    paddingRight: windowWidth * 0.05,
  },
  heading: {
    color: colors.frenchGray,
    fontSize: 42,
    marginTop: windowWidth * 0.15,
    paddingBottom: 10,
  },
  formContainer: {
    backgroundColor: colors.frenchGray,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: windowWidth * 0.85,
    alignItems: "center",
    justifyContent: "space-between",
  },
  emailPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  emailPasswordLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  emailpasswordLabel: {
    fontSize: 16,
    color: colors.gunmetal,
    fontWeight: "bold",
    marginRight: 8,
  },
  info: {
    flex: 1,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.cadetGray,
    borderRadius: 20,
    padding: 8,
  },
  editableEmailPassword: {
    flex: 1,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.cadetGray,
    borderRadius: 20,
    padding: 8,
  },
  iconContainer: {
    marginLeft: 8,
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    width: windowWidth * 0.4,
    marginRight: windowWidth * 0.41,
  },
  label: {
    fontSize: 16,
    color: colors.gunmetal,
    fontWeight: "bold",
    padding: 8,
  },
  iconStyle: {
    color: colors.airForceBlue,
    fontSize: 20,
  },
  signoutContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginBottom: 30,
    width: windowWidth * 1.2,
    marginRight: windowWidth * 0.41,
  },
  signouticon: {
    position: "absolute",
    top: 8,
    right: 8,
    fontSize: 20,
    paddingVertical: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.02,
    color: colors.gunmetal,
  },
});

export default Account;
