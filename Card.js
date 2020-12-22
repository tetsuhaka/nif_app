// import React in our code
import React, { useState } from 'react';
// import all the components we are going to use
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  Animated,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
//Import basic react native components

import {Timer} from 'react-native-stopwatch-timer';

import {Picker} from '@react-native-picker/picker';

const Card = (props) => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(10000);
  const [resetTimer, setResetTimer] = useState(false);
  const [timerName, setTimerName] = useState('timerName');
  const [showModal, setShowModal] = useState(false);
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);
  const {removeItem, item} = props;
  const {key} = item;

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10
      }}
    >
      <View style = {styles.container}>
        {/*close timer button */}
        <TouchableOpacity 
        style = {{ 
          position: 'absolute',
          top: '-5%',
          left: '90%' 
       }} 
        onPress={() => {
          setIsTimerStart(false);
          removeItem(key);
        }}
        >
          <View style = {styles.exitButtonView}>
            <Text style = {styles.exitButtonText}>×</Text>
          </View>
        </TouchableOpacity>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalWindow}>
            <Text>Edit Timer</Text>
            <View style = {styles.modalTextInput}>
            <TextInput 
            value={timerName}
            onChangeText={(timerName) => setTimerName(timerName)}
            placeholder = {'timerName'}
            style={styles.modalTimerTitle}/>
          </View>

          <View style = {styles.timePickers}>
            <Picker
              selectedValue={selectedHours}
              style={{ height: 50, width: 100 }}
              onValueChange={(selectedHours) =>{
                console.log(selectedHours);
                setSelectedHours(selectedHours);
              }}
            >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            </Picker>

            <Text style = {{fontSize: 32}}>:</Text>

            <Picker
              selectedValue={selectedMinutes}
              style={{ height: 50, width: 100 }}
              onValueChange={(selectedMinutes) =>{
                console.log(selectedMinutes);
                setSelectedMinutes(selectedMinutes);
              }}
            >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
            </Picker>

            <Text style = {{fontSize: 32}}>:</Text>

            <Picker
              selectedValue={selectedSeconds}
              style={{ height: 50, width: 100 }}
              onValueChange={(selectedSeconds) =>{
                console.log(selectedSeconds);
                setSelectedSeconds(selectedSeconds);
              }}
            >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
            </Picker>
          </View>

            <Button
              title="Save"
              onPress={() => {
                setTimerDuration((selectedHours*60*60*1000) + (selectedMinutes*60*1000) + (selectedSeconds*1000));
                setResetTimer(true);
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>

        {/*edit timer button */}
        <TouchableOpacity 
        style = {{ 
          position: 'absolute',
          top: '25%',
          left: '90%' 
       }} 
        onPress={() => {
          setIsTimerStart(false);
          setSelectedHours(0);
          setSelectedMinutes(0);
          setSelectedSeconds(0);
          setShowModal(!showModal);
        }}
        >
          <View style = {styles.editButtonView}>
            <Text style = {styles.editButtonText}>i</Text>
          </View>
        </TouchableOpacity>

      <Text style={styles.timerTitle}>{timerName}</Text>

        <Timer
            totalDuration={timerDuration}
            secs
            //Time Duration

            start={isTimerStart}
            //To start

            reset={resetTimer}
            //To reset

            options={options}
            //options for the styling

            handleFinish={() => {
              setIsTimerStart(false);
              setResetTimer(true);
              alert(`${timerName} finished.`);
            }}
        />
        {/*play and reset button */}
        <View style={styles.buttonContainer}>
           <TouchableOpacity
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);
            }}>

            <Text style={styles.buttonText}>
              {!isTimerStart ? '▶︎' : '■'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
            }}>
            <Text style={styles.buttonText}>↩︎</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:  250,
    //height:  200,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  metaDataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  metaDataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: 'hsl(0,0%,0%)',
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#888',
    fontWeight: '700',
  },
  button: {
    width: 10,
    height: 10,
    fontSize: 20
  },
  timerTitle: {
    fontSize: 24,
    marginTop: 5, 
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalTimerTitle: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'hsl(0,0%,0%)',
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'hsl(0,0%,0%)'
  },
  buttonText: {
    fontSize: 24,
    width: 50,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    fontWeight: 'bold',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  exitButtonView: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    backgroundColor: 'hsl(20,80%,55%)'
  },
  exitButtonText: {
    fontSize: 40,
    textAlign: "center",
    color: 'white'
  },
  editButtonView:{
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    backgroundColor: 'hsl(230,80%,55%)'
  },
  editButtonText: {
    fontSize: 30,
    fontFamily: 'monospace',
    textAlign: "center",
    color: 'white',
    fontWeight: '900'
  },
  modalWindow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsla(0,0%,95%,0.90)',
    padding: 100,
  },
  modalTextInput:{
    width: Dimensions.get('window').width*0.9,
    borderColor:'black',
    borderWidth: 1,
    backgroundColor: 'hsl(0,0%,100%)'
  },
  timePickers: {
    width: Dimensions.get('window').width*0.9,
    maxHeight: 60,
    borderColor:'black',
    borderWidth: 1,
    flex: 1,
    flexDirection: "row", 
    justifyContent: 'center',
    backgroundColor: 'hsl(0,0%,100%)'
  }
});

const options = {
  container: {
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize:  30,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    paddingLeft:10,
    paddingRight:10, 
    color: 'hsl(0,0%,0%)',
    fontWeight: 'bold'
  },
};

export default Card;