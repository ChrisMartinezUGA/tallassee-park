import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;
const activityList = require('../sampleData/activityList.json');
const ALL_DATA = activityList.soloActivities.concat(activityList.groupActivities);

function ActivitiesDetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  var currentItem;
  for (var item of ALL_DATA) {
    if (item.id == itemId) {
      currentItem = item;
      break;
    }
  }
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{currentItem.title}</Text>

              <Text style={styles.sectionDescription}>
                Estimated Time: {currentItem.estimatedTime}{"\n"}
                Supplies: {currentItem.supplies}{"\n"}
                Number of Particpants: {currentItem.participants}{"\n"}
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Instructions</Text>
              <Text style={styles.sectionDescription}>{currentItem.instructions}</Text>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ActivitiesDetailsScreen;