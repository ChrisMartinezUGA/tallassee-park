import React from 'react';

import { ThemeProvider, Button } from 'react-native-elements';
import { FloatingAction } from "react-native-floating-action";
import ImageZoom from 'react-native-image-pan-zoom';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    View,
    Text,
    Image,
    Dimensions,
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const actions = [
  {
    text: "Activities",
    icon: require('../icons/running.png'),
    name: "bt_activities",
    position: 1,
    color: "#3D6B9B"
  },
  {
    text: "Explore",
    icon: require('../icons/compass.png'),
    name: "bt_explore",
    position: 2,
    color: "#3D6B9B",
  },
  {
    text: "Park Info",
    icon: require('../icons/info.png'),
    name: "bt_info",
    position: 3,
    color: "#3D6B9B",
  },
];

const images = [{
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}]

function MapScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView minimumZoomScale={1} maximumZoomScale={5} showsHorizontalScrollIndicator={true} style={{flex: 1}} >
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
  /*
    <ScrollView minimumZoomScale={1} maximumZoomScale={5} showsHorizontalScrollIndicator={true} style={{flex: 1}} >
      <Image source={require('../images/topo-map.png')} />
    </ScrollView>

            <ImageZoom cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}>
          <Image style={{width:200, height:200}}
          source={require('../images/topo-map.png')}/>
        </ImageZoom>
  */
  export default MapScreen;