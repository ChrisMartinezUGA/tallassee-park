import React from 'react';
import { SafeAreaView, View, Text, Image, Linking, ScrollView, StatusBar} from 'react-native';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;
const orltLegal = require('../sampleData/orltLegal.json');

let hours = ['Monday - Friday: 7 AM - 5 PM', 'Saturday & Sunday: 7 AM - 5 PM'];

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
              <Image style={{ width: 300, height: 100 }} source={require('./../../data/images/oconee-river-land-trust.png')} />
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hours</Text>
              <Text style={styles.sectionDescription}>* The park is currently CLOSED, please do not enter the property *</Text>
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