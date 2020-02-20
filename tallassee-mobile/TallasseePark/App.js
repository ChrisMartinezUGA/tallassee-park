import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
} from 'react-native';

import { ThemeProvider } from 'react-native-elements';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import MapScreen from './data/screens/Map';
import InfoScreen from './data/screens/Info';

import ActivitiesScreen from './data/screens/Activities';
import ActivityDetailsScreen from './data/screens/ActivityDetails';

import ExploreScreen from './data/screens/Explore';
import ExploreListScreen from './data/screens/ExploreList';
import ExploreDetailsScreen from './data/screens/ExploreDetails';
import ProgressScreen from './data/screens/Progress';

function HomeScreen({ navigation }) {
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
              <Image style={{ width: 300, height: 100 }} source={require('./data/images/oconee-river-land-trust.png')}/>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Tallasee Park</Text>
              <Text style={styles.sectionDescription}>Project by the Oconee River Land Trust</Text>
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
              <Button title="Login" onPress={() => navigation.replace('Map')}></Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Map" component={MapScreen}/>
        <Stack.Screen name="Info" component={InfoScreen}/>

        <Stack.Screen name="Activities" component={ActivitiesScreen}/>
        <Stack.Screen name="ActivityDetails" component={ActivityDetailsScreen}/>

        <Stack.Screen name="Explore" component={ExploreScreen}/>
        <Stack.Screen name="ExploreList" component={ExploreListScreen}/>
        <Stack.Screen name="ExploreDetails" component={ExploreDetailsScreen}/>
        <Stack.Screen name="Progress" component={ProgressScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
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