import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, View, Text, StatusBar, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';
import MainStyle from './data/styles/MainStyle';
import firestore from '@react-native-firebase/firestore';


// Import Screens from the data folder
import MapScreen from './data/screens/Map';
import InfoScreen from './data/screens/Info';
import ActivitiesScreen from './data/screens/Activities';
import ActivityDetailsScreen from './data/screens/ActivityDetails';
import ExploreScreen from './data/screens/Explore';
import ExploreListScreen from './data/screens/ExploreList';
import ExploreDetailsScreen from './data/screens/ExploreDetails';
import ProgressScreen from './data/screens/Progress';


// Resources
const styles = MainStyle;
const orltLegal = require('./data/sampleData/orltLegal.json');

// Login Screen
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      errorMessage: '',
      masterPws: '',
      masterOpen: false
    }
  }

  async componentDidMount() {
    try {
      const masterPwsSnapshot = await firestore().collection('park').doc('open');
      const doc = await masterPwsSnapshot.get();
      if (doc.exists) {
        console.log("Document data: ", doc.data())
        this.setState({ masterPws: doc.data().password });
        this.setState({ masterOpen: doc.data().open });
        if (this.state.masterOpen == true) {
          this.props.navigation.replace('Map');
        }
      } else {
        console.log("No such document!")
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <StatusBar barStyle="light-content" />
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Image style={{ width: 360, height: 52 }} source={require("./data/logos/TallasseeParkLogo_long_dark.png")} />
                <Text style={styles.sectionDescription}>A Project by the Oconee River Land Trust</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1, fontFamily: 'OpenSans-Regular' }}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password} />
                <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Athens Clarke County Government Discliamer</Text>
                <Text style={styles.sectionDescription}>{orltLegal.accDisclaimer}</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Button buttonStyle={styles.loginButton} titleStyle={{ fontSize: 18, fontFamily: 'OpenSans-Regular' }} title="Login" onPress={() => {
                  if (this.state.password == this.state.masterPws) {
                    this.setState({ errorMessage: '' });
                    this.props.navigation.replace('Map')
                  } else {
                    this.setState({ errorMessage: 'Incorrect Password' })
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

// Navigation
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        title: 'Sign In',
        headerStyle: {
          backgroundColor: '#2d454f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyle: { backgroundColor: '#fff' },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen}
          options={{
            title: 'Tallassee Park',
            headerTitle: (
              <Image style={{ width: 200, height: 20 }} source={require("./data/logos/TallasseeParkLogo_long_white.png")} />
            ),
            headerStyle: {
              backgroundColor: '#2d454f',
            },
          }} />
        <Stack.Screen name="Info" component={InfoScreen}
          options={{
            title: 'Tallassee Park Info',
            headerBackTitle: 'Map'
          }} />
        <Stack.Screen name="Activities" component={ActivitiesScreen}
          options={{
            title: 'Games & Activities',
            headerBackTitle: 'Map'
          }} />
        <Stack.Screen name="ActivityDetails" component={ActivityDetailsScreen}
          options={{
            title: 'Activity',
            headerStyle: {
              backgroundColor: '#ABB1A4',
              height: 120,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22
            },
            headerBackTitle: 'Back'
          }} />

        <Stack.Screen name="Explore" component={ExploreScreen}
          options={{
            title: 'Explore Tallassee Park',
            headerBackTitle: 'Map'
          }} />
        <Stack.Screen name="ExploreList" component={ExploreListScreen}
          options={{
            title: '[Category]',
            headerStyle: {
              backgroundColor: '#2f3c16',
              height: 120,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
            headerBackTitle: 'Explore'
          }} />
        <Stack.Screen name="ExploreDetails" component={ExploreDetailsScreen}
          options={{
            title: '[Item]',
            headerStyle: {
              backgroundColor: '#ABB1A4',
              height: 120,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22
            },
            headerBackTitle: 'Back'
          }} />
        <Stack.Screen name="Progress" component={ProgressScreen} options={{
          title: 'Progress',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;