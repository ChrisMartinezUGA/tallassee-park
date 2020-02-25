import React from 'react';
import { View, Text, Button } from 'react-native';
import { Header } from 'react-native-elements';

function ExploreListScreen({ route, navigation }) {
  const { typeId } = route.params;
  const { type } = route.params;
  navigation.setOptions({
    header: props => <Header
      backgroundImage={require('../images/trails.jpg')}
      statusBarProps={{ barStyle: 'light-content' }}
      barStyle={'light-content'}
      leftComponent={{
        text: 'back', color: '#fff', onPress: () => navigation.goBack(), style: {
          color: '#fff',
          fontWeight: 'bold'
        }
      }}
      centerComponent={{
        text: type.toUpperCase(), style: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 40
        }
      }}
      centerContainerStyle={{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 180
      }}
      containerStyle={{
        height: 240
      }}
      leftContainerStyle={{
        height: 180,
        justifyContent: 'flex-start'
      }}
    />
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Text>Explore List Screen</Text>
      <Text>Viewing: {type}</Text>
      <Button title="Explore 1 Details" onPress={() => navigation.navigate('ExploreDetails')}></Button>
      <Button title="Explore 2 Details" onPress={() => navigation.navigate('ExploreDetails')}></Button>
    </View>
  );
}

export default ExploreListScreen;