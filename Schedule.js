import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Templete1 from "./src/Templete1";
import Templete2 from "./src/Templete2";
import Templete3 from "./src/Templete3";
import Time from "./src/Time";

const backgroundImage = require('./images/Background/scheduleBackground.png')
const cancelIcon = require('./images/cancel.png')

export default class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      box1color: null,
      box1text: null,
      box1show: false,
      box2color: null,
      box2text: null,
      box2show: false,
      box3color: null,
      box3text: null,
      box3show: false,
      box4color: null,
      box4text: null,
      box4show: false,
      box5color: null,
      box5text: null,
      box5show: false,
      box6color: null,
      box6text: null,
      box6show: false,
      box7color: null,
      box7text: null,
      box7show: false,
    };
  }

  handleBox1 =　(thisColor, thisText) => {
    this.setState({box1color: thisColor});
    this.setState({box1text: thisText});
    this.setState({box1show: true});
  };
  resetBox1 = () => {
    this.setState({box1text: null});
    this.setState({box1color: null});
    this.setState({box1show: false});
  };

  handleBox2 = (thisColor, thisText) => {
    this.setState({box2color: thisColor});
    this.setState({box2text: thisText});
    this.setState({box2show: true});
  };
  resetBox2 = () => {
    this.setState({box2text: null});
    this.setState({box2color: null});
    this.setState({box2show: false});
  };


  handleBox3 = (thisColor, thisText) => {
    this.setState({box3color: thisColor});
    this.setState({box3text: thisText});
    this.setState({box3show: true});
  };
  resetBox3 = () => {
    this.setState({box3text: null});
    this.setState({box3color: null});
    this.setState({box3show: false});
  };
  handleBox4 = (thisColor, thisText) => {
    this.setState({box4color: thisColor});
    this.setState({box4text: thisText});
    this.setState({box4show: true});
  };
  resetBox4 = () => {
    this.setState({box4text: null});
    this.setState({box4color: null});
    this.setState({box4show: false});
  };
  handleBox5 = (thisColor, thisText) => {
    this.setState({box5color: thisColor});
    this.setState({box5text: thisText});
    this.setState({box5show: true});
  };
  resetBox5 = () => {
    this.setState({box5text: null});
    this.setState({box5color: null});
    this.setState({box5show: false});
  };
  handleBox6 = (thisColor, thisText) => {
    this.setState({box6color: thisColor});
    this.setState({box6text: thisText});
    this.setState({box6show: true});
  };
  resetBox6 = () => {
    this.setState({box6text: null});
    this.setState({box6color: null});
    this.setState({box6show: false});
  };
  handleBox7 = (thisColor, thisText) => {
    this.setState({box7color: thisColor});
    this.setState({box7text: thisText});
    this.setState({box7show: true});
  };
  resetBox7 = () => {
    this.setState({box7text: null});
    this.setState({box7color: null});
    this.setState({box7show: false});
  };

  


  render(){
    const box1show = this.state.box1show
    const box2show = this.state.box2show
    const box3show = this.state.box3show
    const box4show = this.state.box4show
    const box5show = this.state.box5show
    const box6show = this.state.box6show
    const box7show = this.state.box7show
    let time1;
    let time2;
    let time3;
    let time4;
    let time5;
    let time6;
    let time7;
    let reset1;
    let reset2;
    let reset3;
    let reset4;
    let reset5;
    let reset6;
    let reset7;

    if (box1show) {
      time1 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 6:00 - 7:00</Text>
      reset1 = <Image source={cancelIcon} />
    }
    if (box2show) {
      time2 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 7:00 - 8:00</Text>
      reset2 = <Image source={cancelIcon} />
    }
    if (box3show) {
      time3 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 8:00 - 9:00</Text>
      reset3 = <Image source={cancelIcon} />
    }
    if (box4show) {
      time4 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 9:00 - 10:00</Text>
      reset4 = <Image source={cancelIcon} />
    }
    if (box5show) {
      time5 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 10:00 - 11:00</Text>
      reset5 = <Image source={cancelIcon} />
    }
    if (box6show) {
      time6 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 11:00 - 12:00</Text>
      reset6 = <Image source={cancelIcon} />
    }
    if (box7show) {
      time7 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 12:00 - 13:00</Text>
      reset7 = <Image source={cancelIcon} />
    }

    return (
      <View style={{flex:1}}>
        <ImageBackground source={backgroundImage}  resizeMode = "contain" style={{flex:1}}>
          <StatusBar translucent backgroundColor='transparent' /> 
          <View style={{flex:1}}>
            <View style={{flex:2, opacity: 0.5}}>
            </View>
            <View style={{flex:7,flexDirection:'row'}}>
              {/* 左余白 */}
              <View style={{flex:1}}/>
              {/* テンプレート一覧  */}
              <View style={{flex:2, opacity: 0.8, backgroundColor:"pink"}}>
                  <View style={{height:30}} />
                  <Templete1 changeBox1={this.handleBox1} changeBox2={this.handleBox2} changeBox3={this.handleBox3} changeBox4={this.handleBox4} changeBox5={this.handleBox5} changeBox6={this.handleBox6} changeBox7={this.handleBox7} changeBox8={this.handleBox8}/>
                  <View style={{height:30}} />
                  <Templete2 changeBox1={this.handleBox1} changeBox2={this.handleBox2} />
                  <View style={{height:30}} />
                  <Templete3 changeBox1={this.handleBox1} changeBox2={this.handleBox2} />
              </View>
              {/* 時間 */}
              <Time/>

              <View style = {{flex:4,  opacity: 0.5, backgroundColor: "pink"}}>
                <View style = {{height:20}}/>
                <View style={{ flexDirection: "row", backgroundColor: this.state.box1color}}>
                  <View style={{flex:2}}>
                    <Text style={[ styles.scheduleText]}>{this.state.box1text} </Text>
                  </View>
                  <View style ={{flex:3, flexDirection: "row",justifyContent:"center"}} >
                    {time1}
                  </View>
                  <TouchableOpacity onPress={this.resetBox1} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset1}
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: this.state.box2color}}>
                  <View style={{flex:2}}>
                    <Text style={[ styles.scheduleText]}>{this.state.box2text} </Text>
                  </View>
                  <View style ={{flex:2}} >
                    {time2}
                  </View>
                  <TouchableOpacity onPress={this.resetBox2} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset2}
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: this.state.box3color}}>
                  <View style={{flex:2}}>
                    <Text style={[ styles.scheduleText]}>{this.state.box3text} </Text>
                  </View>
                  <View style ={{flex:2}} >
                    {time3}
                  </View>
                  <TouchableOpacity onPress={this.resetBox3} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset3}
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: this.state.box4color}}>
                  <View style={{flex:2}}>
                    <Text style={[ styles.scheduleText]}>{this.state.box4text} </Text>
                  </View>
                  <View style ={{flex:2}} >
                    {time4}
                  </View>
                  <TouchableOpacity onPress={this.resetBox4} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset4}
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: this.state.box5color}}>
                  <View style={{flex:2}}>
                    <Text style={[ styles.scheduleText]}>{this.state.box5text} </Text>
                  </View>
                  <View style ={{flex:2}} >
                    {time5}
                  </View>
                  <TouchableOpacity onPress={this.resetBox5} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset5}
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: this.state.box6color}}>
                  <View style={{flex:2}}>
                    <Text style={[ styles.scheduleText]}>{this.state.box6text} </Text>
                  </View>
                  <View style ={{flex:2}} >
                    {time6}
                  </View>
                  <TouchableOpacity onPress={this.resetBox6} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset6}
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: this.state.box7color}}>
                  <View style={{flex:2}}>
                    <Text style={[ styles.scheduleText]}>{this.state.box7text} </Text>
                  </View>
                  <View style ={{flex:3,flexDirection: "row",justifyContent:"center"}} >
                    {time7}
                  </View>
                  <TouchableOpacity onPress={this.resetBox7} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset7}
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
                <View>
                  <Text style={[styles.scheduleText, {backgroundColor: "red"}]}>予定</Text>
                </View>
              </View>
              <View style={{flex:1}} />
            </View>
            <View style={{flex:1}}>

            </View>
          </View>
        </ImageBackground>
      </View>

    );

  }
};

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  timeText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  scheduleText: {
    fontSize: 32,
    fontWeight: "bold"
  }
});
