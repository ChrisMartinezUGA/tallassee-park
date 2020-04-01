import React from 'react';
import { FloatingAction } from "react-native-floating-action";
import { View, Image, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Navigation Floating Action
const actions = [
  {
    text: "Activities",
    icon: require('../icons/running.png'),
    name: "bt_activities",
    position: 2,
    color: "#363C24"
  },
  {
    text: "Explore",
    icon: require('../icons/compass.png'),
    name: "bt_explore",
    position: 1,
    color: "#363C24",
  },
  {
    text: "Park Info",
    icon: require('../icons/info.png'),
    name: "bt_info",
    position: 3,
    color: "#363C24",
  }
];

// Map Layers Floating Action
const layers = [
  {
    text: "Satellite",
    icon: require('../icons/running.png'),
    name: "bt_satellite",
    position: 1,
    color: "#363C24"
  },
  {
    text: "Features",
    icon: require('../icons/compass.png'),
    name: "bt_features",
    position: 2,
    color: "#363C24",
  },
  {
    text: "Topo",
    icon: require('../icons/info.png'),
    name: "bt_topo",
    position: 3,
    color: "#363C24",
  }
];

// Map URLs
const maps = [
  'http://tallassee.mynmi.net/images/aerial-map.png',
  'http://tallassee.mynmi.net/images/features-map.png',
  'http://tallassee.mynmi.net/images/topo-map.png'
]

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapIndex: 0,
      mapWidth: 1000, // causing errors
      mapHeight: 1000, // causing errors
      navigation: this.props.navigation
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="light-content" />
        <ScrollView minimumZoomScale={1} maximumZoomScale={5} showsHorizontalScrollIndicator={true} style={{ flex: 1 }} >
          <Image style={{ width: this.state.mapWidth, height: this.state.mapHeight }} source={{ uri: maps[this.state.mapIndex] }} />
        </ScrollView>

        <FloatingAction actions={actions} onPressItem={
          name => {
            if (name == "bt_activities") { this.state.navigation.navigate('Activities') }
            else if (name == "bt_explore") { this.state.navigation.navigate('Explore') }
            else if (name == "bt_info") { this.state.navigation.navigate('Info') }
          }
        } color="#363C24" />

        <FloatingAction actions={layers} onPressItem={
          name => {
            if (name == "bt_satellite") { this.setState({ mapIndex: 0 }) }
            else if (name == "bt_features") { this.setState({ mapIndex: 1 }) }
            else if (name == "bt_topo") { this.setState({ mapIndex: 2 }) }
          }
        } color="#242a3c" position="left" />
      </View>
    )
  }
}

function MapScreen({ navigation }) {
  return <Map navigation={navigation} />
}
export default MapScreen;