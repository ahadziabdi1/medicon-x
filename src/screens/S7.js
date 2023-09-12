import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../Background";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../Constants";
import Icon, { Icons } from "../bottomtab/Icon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const S7 = (props) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [selectedEventIndex, setSelectedEventIndex] = useState(-1);
  const navigation = useNavigation();

  const handlePreviousDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
    setSelectedEventIndex(-1);
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    setSelectedEventIndex(-1);
  };

  const handleEventClick = (eventIndex) => {
    setSelectedEventIndex(eventIndex);
  };

  const eventTimelines = [
    [
      {
        eventName:
          "S7.1. Minela Dacić, Alija Uzunović, Larisa Alagić-Džambić, Saša Pilipović, HPLC-UV determination and comparison of extracted corticosteroids content with two methods",
      },
      {
        eventName:
          "S7.2. Merima Šahinović, Amina Tucak-Smajić, Kenan Muhamedagić, Lamija Hindija, Ognjenka Rahić, Jasmina Hadžiabdić, Edina Vranić, Ahmet Čekić, Can microneedles revolutionize ocular drug delivery?",
      },
      {
        eventName:
          "S7.3. Alija Uzunović, Emira Mlivo, Minela Dacić, Hurija Džudžević Čančar, Mineta Šupuk, Saša Pilipović, In vitro efficiency of protective masks",
      },
      {
        eventName:
          "S7.4. Elma Hasković, Lejda Uzunović, Tanja Dujić, Aziz Šukalo, Meliha Mehić, Maja Malenica, Tamer Bego, Neven Meseldžić, Selma Imamović Kadrić, Una Glamočlija, Analysis of lysozyme as biomarker in saliva",
      },
      {
        eventName:
          "S7.5. Minela Dacić, Alija Uzunović, Emira Mlivo, Characterization of the chemical substance niacinamide",
      },
      {
        eventName:
          "S7.6. Šaćira Mandal, Association between serum free fatty acids and total bilirubin concentrations in Bosnian individuals with diabetes mellitus Type 2",
      },
      {
        eventName:
          "S7.7. Karent Eliana Muñoz Salazar, Reuse of medical devices with responsibility for patient safety at a high-complex clinic in Cali, Colombia",
      },
      {
        eventName:
          "S7.8. Mirsada Salihović, Mirha Pazalja, Ajla Špago, Elma Veljović, Selma Špirtović-Halilović, The total phenols and total flavonoids content of petioles sweet cherry (Prunus avium L.)",
      },
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          S7. PHARMACEUTICAL ENGINEERING (Hall 3)
        </Text>
        <View style={styles.timelineContainer}>
          <ScrollView style={{ flex: 1 }}>
            {currentEventTimeline.map((event, index) => (
              <TouchableOpacity
                key={index}
                style={styles.eventItem}
                onPress={() => {
                  handleEventClick(index);
                }}
              >
                <View style={styles.timelineConnector} />

                <View style={styles.eventContent}>
                  <Text style={styles.eventTime}>{event.time}</Text>
                  <Text
                    style={[
                      styles.eventName,
                      selectedEventIndex === index && styles.selectedEvent,
                    ]}
                  >
                    {event.eventName}
                  </Text>
                  {selectedEventIndex === index && (
                    <Text style={styles.eventDetails}>{event.details}</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.signoutContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ConferenceProgram")}
          >
            <Icon
              style={styles.signouticon}
              type={Icons.FontAwesome}
              name="arrow-right"
            />
          </TouchableOpacity>
        </View>
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
    marginLeft: windowWidth * 0.01,
    marginRight: windowWidth * 0.01,
    marginBottom: windowWidth * 0.05,
  },
  dayText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: colors.pineGreen,
  },
  timelineContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.cadetGray,
    borderRadius: 20,
    textAlign: "center",
    marginRight: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
    flex: 1,
    height: windowHeight * 0.2,
  },
  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: windowHeight * 0.01,
    marginTop: windowHeight * 0.01,
    position: "relative",
  },
  timelineConnector: {
    width: 2,
    backgroundColor: colors.gunmetal,
    alignSelf: "stretch",
  },
  eventContent: {
    marginLeft: 10,
  },
  eventTime: {
    marginRight: 10,
    fontSize: 16,
    color: colors.gunmetal,
  },
  eventName: {
    fontSize: 16,
    color: colors.gunmetal,
  },
  selectedEvent: {
    fontWeight: "bold",
  },
  eventDetails: {
    fontSize: 14,
    color: colors.gunmetal,
    marginTop: 5,
  },
  signoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginRight: windowWidth * 0.1,
  },
  signouticon: {
    position: "absolute",
    top: 8,
    right: 8,
    fontSize: 20,
    paddingVertical: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.02,
    color: colors.pineGreen,
  },
});

export default S7;
