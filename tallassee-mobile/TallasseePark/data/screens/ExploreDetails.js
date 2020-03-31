import React from 'react';

import { View, Text, SafeAreaView, ScrollView, StatusBar, AsyncStorage, Button } from 'react-native';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;
const exploreData = require('../sampleData/exploreList.json');

async function updateProgress(typeId, itemId) {
  try {
    // get progress array from local data
    const stringifiedArray = await AsyncStorage.getItem('completedActivities');

    if (stringifiedArray !== null) {
      const restoredArray = JSON.parse(stringifiedArray); // Ex: [[0], [1,2], [1], [2,0]]

      // check if array doesn't contain id already
      if (!restoredArray[typeId].some(id => id == itemId)) {
        restoredArray[typeId].push(parseInt(itemId));

        // save progress array to local data
        await AsyncStorage.setItem("completedActivities", JSON.stringify(restoredArray));
      }
    }
  } catch (error) {
    // Error retrieving data
    Alert.alert("Error", "updateProgress()")
  }
}

function ExploreDetailsScreen({ route, navigation }) {
  const { typeId } = route.params;
  const { itemId } = route.params;
  const TYPE_DATA = exploreData.categories[typeId].items;
  var currentItem;
  for (var item of TYPE_DATA) {
    if (item.id == itemId) {
      currentItem = item;
      break;
    }
  }
  updateProgress(typeId, itemId);
  navigation.setOptions({
    title: currentItem.title,
  });
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
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>{currentItem.content}</Text>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ExploreDetailsScreen;