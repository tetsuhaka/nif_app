import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';

export default class Templete1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showDraggable: true,
        dropAreaValues: null,
        pan: new Animated.ValueXY(),
        opacity: new Animated.Value(1), 
        color: "red",
        schedule: "お風呂",
        
      };
    }
  
    componentWillMount() {
      const {
        changeBox1,
        changeBox2,
        changeBox3,
        changeBox4,
        changeBox5,
        changeBox6,
        changeBox7,
      } = this.props;
      this._val = { x:0, y:0 }
      this.state.pan.addListener((value) => this._val = value);
      this.panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (e, gesture) => true,
          onPanResponderGrant: (e, gesture) => {
            this.state.pan.setOffset({
              x: this._val.x,
              y:this._val.y
            })
            this.state.pan.setValue({ x:0, y:0})
          },
          onPanResponderMove: Animated.event([ 
            null, { dx: this.state.pan.x, dy: this.state.pan.y }
          ]),
          onPanResponderRelease: (e, gesture) => {
            if (this.isDropArea1(gesture)) {
              changeBox1(this.state.color,this.state.schedule);
              Animated.spring(
                this.state.pan, 
                {toValue:{x:0,y:0}} 
               ).start(); 
            } else if (this.isDropArea2(gesture)){
              changeBox2(this.state.color,this.state.schedule);
              Animated.spring(
                this.state.pan, 
                {toValue:{x:0,y:0}} 
               ).start(); 
            } else if (this.isDropArea3(gesture)){
              changeBox3(this.state.color,this.state.schedule);
              Animated.spring(
                this.state.pan, 
                {toValue:{x:0,y:0}} 
               ).start(); 
            } else if (this.isDropArea4(gesture)){
              changeBox4(this.state.color,this.state.schedule);
              Animated.spring(
                this.state.pan, 
                {toValue:{x:0,y:0}} 
               ).start(); 
            } else if (this.isDropArea5(gesture)){
              changeBox5(this.state.color,this.state.schedule);
              Animated.spring(
                this.state.pan, 
                {toValue:{x:0,y:0}} 
               ).start(); 
            } else if (this.isDropArea6(gesture)){
              changeBox6(this.state.color,this.state.schedule);
              Animated.spring(
                this.state.pan, 
                {toValue:{x:0,y:0}} 
               ).start(); 
            } else if (this.isDropArea7(gesture)){
              changeBox7(this.state.color,this.state.schedule);
              Animated.spring(
                this.state.pan, 
                {toValue:{x:0,y:0}} 
               ).start(); 
              }else{
              Animated.spring(
                this.state.pan, 
                {toValue:{x:0,y:0}} 
               ).start(); 
            } 
          
          }
        });
    }
    isDropArea1(gesture) {
      const windowHeight = Dimensions.get('window').height; 
      return gesture.moveY < (windowHeight /10 * 2 + 20 + 32) && gesture.moveY > (windowHeight /11 * 2 + 20);
    }
    isDropArea2(gesture) {
      const windowHeight = Dimensions.get('window').height; 
      return gesture.moveY < (windowHeight /10 * 2 + 20+ 32*2) && gesture.moveY > (windowHeight /11 * 2 + 20 + 32);
    }
    isDropArea3(gesture) {
      const windowHeight = Dimensions.get('window').height; 
      return gesture.moveY < (windowHeight /10 * 2 + 20+ 32*3) && gesture.moveY > (windowHeight /11 * 2 + 20 + 32*2);
    }
    isDropArea4(gesture) {
      const windowHeight = Dimensions.get('window').height; 
      return gesture.moveY < (windowHeight /10 * 2 + 20+ 32*4) && gesture.moveY > (windowHeight /11 * 2 + 20 + 32*3);
    }
    isDropArea5(gesture) {
      const windowHeight = Dimensions.get('window').height; 
      return gesture.moveY < (windowHeight /10 * 2 + 20+ 32*5) && gesture.moveY > (windowHeight /11 * 2 + 20 + 32*4);
    }
    isDropArea6(gesture) {
      const windowHeight = Dimensions.get('window').height; 
      return gesture.moveY < (windowHeight /10 * 2 + 20+ 32*6) && gesture.moveY > (windowHeight /11 * 2 + 20 + 32*5);
    }
    isDropArea7(gesture) {
      const windowHeight = Dimensions.get('window').height; 
      return gesture.moveY < (windowHeight /10 * 2 + 20+ 32*7) && gesture.moveY > (windowHeight /11 * 2 + 20 + 32*6);
    }


  
  
    render() {
      const panStyle = {
        transform: this.state.pan.getTranslateTransform()
      }
  
      return (
        <View style={{ alignItems: "center" }}>
            <Animated.View
              {...this.panResponder.panHandlers}
              style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
            >
              <Image source={require('../images/TempleteIcon/お風呂.png')} style={{width:100, height:100}} />
            </Animated.View>
        </View>
      );
    }
};

let CIRCLE_RADIUS = 50;
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
    fontSize: 24,
    fontWeight: "bold"
  }
});