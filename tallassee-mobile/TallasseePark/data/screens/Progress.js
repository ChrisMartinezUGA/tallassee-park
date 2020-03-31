import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StatusBar, ListView } from 'react-native';
import * as Progress from 'react-native-progress';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;
const exploreData = require('../sampleData/exploreList.json');
const exploreCategories = exploreData.categories;
const progressData = require('../sampleData/progress.json');
let progress = 0;
let activityCount = 0;
let badges = [];

for (let i = 0; i < exploreCategories.length; i++) {
  let categoryProgress = 0;
  for (let act of exploreCategories[i].items) {
    if (progressData.completedActivities[i].completedIDs.some(id => id == act.id)) {
      progress = progress + 1;
      categoryProgress = categoryProgress + 1;
    }
    activityCount = activityCount + 1;
  }
  if (categoryProgress >= exploreCategories[i].items.length) {
    badges.push(<Text style={styles.sectionDescription}>{exploreCategories[i].type} Badge</Text>);
  }
}
let progessDecimal = progress / activityCount;
let rankIndex = Math.round(progessDecimal * progressData.ranks.length) - 1;
let rank = progressData.ranks[rankIndex];

function ProgressScreen({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Progress.Bar progress={progessDecimal} width={200} height={25} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Current Rank</Text>
              <Text style={styles.sectionDescription}>{rank}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Badges</Text>
              <View style={{ flexDirection: 'row' }}>{badges}</View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ProgressScreen;