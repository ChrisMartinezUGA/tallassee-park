/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
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
              <Image style={{width: 300, height: 100}} source={require('./data/images/oconee-river-land-trust.png')}></Image>
              </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Tallasee Park</Text>
              <Text style={styles.sectionDescription}>
                Subtitle
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Password</Text>
              <TextInput secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}>Password</TextInput>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Disclaimer</Text>
              <Text style={styles.sectionDescription}>
                Tallasee Park is not open to the public. 
                This land is under preservation and is only open to approved land trust employees. 
                This app is solely for testing new activities and should only be accessed by approved users.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Button title="Login"></Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

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
  highlight: {
    fontWeight: '700',
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

export default App;
