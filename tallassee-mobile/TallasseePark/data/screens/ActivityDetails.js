import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import MainStyle from '../styles/MainStyle';

// Resources
const styles = MainStyle;
const activityList = require('../sampleData/activityList.json');
const ALL_DATA = activityList.soloActivities.concat(activityList.groupActivities);
//itemId: id, title: title, group: group, supplies: supplies, time: time, content: content
function ActivitiesDetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { title } = route.params;
  const { group } = route.params;
  const groupText = group ? "Yes" : "No";
  const { supplies } = route.params;
  const { time } = route.params;
  const { content } = route.params;
  //var currentItem;
  /*
  // Retrieves item info based on the passed itemId
  for (var item of ALL_DATA) {
    if (item.id == itemId) {
      currentItem = item;
      break;
    }
  }
  */

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{title}</Text>

              <Text style={styles.sectionDescription}>
                Estimated Time: {time}{"\n"}
                Supplies: {supplies}{"\n"}
                Group Activity: {groupText}{"\n"}
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Instructions</Text>
              <Text style={styles.sectionDescription}>{content}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ActivitiesDetailsScreen;