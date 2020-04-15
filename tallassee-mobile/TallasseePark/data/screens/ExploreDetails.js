import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MainStyle from '../styles/MainStyle';

// Resources
const styles = MainStyle;

// Updates the progress array currently on local storage
async function updateProgress(typeId, title) {
  try {
    // Get progress array from local data
    const stringifiedArray = await AsyncStorage.getItem('completedActivities');
    if (stringifiedArray !== null) {
      const restoredArray = JSON.parse(stringifiedArray); // Ex: [[0], [1,2], [1], [2,0]]
      // Checks if array doesn't contain id already
      if (!restoredArray[typeId].some(completedTitle => completedTitle == title)) {
        restoredArray[typeId].push(title);

        // Saves progress array to local data
        await AsyncStorage.setItem("completedActivities", JSON.stringify(restoredArray));
      }
    }
  } catch (error) {
    // Error retrieving data
    console.log("Error", "updateProgress(): " + error);
  }
}

function ExploreDetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { title } = route.params;
  const { subtitle } = route.params;
  const { category } = route.params;
  const { content } = route.params;
  var typeId = 0;
  if (category == 'Flora') {
    typeId = 0;
  } else if (category == 'Fauna') {
    typeId = 1;
  } else if (category == 'Earth Science') {
    typeId = 2;
  } else {
    typeId = 3;
  }

  updateProgress(typeId, title);

  navigation.setOptions({
    title: title,
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
              <Text style={styles.sectionTitle}>{title}</Text>
              <Text style={styles.sectionSubtitle}>{subtitle}</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>{content}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ExploreDetailsScreen;