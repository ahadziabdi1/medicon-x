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

const S8 = (props) => {
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
          "S8.1. Marta Iovino, Ivan Lazic, Tatjana Loncar-Turukalo, Michal Javorka, Riccardo Pernice, Luca Faes, Classification of Physiological States through Machine Learning Algorithms Applied to Ultra-Short-Term Heart Rate and Pulse Rate Variability Indices on a single-feature basis",
      },
      {
        eventName:
          "S8.2. Šimun Krmek, Mario Cifrek, Yueming Gao, Željka Lučev Vasić, Decomposition of HDsEMG signals recorded from a forearm extensor muscle based on blind source separation",
      },
      {
        eventName:
          "S8.3. Valeria Rosalia Vergara, Chiara Bara, Riccardo Pernice, Andrea Zaccaro, Francesca Ferri, Luca Faes, Yuri Antonacci, Exploring the Predictability of EEG Signals Timed with the Heartbeat: A Model-Based Approach for the Temporal and Spatial Characterization of the Brain Dynamics",
      },
      {
        eventName:
          "S8.4. Yuri Antonacci, Gorana Mijatovic, Laura Sparacino, Simone Valenti, Gianvincenzo Sparacia, Daniele Marinazzo, Sebastiano Stramaglia, Luca Faes, Measuring the Balance between Synergy and Redundancy in Network Systems by using Information Theory",
      },
      {
        eventName:
          "S8.5. Chiara Bara, Riccardo Pernice, Laura Sparacino, Yuri Antonacci, Michal Javorka, Luca Faes, Comparison of Linear Model-Based and Nonlinear Model-Free Directional Coupling Measures: Analysis of Cardiovascular and Cardiorespiratory Interactions at Rest and During Physiological Stress",
      },
      {
        eventName:
          "S8.6. Emira Mlivo, Minela Dacić, Alija Uzunović, Saša Pilipović, Kemal Durić, Azra Bašić-Halilović, Determination of capsaicin and dihydrocapsaicin content by HPLC method in products purchased online",
      },
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          S8. BIOMEDICAL SIGNAL PROCESSING (Hall 1)
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
    marginLeft: windowWidth * 0.1,
    marginRight: windowWidth * 0.1,
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

export default S8;
