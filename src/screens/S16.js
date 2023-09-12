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

const S16 = (props) => {
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
          "S16.1. Essi Pietilä, Pedro A. Moreno-Sánchez, When an explanation is not enough: An overview of evaluation metrics of explainable AI systems in the healthcare domain",
      },
      {
        eventName:
          "S16.2. Cansu Celebioglu, Ayca Kumluca Topalli, IoT-Based Incubator Monitoring and Machine",
      },
      {
        eventName:
          "S16.3. Simão Paredes, Sónia Sousa, Jorge Henriques, Teresa Rocha, José Sousa, Lino Gonçalves, Interpretability and Personalization Aspects in the Development of Clinical Risk Assessment Models",
      },
      {
        eventName:
          "S16.4. Asja Muharemović, Jasmin Kevrić, Cardiovascular Health in AI: A Comprehensive Overview to Acute Myocardial Infarction Prediction",
      },
      {
        eventName:
          "S16.5. Omer Aydin, Zakarya Al-Shaebi, Munevver Akdeniz, Gizem Kursunluoglu, Gokmen Zarasız, Serra İlayda Yerlitas, Ahmet Sezgin, Mustafa Altay Atalay, Pınar Sagiroglu, A New and Fast Approach for Antimicrobial Resistance Detection: Combination of Artificial Intelligence and Surface-enhanced Raman Spectra",
      },
      {
        eventName:
          "S16.6. Martina Sassi, Muhammad Salman Haleem, Leandro Pecchia, Spectrogram-based approach with Convolutional Neural Network for human activity classificatio",
      },
      {
        eventName:
          "S16.7. Šišić Nedim, Baraković Muhamed, Almisreb Abd Ali, Granziera Cristina, Rogelj Peter , Class Probability Distributions of a Neural Network Classifier of Multiple Sclerosis Lesions on Quantitative Susceptibility Mapping",
      },
      {
        eventName:
          "S16.8. IvanJovetic,IvanaKatnic,Thesecurityframework:determinedandAIimpact?",
      },
      {
        eventName:
          "S16.9. Ivan Jovović, Marko Grebović, Lejla Gurbeta Pokvić, Tomo Popović, Stevan Čakić, Liver Diseases Classification Using Machine Learning Algorithms",
      },
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          S16. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall
          4)
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

export default S16;
