 //import * as React from 'react';
 import React, {useState} from 'react';
 import { Text,
   View,
   StyleSheet,
   FlatList,
   UIManager,
   LayoutAnimation,
   TouchableOpacity,
   SafeAreaView,
   Platform,
   StatusBar,
   ImageBackground } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Card from './Card';
 import Schedule from './Schedule';
 
 if (Platform.OS === 'android') {
   UIManager.setLayoutAnimationEnabledExperimental &&
     UIManager.setLayoutAnimationEnabledExperimental(true);
 }
 
 // function HomeScreen() {
 //   return (
 //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 //       <Text>Home!</Text>
 //     </View>
 //   );
 // }
 
 function TimerScreen() {
   const [dataSource, setDataSource] = useState([]);
 
   const setAnimation = () => {
     LayoutAnimation.configureNext({
       duration: 250,
       update: {
         type: LayoutAnimation.Types.easeIn,
         springDamping: 0.7,
       },
     });
     LayoutAnimation.configureNext({
       duration: 500,
       create: {
         type: LayoutAnimation.Types.easeIn,
         property: LayoutAnimation.Properties.scaleXY,
         springDamping: 0.7,
       },
     });
   };
 
   const addItem = (() => {
     let key = dataSource.length;
     return () => {
       dataSource.unshift({
         key,
         animated: true,
       });
       setAnimation();
       setDataSource(dataSource.slice(0));
       console.log(dataSource);
       console.log(key);
       key++;
     };
   })();
 
   const removeItem = (key) => {
     setAnimation();
     setDataSource(
          dataSource.slice().filter((item) => item.key !== key)
     );
     console.log(key);
   };
 
   const ItemView = ({item}) => {
     return (
       // Flat List Item
       <Card item={item} removeItem={removeItem} />
     );
   };
 
   const ItemSeparatorView = () => {
     return (
       // Flat List Item Separator
       <View/>
     );
   };
 
   return (
     <SafeAreaView style={{
       flex: 1,
       backgroundColor: 'rgb(245,225,215)'
     }}>
       <StatusBar translucent backgroundColor='transparent' /> 
       <ImageBackground source = {require('./img/timer.png')} resizeMode ="contain" style = {{width:'100%',height:'100%' }}>
             <View style ={{width:'100%',height:'15%',backgroundColor: 'hsla(0,0%,0%,0)'}}></View>
       <TouchableOpacity
         style={styles.addButtonStyle}
         onPress={addItem}>
         <Text style={styles.addIconStyle}>
             +
         </Text>
       </TouchableOpacity>
       <FlatList
         data={dataSource}
         keyExtractor={(item, index) => index.toString()}
         ItemSeparatorComponent={ItemSeparatorView}
         renderItem={ItemView}
       />
       </ImageBackground>
     </SafeAreaView>
   );
 }
 
 const styles = StyleSheet.create({
   addButtonStyle: {
     width: 60,
     height: 60,
     borderRadius: 30,
     elevation: 3,
     backgroundColor: '#808080',
     alignItems: 'center',
     justifyContent: 'center',
     marginBottom: 15,
     position: "absolute",
     top: '3%',
     right: '4%'
   },
   addIconStyle: {
     color: 'white',
     padding: 10,
     fontSize: 40,
     textAlign: 'center',
   },
 });
 
 const Tab = createBottomTabNavigator();
 
 export default function App() {
   return (
     <NavigationContainer>
       <Tab.Navigator>
         <Tab.Screen name="Schedule" component={Schedule} />
         <Tab.Screen name="Timer" component={TimerScreen} />
       </Tab.Navigator>
     </NavigationContainer>
   );
 }

// import React, {Component} from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Schedule from './Schedule';


// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Schedule} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }