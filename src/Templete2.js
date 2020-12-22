import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';

export default class Templete2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showDraggable: true,
        dropAreaValues: null,
        pan: new Animated.ValueXY(),
        opacity: new Animated.Value(1), 
        color: "skyblue",
        schedule: "運動"
      };
    }
  
    componentWillMount() {
      const {
        changeBox1,
        changeBox2,
        changeBox1Text
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
            } else{
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
      return gesture.moveY < (windowHeight /11 * 2 + 30+30) && gesture.moveY > (windowHeight /11 * 2 + 30);
    }
    isDropArea2(gesture) {
      const windowHeight = Dimensions.get('window').height; 
      return gesture.moveY < (windowHeight /11 * 2 + 30+30+30) && gesture.moveY > (windowHeight /11 * 2 + 30+30);
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
              <Image source={require('../images/TempleteIcon/運動.png')} style={{width:100, height:100}} />
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