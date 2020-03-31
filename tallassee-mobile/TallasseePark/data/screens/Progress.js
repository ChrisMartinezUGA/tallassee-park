import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, Image, StatusBar, Alert, AsyncStorage } from 'react-native';
import * as ProgressBar from 'react-native-progress';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;
const exploreData = require('../sampleData/exploreList.json');
const exploreCategories = exploreData.categories;
const progressData = require('../sampleData/progress.json');

class Progress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progressArray: "",
      rankTitle: "",
      progessDecimal: 0,
      navigation: this.props.navigation
    }
  }

  async getProgress() {
    try {
      // get progress array from local data
      let stringifiedArray = await AsyncStorage.getItem('completedActivities');

      if (stringifiedArray == null) {
        stringifiedArray = "Array is null";
        this.setState({ progressArray: stringifiedArray });
      }
      else {
        let progressCount = 0;
        let activityCount = 0;
        let badges = [];

        for (let i = 0; i < exploreCategories.length; i++) {
          let categoryProgress = 0;
          const completedActivities = JSON.parse(stringifiedArray);
          for (let act of exploreCategories[i].items) {
            if (completedActivities[i].some(id => id == act.id)) {
              progressCount = progressCount + 1;
              categoryProgress = categoryProgress + 1;
            }
            activityCount = activityCount + 1;
          }
          if (categoryProgress >= exploreCategories[i].items.length) {
            badges.push(<Text style={styles.sectionDescription}>{exploreCategories[i].type} Badge</Text>);
          }
        }
        let percentage = progressCount / activityCount;
        let rankIndex = Math.round(percentage * progressData.ranks.length) - 1;
        let rankTitle = progressData.ranks[rankIndex];
        this.setState({ progressArray: stringifiedArray, rank: rankTitle , progessDecimal: percentage});
      }
      
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
                <ProgressBar.Bar progress={this.state.progessDecimal} width={200} height={25} />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Current Rank</Text>
                <Text style={styles.sectionDescription}>{this.state.rank}</Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Badges</Text>
                <View style={{ flexDirection: 'row' }}>{/*badges*/}</View>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Testing: Local Data</Text>
                <Text style={styles.sectionDescription}>{this.state.progressArray}</Text>
                <Button title="Clear Progress" onPress={() =>
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