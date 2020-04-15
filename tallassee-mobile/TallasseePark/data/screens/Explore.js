import React from 'react';
import { View, StatusBar, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';

// Resources
const styles = MainStyle;

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation
    }

    const unsubscribe = firestore()
      .collection('explore')
      .onSnapshot((querySnapshot) => {
        console.log('Total explore entries', querySnapshot.size);
        const entries = querySnapshot.docs.map((documentSnapshot) => {
          return {
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          }
        });
      });

  }

  async setupProgress() {
    try {
      // get progress array from local data
      const stringifiedArray = await AsyncStorage.getItem('completedActivities');

      // check if it needs to be set up
      if (stringifiedArray == null) {
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
          buttonStyle={styles.exploreButton}
        />

        <Button title="Fauna" onPress={() => this.state.navigation.navigate('ExploreList', {
          typeId: 1,
          type: "Fauna"
        })}
          buttonStyle={styles.exploreButton}
        />

        <Button title="Earth Science" onPress={() => this.state.navigation.navigate('ExploreList', {
          typeId: 2,
          type: "Earth Science"
        })}
          buttonStyle={styles.exploreButton}
        />

        <Button title="The Big Picture" onPress={() => this.state.navigation.navigate('ExploreList', {
          typeId: 3,
          type: "Big Picture"
        })}
          buttonStyle={styles.exploreButton}
        />

        <Button title="Progress" onPress={() => this.state.navigation.navigate('Progress')}
          buttonStyle={{
            backgroundColor: '#2d454f',
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