import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  StatusBar,
  ScrollView
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
let hours = ['Monday: 7 AM - 5 PM', 'Tuesday: 7 AM - 5 PM', 'Wednesday: 7 AM - 5 PM', 'Thursday: 7 AM - 5 PM',
  'Friday: 7 AM - 5 PM', 'Saturday: 7 AM - 5 PM', 'Sunday: 7 AM - 5 PM'];

function InfoScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Image style={{ width: 300, height: 100 }} source={require('./../../data/images/oconee-river-land-trust.png')} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hours</Text>
              <Text style={styles.sectionDescription}>* The park is currently CLOSED, please do not enter the property *</Text>
              <Text style={styles.sectionDescription}>
                {hours[0] + "\n" + hours[1] + "\n" + hours[2] + "\n" + hours[3] + "\n"
                  + hours[4] + "\n" + hours[5] + "\n" + hours[6]}</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Athens Clarke County Government Discliamer</Text>
              <Text style={styles.sectionDescription}>
                (Official disclaimer coming soon){"\n"}
                Tallasee Park is not open to the public.{"\n"}
                This land is under preservation and is only open to approved land trust employees.{"\n"}
                This app is solely for testing new activities and should only be accessed by approved users.
            </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Occonee River Land Trust Mission Statement</Text>
              <Text style={styles.sectionDescription}>
                The mission of the Oconee River Land Trust is to conserve natural lands to protect water quality, preserve wildlife habitats, and enhance the quality of our lives and those of future generations.
                </Text>
              <Text style={styles.textURL} onPress={() => Linking.openURL('http://oconeeriverlandtrust.org/')}>
                ORLT Website
                </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  textURL: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'blue',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default InfoScreen;