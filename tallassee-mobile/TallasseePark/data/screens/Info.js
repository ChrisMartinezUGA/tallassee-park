import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  Linking,
  StatusBar,
  ScrollView
} from 'react-native';

import MainStyle from '../styles/MainStyle';

let hours = ['Monday - Friday: 7 AM - 5 PM', 'Saturday & Sunday: 7 AM - 5 PM'];

function InfoScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
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
              <Text style={styles.sectionDescription}>
                {hours[0] + "\n" + hours[1]}</Text>
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

const styles = MainStyle;

export default InfoScreen;