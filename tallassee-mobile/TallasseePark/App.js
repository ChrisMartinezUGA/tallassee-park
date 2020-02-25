import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, View, Text, StatusBar, TextInput, Button, Image } from 'react-native';
import { ThemeProvider, Header } from 'react-native-elements';

// Import Screens from the data folder
import MapScreen from './data/screens/Map';
import InfoScreen from './data/screens/Info';
import ActivitiesScreen from './data/screens/Activities';
import ActivityDetailsScreen from './data/screens/ActivityDetails';
import ExploreScreen from './data/screens/Explore';
import ExploreListScreen from './data/screens/ExploreList';
import ExploreDetailsScreen from './data/screens/ExploreDetails';
import ProgressScreen from './data/screens/Progress';

import MainStyle from './data/styles/MainStyle';

const styles = MainStyle;
const Stack = createStackNavigator();
const orltLegal = require('./data/sampleData/orltLegal.json');

const correctPassword = "UGA";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: ''
    }
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Image style={{ width: 300, height: 100 }} source={require('./data/images/oconee-river-land-trust.png')} />
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Tallasee Park</Text>
                <Text style={styles.sectionDescription}>Project by the Oconee River Land Trust</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password} />
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Athens Clarke County Government Discliamer</Text>
                <Text style={styles.sectionDescription}>{orltLegal.accDisclaimer}</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Button title="Login" onPress={() => {
                  if (this.state.password == correctPassword) {
                    this.props.navigation.replace('Map')
                  }
                }} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

function HomeScreen({ navigation }) {
  return <Home navigation={navigation} />
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Tallassee Park' }} />
        <Stack.Screen name="Info" component={InfoScreen} />

        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="ActivityDetails" component={ActivityDetailsScreen} />

        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="ExploreList" component={ExploreListScreen} options={{}} />
        <Stack.Screen name="ExploreDetails" component={ExploreDetailsScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;