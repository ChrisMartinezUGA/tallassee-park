import React from 'react';
import { SafeAreaView, View, Text, Image, Linking, ScrollView, StatusBar } from 'react-native';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';
import { TapGestureHandler } from 'react-native-gesture-handler';

// Resources
const styles = MainStyle;
const orltLegal = require('../sampleData/orltLegal.json');

// Login Screen
class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterOpen: false,
      hoursDisclaimer: '',
      disclaimer: '',
      mission: '',
      url: '',
    }
  }

  async componentDidMount() {
    try {
      const masterPwsSnapshot = await firestore().collection('park').doc('open');
      const doc = await masterPwsSnapshot.get();
      if (doc.exists) {
        //console.log("Document data: ", doc.data())
        this.setState({ masterOpen: doc.data().open });
        if (this.state.masterOpen == false) {
          this.setState({hoursDisclaimer: '** The park is currently CLOSED to the public. Do not enter without explicit permission. **'})
        }
      } else {
        console.log("No such document!")
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }

    try {
      const masterInfoSnapshot = await firestore().collection('park').doc('info');
      const doc = await masterInfoSnapshot.get();
      if (doc.exists) {
        //console.log("Document data: ", doc.data())
        this.setState({ disclaimer: doc.data().disclaimer });
        this.setState({ mission: doc.data().mission });
        this.setState({ url: doc.data().url });
      } else {
        console.log("No such document!")
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }

    try {
      const masterInfoSnapshot = await firestore().collection('park').doc('hours');
      const doc = await masterInfoSnapshot.get();
      if (doc.exists) {
        //console.log("Document data: ", doc.data())
        this.setState({ sunOpen: doc.data().sunOpen });
        this.setState({ sunClose: doc.data().sunClose });
        this.setState({ monOpen: doc.data().monOpen });
        this.setState({ monClose: doc.data().monClose });
        this.setState({ tuesOpen: doc.data().tuesOpen });
        this.setState({ tuesClose: doc.data().tuesClose });
        this.setState({ wedOpen: doc.data().wedOpen });
        this.setState({ wedClose: doc.data().wedClose });
        this.setState({ thursOpen: doc.data().thursOpen });
        this.setState({ thursClose: doc.data().thursClose });
        this.setState({ friOpen: doc.data().friOpen });
        this.setState({ friClose: doc.data().friClose });
        this.setState({ satOpen: doc.data().satOpen });
        this.setState({ satClose: doc.data().satClose });
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
        <StatusBar barStyle="light-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={{alignItems: 'center'}}>
                <Image style={{ width: 400, height: 40 }} source={require('../logos/TallasseeParkLogo_long_dark.png')} />
              </View>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hours</Text>
              <Text style={styles.sectionDescription}>{this.state.hoursDisclaimer}</Text>
              <Text style={styles.sectionDescription}>Sunday:     {this.state.sunOpen} - {this.state.sunClose}</Text>
              <Text style={styles.sectionDescription}>Monday:     {this.state.monOpen} - {this.state.monClose}</Text>
              <Text style={styles.sectionDescription}>Tuesday:     {this.state.tuesOpen} - {this.state.tuesClose}</Text>
              <Text style={styles.sectionDescription}>Wednesday:     {this.state.wedOpen} - {this.state.wedClose}</Text>
              <Text style={styles.sectionDescription}>Thursday:     {this.state.thursOpen} - {this.state.thursClose}</Text>
              <Text style={styles.sectionDescription}>Friday:     {this.state.friOpen} - {this.state.friClose}</Text>
              <Text style={styles.sectionDescription}>Saturday:     {this.state.satOpen} - {this.state.satClose}</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Athens Clarke County Government Discliamer</Text>
              <Text style={styles.sectionDescription}>{this.state.disclaimer}</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Occonee River Land Trust Mission Statement</Text>
              <Text style={styles.sectionDescription}>{this.state.mission}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <View style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
                <Image style={{ width: 180, height: 30 }} source={{ uri: "https://tallassee.mynmi.net/images/oconee-river-land-trust.jpg" }} />
                <Text style={styles.textURL} onPress={() => Linking.openURL(this.state.url)}>
                ORLT Website
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    )
  }
}

function InfoScreen({ navigation }) {
  return <Info navigation={navigation} />
}

/*
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
}*/

export default InfoScreen;