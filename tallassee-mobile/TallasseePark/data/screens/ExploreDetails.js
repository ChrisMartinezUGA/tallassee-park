import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;
const exploreData = require('../sampleData/exploreList.json');

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