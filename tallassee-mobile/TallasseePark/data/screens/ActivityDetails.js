import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;

function ActivitiesDetailsScreen({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>First to Find!</Text>

              <Text style={styles.sectionDescription}>
                Estimated Time: 10 minutes{"\n"}
                Supplies: Checklist, Pencil{"\n"}
                Number of Particpants: 3 per group{"\n"}
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Instructions</Text>
              <Text style={styles.sectionDescription}>With your group, explore the area and find the items on your checklist.</Text>
              <Text style={styles.sectionDescription}>Keep track of your progress on your sheet, and when your group is ready
              bring the items and checklist to your teacher.</Text>
              <Text style={styles.sectionDescription}>First group to find every item wins!</Text>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ActivitiesDetailsScreen;