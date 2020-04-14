import React from 'react';
import { SafeAreaView, View, Text, Image, Linking, ScrollView, StatusBar } from 'react-native';
import MainStyle from '../styles/MainStyle';

// Resources
const styles = MainStyle;
const orltLegal = require('../sampleData/orltLegal.json');

function InfoScreen({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Image style={{ width: 300, height: 100 }} source={{ uri: "https://tallassee.mynmi.net/images/oconee-river-land-trust.jpg" }} />
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hours</Text>
              <Text style={styles.sectionDescription}>{orltLegal.orltDisclaimer}</Text>
              <Text style={styles.sectionDescription}>{orltLegal.parkHours[0] + "\n" + orltLegal.parkHours[1]}</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Athens Clarke County Government Discliamer</Text>
              <Text style={styles.sectionDescription}>{orltLegal.accDisclaimer}</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Occonee River Land Trust Mission Statement</Text>
              <Text style={styles.sectionDescription}>{orltLegal.missionStatement}</Text>
              <Text style={styles.textURL} onPress={() => Linking.openURL(orltLegal.url)}>
                ORLT Website
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default InfoScreen;