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

const S1 = (props) => {
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
          "S1.1. Magdalena Krbot Skorić, Ivan Adamec, Ivan Moštak, Nika Višnjić, Mario Cifrek, Mario Habek, Semi-automated calculation of baroreflex sensitivity (BRS) indices",
      },
      {
        eventName:
          "S1.2. Gianluca Rho, Francesco Di Rienzo, Carlotta Marinai, Francesca Giannetti, Lucia Arcarisi, Pasquale Bufano, Michele Zanoletti, Francesca Righetti, Carlo Vallati, Marco Laurino, Nicola Carbonaro, Alessandro Tognetti, Alberto Greco, Preliminary assessment of the Samsung Galaxy Watch 5 accuracy for the monitoring of heart rate and heart rate variability parameters",
      },
      {
        eventName:
          "S1.3. Filip Cerny, Vaclava Piorecka, Jan Strobl, Daniela Dudysova, Jana Koprivova, Marek Piorecky, EEG microstate clustering to evaluate acoustic stimulation phase-locked targeting of slow wave sleep activity",
      },
      {
        eventName:
          "S1.4. Katerina Iscra, Miloš Ajčević, Aleksandar Miladinović, Laura Munaretto, Jacopo Giulio Rizzi, Marco Merlo, Accardo Agostino, Development of an interpretable model for improving differential diagnosis in subjects with a Left Ventricular Ejection Fraction ranging from 40 to 55%",
      },
      {
        eventName:
          "S1.5. Isidora Rubežić, Miroslav Radunović, Dejan Babić, Tomo Popović, Nataša Popović, Fractal Characteristics of Retinal Microvascular Network in Alzheimer's Disease and Colon Cancer in Automatically Segmented Fundus Images from the UK Biobank Database",
      },
      {
        eventName:
          "S1.6. Elena Bondi, Viviana Pescuma, Yara Massalha, Marta Pizzolante, Alice Chirico, Giandomenico Schiena, Anna Maria Bianchi, Paolo Brambilla, and Eleonora Maggioni, A TMS- EEG pre-processing parameters tuning study",
      },
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          S1. BIOMEDICAL SIGNAL PROCESSING (Hall 1)
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
    marginLeft: windowWidth * 0.15,
    marginRight: windowWidth * 0.15,
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

export default S1;
