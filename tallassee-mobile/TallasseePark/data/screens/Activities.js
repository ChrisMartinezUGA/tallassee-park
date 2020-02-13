import React from 'react';

import {
    View,
    Text,
    Button
  } from 'react-native';

function ActivitiesScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Activities Screen</Text>
        <Button title="Activity 1 Details" onPress={() => navigation.navigate('ActivityDetails')}></Button>
        <Button title="Activity 2 Details" onPress={() => navigation.navigate('ActivityDetails')}></Button>
      </View>
    );
  }

  export default ActivitiesScreen;