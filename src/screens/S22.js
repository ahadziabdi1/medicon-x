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

const S22 = (props) => {
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
          "S22.1. Petra Nemcekova, Tomas Holecek, Jiri Chmelik, Petr Ourednicek, Katerina Valis, and Roman Jakubicek, Establishing the Optimal Standard for Preprocessing Head CT Data in Diagnostic Analysis",
      },
      {
        eventName:
          "S22.2. Ernesto Iadanza, Alessio Luschi, Standardization of failure codes and nomenclature of medical devices for Evidence-Based Maintenance",
      },
      {
        eventName:
          "S22.3. Alma Badnjević-Čengić, Amila Čerim-Aldobašić, Mubina Hodžić, Davorka Dautbegović Stevanović, Advanced diabetes technology for better glucoregulation, opportunities and cost benefit („review on the reality of a developing country”)",
      },
      {
        eventName:
          "S22.4. Manuela Appendino, Maria Agnese Pirozzi, Rossella Tomaiuolo, Veronica Moi, Luca Radice, Gender Impact Assessment for medical devices: a compass to find the way in the gender- technology reciprocity",
      },
      {
        eventName:
          "S22.5. Hatina Čorbić, Adnan Beganović, Mahira Redžić, Adnan Šehić, Nusret Salkica, Jasmina Bajrović, Results of daily quality control in computed tomography",
      },
      {
        eventName: "S22.6. Dado Latinović, Semra Aliu, Mirsel Smajić, The review of biosensors for non-invasive immunodetection of biomarkers in sweat"
      }
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
        S22. CLINICAL ENGINEERING AND HEALTH TECHNOLOGY ASSESSMENT (Hall 2)
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
    marginTop: windowWidth * 0.3,
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

export default S22;
