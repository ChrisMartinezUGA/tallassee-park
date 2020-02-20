import React from 'react';
import { View, Text, Button } from 'react-native';

function ExploreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Explore Screen</Text>
      <Button title="Flora" onPress={() => navigation.navigate('ExploreList')} />
      <Button title="Fauna" onPress={() => navigation.navigate('ExploreList')} />
      <Button title="Geology" onPress={() => navigation.navigate('ExploreList')} />
      <Button title="History" onPress={() => navigation.navigate('ExploreList')} />
      <Button title="Progress" onPress={() => navigation.navigate('Progress')} />
    </View>
  );
}

export default ExploreScreen;