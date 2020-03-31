import React from 'react';
import { View, StatusBar, AsyncStorage, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;

class Explore extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navigation: this.props.navigation
    }
  }

  async setupProgress() {
    try {
      // get progress array from local data
      const stringifiedArray = await AsyncStorage.getItem('completedActivities');
  
      // check if it needs to be set up
      if (stringifiedArray == null) {
        Alert.alert("Set Up", "Setting Up Local Progress");
        const completedActivities = [[], [], [], []];
        await AsyncStorage.setItem("completedActivities", JSON.stringify(completedActivities));
      }
    } catch (error) {
      // Error retrieving data
      Alert.alert("Error", "setupProgress()")
    }
  }

  render() {
    this.setupProgress();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center' }}>
        <StatusBar barStyle="light-content" />
        <Button title="Flora" onPress={() => this.state.navigation.navigate('ExploreList', {
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
        <Button title="Fauna" onPress={() => this.state.navigation.navigate('ExploreList', {
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
        <Button title="Earth Science" onPress={() => this.state.navigation.navigate('ExploreList', {
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
        <Button title="Hydrology" onPress={() => this.state.navigation.navigate('ExploreList', {
          typeId: 3,
          type: "Hydrology"
        })}
          buttonStyle={{
            backgroundColor: '#36464D',
            margin: 20,
            width: 140,
            height: 80
          }}
        />
        <Button title="Progress" onPress={() => this.state.navigation.navigate('Progress')}
          buttonStyle={{
            backgroundColor: '#363C24',
            margin: 10,
            marginTop: 100,
            width: 120,
            height: 60
          }}
        />
      </View>
    )
  }
}

function ExploreScreen({ navigation }) {
  return <Explore navigation={navigation} />
}

export default ExploreScreen;