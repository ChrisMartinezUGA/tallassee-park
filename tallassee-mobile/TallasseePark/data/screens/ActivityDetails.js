import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import MainStyle from '../styles/MainStyle';

// Resources
const styles = MainStyle;

function ActivitiesDetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { title } = route.params;
  const { desc } = route.params;
  const { group } = route.params;
  const groupText = group ? "Yes" : "No";
  const { supplies } = route.params;
  const { time } = route.params;
  const { content } = route.params;
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
            <View style={styles.activityTopContainer}>
              <Text style={styles.activityDesc}>{desc}</Text>
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.activityInfo}>
                Estimated Time: {time}{"\n"}
                Supplies: {supplies}{"\n"}
                Group Activity: {groupText}
              </Text>
            </View>

            <View style={styles.activityContainer}>
              <Text style={styles.activityInstructionsTitle}>Instructions</Text>
              <Text style={styles.activityInstructions}>{content}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ActivitiesDetailsScreen;