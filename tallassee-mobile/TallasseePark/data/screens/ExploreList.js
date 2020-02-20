import React from 'react';
import { View, Text, Button } from 'react-native';

function ExploreListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Explore List Screen</Text>
      <Button title="Explore 1 Details" onPress={() => navigation.navigate('ExploreDetails')}></Button>
      <Button title="Explore 2 Details" onPress={() => navigation.navigate('ExploreDetails')}></Button>
    </View>
  );
}

export default ExploreListScreen;