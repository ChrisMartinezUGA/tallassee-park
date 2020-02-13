import React from 'react';

import {
    View,
    Text,
    Button
  } from 'react-native';

function MapScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map Screen</Text>
        <Button title="Dock"></Button>
        <Button title="Activities" onPress={() => navigation.navigate('Activities')}></Button>
        <Button title="Explore" onPress={() => navigation.navigate('Explore')}></Button>
        <Button title="Info" onPress={() => navigation.navigate('Info')}></Button>
      </View>
    );
  }

  export default MapScreen;