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

const HealthcareTechnologyAndInnovation = (props) => {
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
        time: "10:45 - 12:30",
        eventName: "Healthcare Technology and Innovation (CONFERENCE HALL)",
        details: "Sponsor presentation – Revolutionizing Healthcare: Oracle's Digital Transformation Journey, Bojan Sadiković, Country Leader Bosnia and Herzegovina\nSponsor presentation – Samir Dedović, MedIT, Sarajevo, Bosnia and Herzegovina: Government e-Health Platform\n\n• Mr. Admir Kulin, MDOC, Germany – keynote lecture\n• Prof. dr. Giuseppe Fico, Polytechnic University of Madrid: Key Enabling Technologies and Digital Transformation for the Healthcare Services of the Future – keynote lecture\n• Dr. Yiota Foka, CERN & SEEIIST Project – keynote lecture"
      },
      {
        time: "11:30 - 12:30",
        eventName:
          "Meet the DIHs and eDIH - Networking event (Conference B2B Space)",
        details:"•Georgios Drosato, Athena Research Center, Greece, SmartHealth eDIH https://smarthealth-edih.eu/en/homepag/\n• Prof. dr. Lejla Gurbeta Pokvić, Verlab Institute & DIH Its4Health, Bosnia and Herzegovina\n• Zsolt Bubori, European Institute for Innovation and Technology – EIT Health"      },
      { time: "12:00 - 13:30", eventName: "Lunch", details: "Location: Caffee Swiss, 2nd Floor" },
      {
        time: "13:30 - 14:15",
        eventName:
          "PANEL - Perspectives on Digital Transformation in Clinical Practices through International Living Labs (CONFERENCE HALL)",
        details: "Session Chair: Beatriz Merino, Politechnic University of Madrid and Kinda Kalaf, University of Khalifa\n\n• Irene Mallo, Politechnic University of Madrid\n• Kinda Kalaf, University of Khalifa\n• Beatriz Merino, Politechnic University of Madrid\n• Eleni Kaldoudi, EAMBES president\n\nDigital transformation in healthcare and clinical practice promises a paradigm shift towards data-driven, patient- centric, and precision medicine. Enabling such transformation necessitates continuous and systematic evaluation of needs, system requirements, and health technology assessment. It is crucial to adopt international standards to ensure replicability and scalability of results. Living labs provide an ideal environment for implementing these goals and validating outcomes. In this session, we will present perspectives from international associations and organizations in strategic sectors such as pharmaceuticals, medtech, health information systems, and assistive technologies. We will discuss key drivers, strengths, challenges, and future directions in these domains."
        },
      {
        time: "14:15 - 15:00",
        eventName:
          "PANEL – Building Resilience: The Intersection of Digital Innovation, Green Transformation, and Preparedness in Healthcare Institutions",
        details:
          "• Mr. Tomislav Sokol, European Parliament - keynote lecture\n•Mr. Bernhard Fabianek, Senior Expert DG Research and Innovation, EU Comission – keynote lecture \n\nPANEL:\n• Mr. Admir Kulin, MDOC Germany\n•Prof. dr. Ernesto Iadanza, University of Siena \n• Prof. dr. Georgios Drosato, Athena Research Center, Greece, Smart Health Innovation Hub eDIH\n• Elendi Kaldoudi, EAMBES president \n\nDigital and green transformation of healthcare institutions is crucial for a sustainable and efficient healthcare system. It improves patient care, reduces costs, and promotes environmental sustainability. Implementing digital and green healthcare solutions faces challenges in Bosnia and Herzegovina due to limited resources and expertise. However, the potential benefits are significant, making it a vital area for development. Collaboration among the government, private sector, and stakeholders is essential for successful implementation. The session will gather key stakeholders to discuss challenges, share best practices, and explore the role of technology in creating a safer and sustainable healthcare system. Together, we'll explore opportunities, tackle challenges, and accelerate the adoption of digital and green solutions for a resilient and prepared healthcare future.",
      },
      {
        time: "15:00 - 15:30",
        eventName:
          "Mrs. Dubravka Maljević: The future of clincal engineering (CONFERENCE HALL)",
      },
      {
        time: "",
        eventName: "Coffee Break",
      },
      {
        time: "15:45 - 17:00",
        eventName:
          "Engineering and Innovations in Clinical Practice (CONFERENCE HALL)",
        details:
          "• Prof. dr. Damijan Miklavčić, Faculty of Electrical Engineering, University of Ljubljana: Electroporation as a new cardiac ablation technique\n• Prof. dr. Gastone Ciuti, Institute for Biorobotics, Scuola Superiore Sant'Anna, Pisa: Frontiers of robotic endoscopy: milestones and challenges",
      },
      {
        time: "",
        eventName: "Break",
      },
      {
        time: "17:15 - 19:00",
        eventName:
          "Engineering and Innovations in Clinical Practice (CONFERENCE HALL)",
        details:
          "• Prof. dr. Thomas Penzel, Charite University Hospital, Germany: Sleep medicine – challenges for biomedical engineering\n• Prof. dr. Francesa Santoro, RWTH Aachen University, Germany: Electronic body- Machine Interfaces - how bioelectronics can be used to cure skin and brain diseases\n• Prof. dr. Joanna Collingwood, School of Engineering, University of Warwick: Measuring metal elements in the brain: unexpected discoveries using synchrotron x-rays",
      },
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          TRACK: Healthcare Technology and Innovation
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
        <View  style={styles.signoutContainer}>
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
    marginLeft: windowWidth * 0.22,
    marginRight: windowWidth * 0.22,
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

export default HealthcareTechnologyAndInnovation;
