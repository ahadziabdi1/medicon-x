import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";
import moment from "moment";

export default class Calendar extends Component {
  state = {
    items: {},
    refreshing: false,
  };

  loadItems = (day) => {
    const { items } = this.state;
    setTimeout(() => {
      for (let i = 1; i <= 30; i++) {
        const strTime = `2023-09-${i < 10 ? "0" + i : i}`;

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems,
        refreshing: false,
      });
    }, 1000);
  };

  onRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.loadItems();
    });
  };

  renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <TouchableOpacity
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>September 2023</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems}
          selected={"2023-09-01"}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
          rowHasChanged={this.rowHasChanged}
          showClosingKnob={true}
          renderHeader={this.renderHeader}
          pastScrollRange={0}
          futureScrollRange={0}
          hideExtraDays={true}
          hideDayNames={true}
          firstDay={1}
          markedDates={{
            "2023-09-01": { selected: true },
          }}
          onRefresh={this.onRefresh} // Pull-to-refresh functionality
          refreshing={this.state.refreshing} // Boolean to indicate if refreshing
          refreshControl={null} // Disable default refresh control of Agenda
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: "green",
  },
  dayItem: {
    marginLeft: 34,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
