import React from 'react';

import { ThemeProvider, Button } from 'react-native-elements';

import { FloatingAction } from "react-native-floating-action";

import {
    View,
    Text,
    Image,
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

  const actions = [
    {
      text: "Activities",
      name: "bt_activities",
      position: 2
    },
    {
      text: "Explore",
      name: "bt_explore",
      position: 1
    },
    {
      text: "Park Info",
      name: "bt_info",
      position: 3
    },
  ];

function MapScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView minimumZoomScale={0.4} maximumZoomScale={5}>
          <Image source={require('../images/trails-map.jpg')} />
        </ScrollView>
        <FloatingAction actions={actions} onPressItem={
          name => { 
            if(name == "bt_activities") {navigation.navigate('Activities')}
            else if(name == "bt_explore") {navigation.navigate('Explore')}
            else if(name == "bt_info") {navigation.navigate('Info')}
           }
          } />
      </View>
    );
  }

  export default MapScreen;