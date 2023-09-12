import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Linking
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../Background";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../Constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const daysOfWeek = ["Wednesday", "Thursday", "Friday", "Saturday"];

const ConferenceProgram = () => {
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

/*  const eventTimelines = [
    [
      {
        time: "19:00 - 23:00",
        eventName: "Welcome Cocktail (only with invitations)",
      },
    ],
    [
      {
        time: "08:00 - 09:00",
        eventName: "Welcome and Networking: Guest Arrival (CONGRESS CENTER)",
        details:
          "Registration of participants will be available at the conference info desk located at the entrance of the Congress Center.\nOpportunity to meet exhibitors and explore new digitalization services in Bosnia and Herzegovina - Business Networking / Photo Opportunity",
      },
      {
        time: "09:00 - 10:30",
        eventName:
          "Digital Horizons for Health and Environment: Embracing Innovation (CONFERENCE HALL)",
        details: "Welcome Address by:\n1. Dr. Denis Bećirević, Member of the Presidency of Bosnia and Herzegovina\n2. Mr. Nermin Nikšić, Prime minister, Federation of Bosnia and Herzegovina\n3. Mr. Edin Forto, Minister – Ministry of Transport and Communications\n4. Mr. Stefano Ellero, Head of Cooperation of the EU Delegation in Bosnia and Herzegovina\n5. Jasna Duraković, Federal ministry of education and science\n6. Adriana Velazquez Berumen – Team Lead on medical devices and in vitro diagnostics – World Health Organization\n7. Prof. dr. Kang-pin Lin, IFMBE Vice president\n8. Prof. dr. Shankar Krishnan, IUPESM Vice-President\n9. Prof. dr. Eleni Kaldoudi, EAMBES president elect\n10. Prof. dr. Lejla Gurbeta Pokvić, Director of Verlab Research Institute\n\n• Keynote lecture by EIT Health – Zsolt Bubori: „Unlocking Innovation: Ecosystem Building in Bosnia and Herzegovina“\n\n• Keynote addressing by Unija: Blaž Kržišnik: „Digital Transformation and Environmental Management: Building Sustainable Economies“"
        },
      { time: "", eventName: "Coffee Break" },
      { time: "", eventName: "TRACK: Healthcare Technology and Innovation" },
      { time: "13:30 - 16:30", eventName:"Meeting of IFMBE Division of Health Informatics and Digital Health (DHD) (Only for IFMBE HDH members) (Meeting Room 2)"},
      {
        time: "",
        eventName: "TRACK: Innovation and Sustainability: Advancing Agriculture, Technology, and Healthcare (Hall BASEL)",
      },
      {
        time: "19:00 - 00:00",
        eventName:
          "Digital future of SMEs in Bosnia and Herzegovina: Connection, Transformation and Innovation",
        details:
          "This event brings together officials and representatives from the government sector in Bosnia and Herzegovina, business representatives interested in digitalization, as well as representatives from the scientific research sector in Bosnia and Herzegovina. The aim of this event is to enable participants to establish valuable business contacts, exchange ideas and experiences, and develop collaborations in the field of digitalization. With an informal setting and an appropriate program, participants will have the opportunity to meet key players in the field of digitalization, present their ideas, projects, or products, and expand their network of business contacts. Additionally, through short presentations and discussions, insights into the latest trends and best practices in digital transformation will be provided.\n\nThe event is organized with the support of project Innovation and Digitalisation in SMEs in BiH, Commissioned by the German Federal Ministry for Economic Cooperation and Development, co-funded by the EU, and part of the EU4DigitalSME Initiative of the European Union.",
      },
      { time: "", eventName: "Closed event. Only with invitations." },
    ],
    [
      {
        time: "09:00 - 10:30",
        eventName: "S1. BIOMEDICAL SIGNAL PROCESSING (Hall 1)",
      },
      {
        time: "09:00 - 10:30",
        eventName:
          "S2. MEDICAL PHYSICS, BIOMEDICAL IMAGING AND RADIATION PROTECTION (Hall 2)",
      },
      {
        time: "09:00 - 10:30",
        eventName: "S3. PHARMACEUTICAL ENGINEERING (Hall 3)",
      },
      {
        time: "09:00 - 10:30",
        eventName:
          "S4. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 4)",
      },
      {
        time: "",
        eventName: "Coffee Break",
      },
      {
        time: "10:45 - 12:30",
        eventName: "S5. BIOMEDICAL SIGNAL PROCESSING (Hall 1)",
      },
      {
        time: "10:45 - 12:30",
        eventName: "S6. HEALTH INFORMATICS, E-HEALTH AND TELEMEDICINE (Hall 2)",
      },
      {
        time: "10:45 - 12:30",
        eventName: "S7. PHARMACEUTICAL ENGINEERING (Hall 3)",
      },
      {
        time: "10:45 - 12:30",
        eventName:
          "SPECIAL SESSION: Artificial Intelligence applied to Health Technology Assessment and Health Technology Management for empowering healthcare (Hall 4)",
        details:
          "• Davide Piaggio, University of Warwick, England: “Evaluation of AI in healthcare: the Gatekeeper project and ex ante impact assessment\n• Ernesto Iadanza, University of Siena, Italy – Chair of the council of societies of the IFMBE: Real-World Data and Real-World Evidence in Healthcare\n• Laura López Pérez, Polytechnic University of Madrid, Clinical Natural Language Processing and health interoperability to support knowledge management and governance in Rare Cancers\n• Alessio Luschi, University of Florence, Italy Natural Language Processing and Explainable AI for adverse event identification of Health Information Technologies\n• Alessia Maccaro, University of Warwick, England Ethical dilemmas of Artificial Intelligence and Generative Pre- Trained Transformers technologies in supporting decision making in healthcare Martina Andellini University of Warwick, England Cost-effectiveness of continuous glucose monitoring for paediatric patients with Type-1 diabetes compared with self-monitoring of blood glucose\n\nDigital transformations are revolutionizing the automation and monitoring of services and processes, significantly impacting the management of care, administration, and logistics in hospitals and public health. The availability of vast and diverse sources of information has further contributed to this change. Leveraging techniques such as Natural Language Processing, semantic-web, and Explainable Artificial Intelligence enables the mining and processing of real- world data for effective health technology management, knowledge sharing, and health interoperability. However, when dealing with AI-based medical devices, assessing the concepts of safety, effectiveness, and cost-effectiveness poses additional challenges compared to traditional devices. Existing regulations, recommendations, and guidelines, particularly the European Regulation 2017/745, are inadequate in addressing these concerns. This becomes a critical issue as the medical device sector expands rapidly and AI becomes increasingly integrated, raising ethical considerations in healthcare applications.",
      },
      {
        time: "11:30 - 12:30",
        eventName: "MEET THE EDITORS (Conference B2B Space)",
        details:
          "1. Andrei Dragomir, Medical & Biological Engineering & Computing\n2. Kyriacou Panicos, Biomedical Signal Processing and Control Journal, Elsevier\n3. Yadin David, Journal of Clinical Engineering, GCEA\n4. Eleni Kaldoudi Editor-in-Chief, Computational and Structural Biotechnology Journal – Smart Hospital Section\n5. Giusepe Fico, Associated Editor of the IEEE Journal of Biomedical and Health Informatics and Frontiers in Digital Health\n6. Almir Badnjević, Technology and Healthcare Journal, IOS Press",
      },
      {
        time: "",
        eventName: "Lunch",
      },
      {
        time: "14:00 - 15:30",
        eventName: "S8. BIOMEDICAL SIGNAL PROCESSING (Hall 1)",
      },
      {
        time: "14:00 - 15:30",
        eventName:
          "S9. BIO - INNOVATIONS IN THE FOOD SYSTEM & GREEN CHEMISTRY (Hall 2)",
      },
      {
        time: "14:00 - 15:30",
        eventName: "S10. MOLECULAR, CELLULAR AND TISSUE ENGINEERING (Hall 3)",
      },
      {
        time: "14:00 - 15:30",
        eventName: "S11. BIO-MICRO/NANO TECHNOLOGIES",
      },
      {
        time: "14:00 - 15:30",
        eventName:
          "S12. Frugal engineering for the design of medical devices resilient to low-resource settings: state of the art, challenges, future (Hall 4)",
        details:
          "The United Nations' 2030 Agenda for Sustainable Development emphasizes the importance of 17 Sustainable Development Goals, with a focus on leaving no one behind. Among these goals, Good Health and Wellbeing is a priority, aiming to ensure equitable access to healthcare worldwide. However, the current reality falls short of this objective, as a few high-income countries dominate the medical device market, neglecting the unique challenges faced by resource-constrained settings. To address this issue, a frugal engineering approach is crucial. Frugal engineering aims to design medical devices that are cost-effective, tailored to low-resource settings, and optimized for local contexts. This track welcomes submissions on applying frugal engineering principles to address challenges in low-resource settings, including artificial intelligence, mHealth, eHealth, additive manufacturing, and health technology management.\n\nInvited speakers:\n1. Dan Clarke, LIVERPOOL JOHN MOORES UNIVERSITY, United Kingdom\n2. Philippa Makobore, UGANDA INDUSTRIAL RESEARCH INSTITUTE (UIRI), Uganda\n3. Alessia Maccaro, SCHOOL OF ENGINEERING OF THE UNIVERSITY OF WARWICK, United Kingdom\n4. Davide Piaggio, SCHOOL OF ENGINEERING OF THE UNIVERSITY OF WARWICK, United Kingdom\n5. Florinda Coro, RESEARCH CENTRE ENRICO PIAGGIO, Italia",
      },
      {
        time: "14:00 - 15:30",
        eventName: "Smart4All project: Success stories",
      },
      {
        time: "",
        eventName: "Caffee Break",
      },
      {
        time: "16:00 - 18:00",
        eventName:
          "S13. IFMBE Special session: Education in Biomedical Engineering: For professionals & for students PROCESSING (Hall 1)",
      },
      {
        time: "16:00 - 18:00",
        eventName:
          "S14. BIOMEDICAL SIGNAL PROCESSING – IFMBE YOUNG INVESTIGATOR COMPETITION (Hall 1)",
        details:
          "Keynote lecture by Prof. dr. Ratko Magjarević, International Federation on Medical and Biological Engineering, Emerging technologies in health care and rehabilitation",
      },
      {
        time: "16:00 - 18:00",
        eventName:
          "S15. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 3)",
      },
      {
        time: "16:00 - 18:00",
        eventName:
          "S16. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 4)",
      },
      {
        time: "19:00 - 00:00",
        eventName: "Social event",
        details: "For all conference participants. More information soon.",
      },
    ],
    [
      {
        time: "09:00 - 10:30",
        eventName: "S17. BIOMEDICAL SIGNAL PROCESSING (Hall 1)",
      },
      {
        time: "09:00 - 10:30",
        eventName:
          "S18. CLINICAL ENGINEERING AND HEALTH TECHNOLOGY ASSESSMENT (Hall 2)",
      },
      {
        time: "09:00 - 10:30",
        eventName:
          "S19. GENETIC ENGINEERING/NEURAL AND REHABILITATION ENGINEERING & VETERINARY ENGINEERING (Hall 3)",
      },
      {
        time: "09:00 - 10:30",
        eventName:
          "S20. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 4)",
      },
      {
        time: "",
        eventName: "Caffee Break",
      },
      {
        time: "10:45 - 12:30",
        eventName: "S21. METROLOGY IN MEDICAL MEASUREMENTS (Hall 2)",
      },
      {
        time: "10:45 - 12:30",
        eventName:
          "S22. CLINICAL ENGINEERING AND HEALTH TECHNOLOGY ASSESSMENT (Hall 2)",
      },
      {
        time: "10:45 - 12:30",
        eventName: "S23. BIOSENSORS AND BIOINSTRUMENTATION (Hall 3)",
      },
      {
        time: "10:45 - 12:30",
        eventName:
          "S24. HEALTH INFORMATICS, E-HEALTH AND TELEMEDICINE (Hall 4)",
      },
      {
        time: "11:30 - 12:30",
        eventName: "STUDENT MEETUP (Conference B2B Space)",
      },
      {
        time: "",
        eventName: "Caffee Break",
      },
      {
        time: "12:45 - 14:00",
        eventName:
          "S25. BIOMECHANICS, ROBOTICS AND MINIMALLY INVASIVE SURGERY (Hall 1)",
      },
      {
        time: "12:45 - 14:00",
        eventName:
          "S26. MEDICAL PHYSICS, BIOMEDICAL IMAGING AND RADIATION PROTECTION (Hall 2)",
      },
      {
        time: "12:45 - 14:00",
        eventName:
          "S27. ARTIFICIAL INTELLIGENCE IN HEALTHCARE & BIOINFORMATICS AND COMPUTATIONAL BIOLOGY (Hall 3)",
      },
      {
        time: "12:45 - 14:00",
        eventName: "S28. BIOINFORMATICS AND COMPUTATIONAL BIOLOGY (Hall 4)",
      },
      {
        time: "14:00 - 15:00",
        eventName: "Closing remarks (Hall 4)",
        details:
          "Announcement of Winners: IFMBE Young Investigator Competition and IFMBE HTA Scientific\nChallenge\nAnnouncement of MEDICON 2026 Venue\nSarajevo Seightseeing & Tour (per request)",
      },
    ],
  ]; */

  //const currentEventTimeline = eventTimelines[currentDayIndex];

  const openLink = () => {
    const url = 'https://cmbebih.com/index.php/program';
    Linking.openURL(url)
      .catch(err => console.error('An error occurred: ', err));
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>Conference program</Text>
        <View style={styles.containerDay}>
          {/*<TouchableOpacity
            style={styles.arrowButton}
            onPress={handlePreviousDay}
          >
            <Text style={styles.arrowText}>{"<"}</Text>
          </TouchableOpacity>
          {/*<Text style={styles.dayText}>{daysOfWeek[currentDayIndex]}</Text> 
          <TouchableOpacity style={styles.arrowButton} onPress={handleNextDay}>
            <Text style={styles.arrowText}>{">"}</Text>
          </TouchableOpacity>*/}
        </View>
        {/*<View style={styles.timelineContainer}>
          <ScrollView style={{ flex: 1 }}>
            {currentEventTimeline.map((event, index) => (
              <TouchableOpacity
                key={index}
                style={styles.eventItem}
                onPress={() => {
                  handleEventClick(index);
                  if (
                    event.eventName ===
                    "TRACK: Healthcare Technology and Innovation"
                  ) {
                    navigation.navigate("HealthcareTechnologyAndInnovation");
                  }
                  if (
                    event.eventName ===
                    "TRACK: Innovation and Sustainability: Advancing Agriculture, Technology, and Healthcare (Hall BASEL)"
                  ) {
                    navigation.navigate("AgricultureAndBio");
                  }
                  if (
                    event.eventName ===
                    "S1. BIOMEDICAL SIGNAL PROCESSING (Hall 1)"
                  ) {
                    navigation.navigate("S1");
                  }
                  if (
                    event.eventName ===
                    "S2. MEDICAL PHYSICS, BIOMEDICAL IMAGING AND RADIATION PROTECTION (Hall 2)"
                  ) {
                    navigation.navigate("S2");
                  }
                  if (
                    event.eventName ===
                    "S3. PHARMACEUTICAL ENGINEERING (Hall 3)"
                  ) {
                    navigation.navigate("S3");
                  }
                  if (
                    event.eventName ===
                    "S4. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 4)"
                  ) {
                    navigation.navigate("S4");
                  }
                  if (
                    event.eventName ===
                    "S5. BIOMEDICAL SIGNAL PROCESSING (Hall 1)"
                  ) {
                    navigation.navigate("S5");
                  }
                  if (
                    event.eventName ===
                    "S6. HEALTH INFORMATICS, E-HEALTH AND TELEMEDICINE (Hall 2)"
                  ) {
                    navigation.navigate("S6");
                  }
                  if (
                    event.eventName ===
                    "S7. PHARMACEUTICAL ENGINEERING (Hall 3)"
                  ) {
                    navigation.navigate("S7");
                  }
                  if (
                    event.eventName ===
                    "S8. BIOMEDICAL SIGNAL PROCESSING (Hall 1)"
                  ) {
                    navigation.navigate("S8");
                  }
                  if (
                    event.eventName ===
                    "S9. BIO - INNOVATIONS IN THE FOOD SYSTEM & GREEN CHEMISTRY (Hall 2)"
                  ) {
                    navigation.navigate("S9");
                  }
                  if (
                    event.eventName ===
                    "S10. MOLECULAR, CELLULAR AND TISSUE ENGINEERING (Hall 3)"
                  ) {
                    navigation.navigate("S10");
                  }
                  if (event.eventName === "S11. BIO-MICRO/NANO TECHNOLOGIES") {
                    navigation.navigate("S11");
                  }
                  if (
                    event.eventName ===
                    "S12. Frugal engineering for the design of medical devices resilient to low-resource settings: state of the art, challenges, future (Hall 4)"
                  ) {
                    navigation.navigate("S12");
                  }
                  if (
                    event.eventName ===
                    "S14. BIOMEDICAL SIGNAL PROCESSING – IFMBE YOUNG INVESTIGATOR COMPETITION (Hall 1)"
                  ) {
                    navigation.navigate("S14");
                  }
                  if (
                    event.eventName ===
                    "S15. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 3)"
                  ) {
                    navigation.navigate("S15");
                  }
                  if (
                    event.eventName ===
                    "S16. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 4)"
                  ) {
                    navigation.navigate("S16");
                  }
                  if (
                    event.eventName ===
                    "S17. BIOMEDICAL SIGNAL PROCESSING (Hall 1)"
                  ) {
                    navigation.navigate("S17");
                  }
                  if (
                    event.eventName ===
                    "S18. CLINICAL ENGINEERING AND HEALTH TECHNOLOGY ASSESSMENT (Hall 2)"
                  ) {
                    navigation.navigate("S18");
                  }
                  if (
                    event.eventName ===
                    "S19. GENETIC ENGINEERING/NEURAL AND REHABILITATION ENGINEERING & VETERINARY ENGINEERING (Hall 3)"
                  ) {
                    navigation.navigate("S19");
                  }
                  if (
                    event.eventName ===
                    "S20. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 4)"
                  ) {
                    navigation.navigate("S20");
                  }
                  if (
                    event.eventName ===
                    "S21. METROLOGY IN MEDICAL MEASUREMENTS (Hall 2)"
                  ) {
                    navigation.navigate("S21");
                  }
                  if (
                    event.eventName ===
                    "S22. CLINICAL ENGINEERING AND HEALTH TECHNOLOGY ASSESSMENT (Hall 2)"
                  ) {
                    navigation.navigate("S22");
                  }
                  if (
                    event.eventName ===
                    "S23. BIOSENSORS AND BIOINSTRUMENTATION (Hall 3)"
                  ) {
                    navigation.navigate("S23");
                  }
                  if (
                    event.eventName ===
                    "S24. HEALTH INFORMATICS, E-HEALTH AND TELEMEDICINE (Hall 4)"
                  ) {
                    navigation.navigate("S24");
                  }
                  if (
                    event.eventName ===
                    "S25. BIOMECHANICS, ROBOTICS AND MINIMALLY INVASIVE SURGERY (Hall 1)"
                  ) {
                    navigation.navigate("S25");
                  }
                  if (
                    event.eventName ===
                    "S26. MEDICAL PHYSICS, BIOMEDICAL IMAGING AND RADIATION PROTECTION (Hall 2)"
                  ) {
                    navigation.navigate("S26");
                  }
                  if (
                    event.eventName ===
                    "S27. ARTIFICIAL INTELLIGENCE IN HEALTHCARE & BIOINFORMATICS AND COMPUTATIONAL BIOLOGY (Hall 3)"
                  ) {
                    navigation.navigate("S27");
                  }
                  if (
                    event.eventName ===
                    "S28. BIOINFORMATICS AND COMPUTATIONAL BIOLOGY (Hall 4)"
                  ) {
                    navigation.navigate("S28");
                  }
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
                  </View> */}
        <Text style={styles.arrowText}>Click the link below for</Text>
        <Text style={styles.arrowText}> conference program:</Text>
      <TouchableOpacity style={styles.timelineContainer} onPress={openLink}>
        <Text style={styles.eventName}>
          Conference program
        </Text>
      </TouchableOpacity>
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
  containerDay: {
    flexDirection: "row",
    backgroundColor: colors.gunmetal,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: windowHeight * 0.02,
    marginBottom: 10,
  },
  arrowButton: {
    paddingHorizontal: 10,
  },
  arrowText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    color: colors.pineGreen,
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
    height: windowHeight * 0.05,
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
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  selectedEvent: {
    fontWeight: "bold",
  },
  eventDetails: {
    fontSize: 14,
    color: colors.gunmetal,
    marginTop: 5,
  },
});

export default ConferenceProgram;
