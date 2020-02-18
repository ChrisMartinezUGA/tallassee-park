import React from 'react';

import { ThemeProvider, Button } from 'react-native-elements';

import { FloatingAction } from "react-native-floating-action";

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    View,
    Text,
    Image,
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

  const actions = [
    {
      text: "Activities",
      icon: require("../icons/running-solid.svg"),
      name: "bt_activities",
      position: 1,
      color: "#3D6B9B"
    },
    {
      text: "Explore",
      name: "bt_explore",
      position: 2,
      color: "#3D6B9B",
      icon: require("../icons/compass-regular.svg")
    },
    {
      text: "Park Info",
      name: "bt_info",
      position: 3,
      color: "#3D6B9B",
      icon: require("../icons/info-solid.svg")
    },
  ];

function MapScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
          <Image source={require('../images/topo-map.png')} />
        </ScrollView>
        <FloatingAction actions={actions} onPressItem={
          name => { 
            if(name == "bt_activities") {navigation.navigate('Activities')}
            else if(name == "bt_explore") {navigation.navigate('Explore')}
            else if(name == "bt_info") {navigation.navigate('Info')}
           }
          } color="#3D6B9B" />
      </View>
    );
  }

  export default MapScreen;