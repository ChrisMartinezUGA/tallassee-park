import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, Image, StatusBar, Alert, AsyncStorage } from 'react-native';
import * as ProgressBar from 'react-native-progress';
import MainStyle from '../styles/MainStyle';

// Resources
const styles = MainStyle;
const exploreCategories = require('../sampleData/exploreList.json').categories;
const progressData = require('../sampleData/progress.json');

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
      progressArray: "",
      progessDecimal: 0,
      progressPercentage: 0,
      rankTitle: "",
      badges: [false, false, false, false]
    }
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

      for (let i = 0; i < exploreCategories.length; i++) {
        let categoryProgress = 0;

        for (let activity of exploreCategories[i].items) {

          // Checks if the current activity is in the list of completed activities
          if (completedActivities[i].some(id => id == activity.id)) {
            completedActivitiesCount = completedActivitiesCount + 1;
            categoryProgress = categoryProgress + 1;
          }

          allActivitiesCount = allActivitiesCount + 1;
        }

        // Checks if they earned the badge
        if (categoryProgress >= exploreCategories[i].items.length) {
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
                  {this.state.badges[0] && <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://tallassee.mynmi.net/images/badges/tree.png' }} />}
                  {this.state.badges[1] && <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://tallassee.mynmi.net/images/badges/star.png' }} />}
                  {this.state.badges[2] && <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://tallassee.mynmi.net/images/badges/river.png' }} />}
                  {this.state.badges[3] && <Image style={{ width: 100, height: 100 }} source={{ uri: 'http://tallassee.mynmi.net/images/badges/star.png' }} />}
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