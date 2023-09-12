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

const S4 = (props) => {
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
          "S4.1. Lisa Anita De Santi, Filippo Bargagna, Maria Filomena Santarelli, Giuseppe Vergaro, Dario Genovesi, Michele Emdin, Assuero Giorgetti, Vincenzo Positano, Explainable CNN-based Cardiac Amyloidosis Classification from PET Images through Manifold Learning",
      },
      {
        eventName:
          "S4.2. Abdullah Bjelak, , Sara Deumić, Jasmin Kevrić, Monia Avdić, Evaluation of bacterial biofilm category change due to the use of different signalling molecules using random forest classifier",
      },
      {
        eventName:
          "S4.3. Francesco Di Nardo, Christian Morbidoni, Filippo Ventura, Alessandro Cucchiarelli, Sandro Fioretti, Evaluating bilateral surface EMG features for automatic identification of gait phase transitions in ground walking conditions",
      },
      {
        eventName:
          "S4.4. Riccardo Asnaghi, Nicolo Pini, Nimrod Goldshtrom, Manuela Ferrario, A vital signs-driven approach for clustering the responses to diuretics treatment in premature newborns",
      },
      {
        eventName:
          "S4.5. Carolina Ruiz Laguado, Martha Lucia Zequera Diaz, Francisco Carlos Calderón Bocanegra, Identification of atypical cardiac patterns before and after exercising using artificial intelligence and Eulerian video magnification",
      },
      {
        eventName:
          "S4.6. Zhuldyz-Zhan Sagimbayev, Alisher Iglymov, Almagul Zhussupova, Meruyert Saifullakyzy, Doszhan Zhussupov, Dias Tashev, Gulden Zhanmukanbetova, Raushan Myrzashova, Deep Learning Enabled Acute Ischemic Stroke Lesion Segmentation for Smart Healthcare Systems",
      },
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          S4. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall
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
    marginTop: windowWidth * 0.4,
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

export default S4;
