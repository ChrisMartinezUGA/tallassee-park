import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, Image, StatusBar, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as ProgressBar from 'react-native-progress';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';

// Resources
const styles = MainStyle;
const exploreCategories = require('../sampleData/exploreList.json').categories;
const progressData = require('../sampleData/progress.json');
var exploreData = [];
var categoryNames = ["Flora", "Fauna", "Earth Science", "Big Picture"]
var currentFilter = '';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const unsubscribe = firestore()
      .collection('explore')
      .onSnapshot((querySnapshot) => {
        //console.log('Total explore entries', querySnapshot.size);
        const entries = querySnapshot.docs.map((documentSnapshot) => {
          return {
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          }
        });
        exploreData = entries;
      });

    this.state = {
      navigation: this.props.navigation,
      progressArray: "",
      progessDecimal: 0,
      progressPercentage: 0,
      rankTitle: "",
      badges: [false, false, false, false],
      data: exploreData,
      currentData: exploreData
    }
  }

  filter(type) {
    filteredData = exploreData.filter(function(el) {
      return el.category == currentFilter;
    });
    this.state.currentData = filteredData;
  }

  async getProgress() {
    try {
      let stringifiedArray = await AsyncStorage.getItem('completedActivities');

      // Checks if it needs to be set up
      if (stringifiedArray == null) {
        const setup = [[], [], [], []];
        await AsyncStorage.setItem("completedActivities", JSON.stringify(setup));
        stringifiedArray = await AsyncStorage.getItem('completedActivities');
      }

      const completedActivities = JSON.parse(stringifiedArray);
      let completedActivitiesCount = 0;
      let allActivitiesCount = 0;

      for (let i = 0; i < categoryNames.length; i++) {
        currentFilter = categoryNames[i];
        this.filter(currentFilter);
        let categoryProgress = 0;

        for (let activity of this.state.currentData) {

          // Checks if the current activity is in the list of completed activities
          if (completedActivities[i].some(title => title == activity.title)) {
            completedActivitiesCount = completedActivitiesCount + 1;
            categoryProgress = categoryProgress + 1;
          }

          allActivitiesCount = allActivitiesCount + 1;
        }

        // Checks if they earned the badge
        if (categoryProgress >= this.state.currentData.length) {
          let badges = [...this.state.badges];
          badges[i] = { ...badges[i], key: true };
          this.setState({ badges });
        }
      }

      // Sets the progress stats and saves to the state
      let decimal = completedActivitiesCount / allActivitiesCount;
      let percentage = Math.round(100 * decimal);

      let rankIndex = Math.ceil(decimal * progressData.ranks.length) - 1;
      let rankTitle = progressData.ranks[rankIndex];

      this.setState({ progressArray: stringifiedArray, rank: rankTitle, progessDecimal: decimal, progressPercentage: percentage });

    } catch (error) {
      // Error retrieving data
      Alert.alert("Error", "getProgress(): " + error)
    }
  }

  componentDidMount() {
    this.getProgress();
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <StatusBar barStyle="light-content" />
          <ScrollView>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <ProgressBar.Bar progress={this.state.progessDecimal} width={300} height={25} />
                <Text style={styles.sectionDescription}>{this.state.progressPercentage}%</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Current Rank</Text>
                <Text style={styles.sectionDescription}>{this.state.rank}</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Badges</Text>
                <View style={{ flexDirection: 'row' }}>
                  {this.state.badges[0] && <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: 'http://tallassee.mynmi.net/images/badges/flora_icon.png' }} />}
                  {this.state.badges[1] && <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: 'http://tallassee.mynmi.net/images/badges/fauna_icon.png' }} />}
                  {this.state.badges[2] && <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: 'http://tallassee.mynmi.net/images/badges/earthscience_icon.png' }} />}
                  {this.state.badges[3] && <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: 'http://tallassee.mynmi.net/images/badges/thebigpicture_icon.png' }} />}
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <Button title="Clear Progress" onPress={() =>
                  // Removes the completedActivities array from local storage
                  Alert.alert("Clear Progress", "Please confirm that you want to clear your progress.", [
                    { text: "Confirm", onPress: () => AsyncStorage.removeItem('completedActivities') },
                    { text: "Cancel", style: "cancel" }
                  ],
                    { cancelable: "false" })
                }></Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

function ProgressScreen({ navigation }) {
  return <Progress navigation={navigation} />
}

export default ProgressScreen;