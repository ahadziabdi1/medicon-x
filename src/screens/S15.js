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

const S15 = (props) => {
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
          "S15.1. Elena Adelucci, Martina Falagiani, Sara Lombardi, Piergiorgio Francia, Leonardo Bocchi, Sepsis Detection using Features Extracted from Photoplethysmography",
      },
      {
        eventName:
          "S15.2. José Luis Ganoza-Quintana, José Luis Arce-Diego, Félix Fanjul-Vélez, Digital Histopathological Discrimination of Label-Free Healthy Tissues by Decision Tree Classifier",
      },
      {
        eventName:
          "S15.3. Lemana Spahić, Zerina Mašetić, Almir Badnjević, Asim Kurjak, Lejla Gurbeta Pokvić, Artificial Intelligence-Based Ultrasound Imaging Classification for Infant Neurological Impairment Disorders: A Review",
      },
      {
        eventName:
          "S15.4. Benjamin Dobardžić, Armin Alibašić, Nela Milošević, Bojana Mališić, Milica Vukotić, Forecasting Meningitis with Machine Learning: An Advanced Classification Model Analysis",
      },
      {
        eventName:
          "S15.5. Sumeja Hadžalić, Arnela Obralija, Šeila Bećirović, Belma Pehlivanović Kelle, Ehlimana Krupalija, Analysis of Predictive Parameters in Prediction of the Occurrence of Type 2 Diabetes Using Machine Learning Algorithms",
      },
      {
        eventName:
          "S15.6. Laura Lopez-Perez, Eugenio Gaeta, Itziar Alonso, Alejo Esteban, Victor Gerardo Dominguez, Franco Mercalli, Elena Martinelli, Annalisa Trama, Maria Fernanda Cabrera, Maria Teresa Arredondo, Giuseppe Fico, Clinical Natural Language Processing and health interoperability to support knowledge management and governance in Rare Cancers",
      },
      {
        eventName:
          "S15.7. Dejan Babic, Luka Filipovic, Sandra Tinaj, Ivana Katnic, Stevan Cakic, Ten Year Cardiovascular Risk Estimation: A Machine Learning Approach",
      },
      {
        eventName:
          "S15.8. Zoja Šćekić, Luka Filipović, Ivana Katnić, Nela Milošević, Stevan Šandi, Thyroid Hormones Parameter-Based Classification of Patient Health Status: An Analysis of Machine Learning Techniques",
      },
      {
        eventName:
          "S15.9. Ivan Jovetic, Milica Vukotic, Sandra Tinaj, The future of (individual) security – Vision 2.0?",
      },
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          S15. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall
          3)
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

export default S15;
