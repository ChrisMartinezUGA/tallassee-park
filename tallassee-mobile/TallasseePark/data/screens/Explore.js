import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;


function ExploreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center'}}>
      <StatusBar barStyle="light-content" />
      <Button title="Flora" onPress={() => navigation.navigate('ExploreList', {
        typeId: 0,
        type: "Flora"
        })}
        buttonStyle={{
          backgroundColor: '#36464D',
          margin: 20,
          width: 140,
          height: 80
        }}
      />
      <Button title="Fauna" onPress={() => navigation.navigate('ExploreList', {
        typeId: 1,
        type: "Fauna"
      })} 
      buttonStyle={{
          backgroundColor: '#36464D',
          margin: 20,
          width: 140,
          height: 80
        }}
      />
      <Button title="Earth Science" onPress={() => navigation.navigate('ExploreList', {
        typeId: 2,
        type: "Earth Science"
      })} 
      buttonStyle={{
          backgroundColor: '#36464D',
          margin: 20,
          width: 140,
          height: 80
        }}
      />
      <Button title="History" onPress={() => navigation.navigate('ExploreList', {
        typeId: 3,
        type: "History"
      })} 
      buttonStyle={{
          backgroundColor: '#36464D',
          margin: 20,
          width: 140,
          height: 80
        }}
      />
      <Button title="Progress" onPress={() => navigation.navigate('Progress')}
        buttonStyle={{
          backgroundColor: '#363C24',
          margin: 10,
          marginTop: 100,
          width: 120,
          height: 60
        }}
      />
    </View>
  );
}

export default ExploreScreen;