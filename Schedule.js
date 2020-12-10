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
    };
  }

  handleBox1 =　(thisColor, thisText) => {
    this.setState({box1color: thisColor});
    this.setState({box1text: thisText});
    this.setState({box1show: true});
  };

  handleBox2 = (thisColor, thisText) => {
    this.setState({box2color: thisColor});
    this.setState({box2text: thisText});
    this.setState({box2show: true});
  };

  resetBox1 = () => {
    this.setState({box1text: null});
    this.setState({box1color: null});
    this.setState({box1show: false});
  };
  resetBox2 = () => {
    this.setState({box2text: null});
    this.setState({box2color: null});
    this.setState({box2show: false});
  };

  


  render(){
    const box1show = this.state.box1show
    const box2show = this.state.box2show
    let time6;
    let time7;
    let reset6;
    let reset7;
    if (box1show) {
      time6 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 6:00 - 7:00</Text>
      reset6 = <Image source={cancelIcon} />
    }
    if (box2show) {
      time7 = 
        <Text style={{fontSize: 24, fontWeight: "bold",borderWidth: 3, borderColor:"white",borderRadius: 10}} > 7:00 - 8:00</Text>
      reset7 = <Image source={cancelIcon} />
    }

    return (
      <View style={{flex:1}}>
        <ImageBackground source={backgroundImage}  resizeMode = "contain" style={{flex:1}}>
          <StatusBar translucent backgroundColor='transparent' /> 
          <View style={{flex:1}}>
            <View style={{flex:2, opacity: 0.5}}>
              {/* <Button title="reset" onPress={this.resetBox1}/> */}
            </View>
            <View style={{flex:7,flexDirection:'row'}}>
              {/* 左余白 */}
              <View style={{flex:1}}/>
              {/* テンプレート一覧  */}
              <View style={{flex:2, opacity: 0.8, backgroundColor:"pink"}}>
                  <View style={{height:30}} />
                  <Templete1 changeBox1={this.handleBox1} changeBox2={this.handleBox2} />
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
                  <View style ={{flex:2}} >
                    {time6}
                  </View>
                  <TouchableOpacity onPress={this.resetBox1} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset6}
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: this.state.box2color}}>
                  <View style={{flex:2}}>
                    <Text style={[ styles.scheduleText]}>{this.state.box2text} </Text>
                  </View>
                  <View style ={{flex:2}} >
                    {time7}
                  </View>
                  <TouchableOpacity onPress={this.resetBox2} style={{flex:1, flexDirection: "row", justifyContent: "center"}} >
                    {reset7}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex:1}} />
            </View>
            <View style={{flex:2}}>

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
    fontSize: 30,
    fontWeight: "bold"
  }
});
