import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Signup from "./src/Signup";
import Login from "./src/Login";
import Initial from "./src/screens/Initial";
import ForgetPassword from "./src/screens/ForgetPassword";
import NavigationTab from "./src/bottomtab/NavigationTab";
import Add from "./src/screens/Add";
import Account from "./src/screens/Account";
import ConferenceProgram from "./src/screens/ConferenceProgram";
import Verification from "./src/screens/Verification";
import NewPassword from "./src/screens/NewPassword";
import Calendar from "./src/screens/Calendar";
import HealthcareTechnologyAndInnovation from "./src/screens/HealthcareTechnologyAndInnovation";
import AgricultureAndBio from "./src/screens/AgricultureAndBio";
import S1 from "./src/screens/S1";
import S2 from "./src/screens/S2";
import S3 from "./src/screens/S3";
import S4 from "./src/screens/S4";
import S5 from "./src/screens/S5";
import S6 from "./src/screens/S6";
import S7 from "./src/screens/S7";
import S8 from "./src/screens/S8";
import S9 from "./src/screens/S9";
import S10 from "./src/screens/S10";
import S11 from "./src/screens/S11";
import S12 from "./src/screens/S12";
import S14 from "./src/screens/S14";
import S15 from "./src/screens/S15";
import S16 from "./src/screens/S16";
import S17 from "./src/screens/S17";
import S18 from "./src/screens/S18";
import S19 from "./src/screens/S19";
import S20 from "./src/screens/S20";
import S21 from "./src/screens/S21";
import S22 from "./src/screens/S22";
import S23 from "./src/screens/S23";
import S24 from "./src/screens/S24";
import S25 from "./src/screens/S25";
import S26 from "./src/screens/S26";
import S27 from "./src/screens/S27";
import S28 from "./src/screens/S28";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="NavigationTab" component={NavigationTab} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ConferenceProgram" component={ConferenceProgram} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen
          name="HealthcareTechnologyAndInnovation"
          component={HealthcareTechnologyAndInnovation}
        />
        <Stack.Screen name="AgricultureAndBio" component={AgricultureAndBio} />
        <Stack.Screen name="S1" component={S1} />
        <Stack.Screen name="S2" component={S2} />
        <Stack.Screen name="S3" component={S3} />
        <Stack.Screen name="S4" component={S4} />
        <Stack.Screen name="S5" component={S5} />
        <Stack.Screen name="S6" component={S6} />
        <Stack.Screen name="S7" component={S7} />
        <Stack.Screen name="S8" component={S8} />
        <Stack.Screen name="S9" component={S9} />
        <Stack.Screen name="S10" component={S10} />
        <Stack.Screen name="S11" component={S11} />
        <Stack.Screen name="S12" component={S12} />
        <Stack.Screen name="S14" component={S14} />
        <Stack.Screen name="S15" component={S15} />
        <Stack.Screen name="S16" component={S16} />
        <Stack.Screen name="S17" component={S17} />
        <Stack.Screen name="S18" component={S18} />
        <Stack.Screen name="S19" component={S19} />
        <Stack.Screen name="S20" component={S20} />
        <Stack.Screen name="S21" component={S21} />
        <Stack.Screen name="S22" component={S22} />
        <Stack.Screen name="S23" component={S23} />
        <Stack.Screen name="S24" component={S24} />
        <Stack.Screen name="S25" component={S25} />
        <Stack.Screen name="S26" component={S26} />
        <Stack.Screen name="S27" component={S27} />
        <Stack.Screen name="S28" component={S28} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
