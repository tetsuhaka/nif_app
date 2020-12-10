import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import Templete from "./src/Templete"
// import Time from "./src/Time"
// import Schedule from "./src/Schedule"

export default class Time extends Component {
  render(){  
    return (
        <View style = {{flex:1}}>
            <View style = {{height:5}}/>
            <Text style={styles.timeText}>6:00</Text>
            <Text style={styles.timeText}>7:00</Text>
            <Text style={styles.timeText}>8:00</Text>
            <Text style={styles.timeText}>9:00</Text>
            <Text style={styles.timeText}>10:00</Text>
            <Text style={styles.timeText}>11:00</Text>
            <Text style={styles.timeText}>12:00</Text>
            <Text style={styles.timeText}>13:00</Text>
            <Text style={styles.timeText}>14:00</Text>
            <Text style={styles.timeText}>15:00</Text>
            <Text style={styles.timeText}>16:00</Text>
            <Text style={styles.timeText}>17:00</Text>
            <Text style={styles.timeText}>18:00</Text>
            <Text style={styles.timeText}>19:00</Text>
            <Text style={styles.timeText}>20:00</Text>
            <Text style={styles.timeText}>21:00</Text>
            <Text style={styles.timeText}>22:00</Text>
            <Text style={styles.timeText}>23:00</Text>
            <Text style={styles.timeText}>24:00</Text>
        </View>
    );

  }
};


const styles = StyleSheet.create({

  timeText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

});
