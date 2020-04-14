import React from 'react';
import { SafeAreaView, View, Button, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';

// Resources
const styles = MainStyle;
//const activityList = require('../sampleData/activityList.json');

var SOLO_DATA = [];
var GROUP_DATA = [];
var ALL_DATA = [];

// Button that navigates to an Activity
// renderItem={({ item }) => <Item id={item.key} title={item.title} group={item.group} supplies={item.supplies} time={item.time} content={item.content} />}

function Item({ id,title,group,supplies,time,content }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button style={styles.buttonTitle} title={title} onPress={() => navigation.navigate('ActivityDetails', { itemId: id, title: title, group: group, supplies: supplies, time: time, content: content })} />
    </View>
  );
}

class ActivityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    // Subscribe to user updates
    const unsubscribe = firestore()
      .collection('activities')
      .onSnapshot((querySnapshot) => {
        //console.log('Total activities entries', querySnapshot.size);
        const entries = querySnapshot.docs.map((documentSnapshot) => {
          return {
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          }
        });
        ALL_DATA = entries;
        GROUP_DATA = entries.filter(function(el) {
          return el.group == true;
        });
        SOLO_DATA = entries.filter(function(el) {
          return el.group == false;
        });
      });
      this.state = {
        data: ALL_DATA
      }
    /*
    this.state = {
      data: ALL_DATA
    }
    */
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <StatusBar barStyle="light-content" />
          <View style={styles.body}>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Solo" onPress={() => this.setState({ data: SOLO_DATA })} />
              <Button title="Group" onPress={() => this.setState({ data: GROUP_DATA })} />
              <Button title="All" onPress={() => this.setState({ data: ALL_DATA })} />
            </View>

            <FlatList
              data={this.state.data}
              renderItem={({ item }) => <Item id={item.key} title={item.title} group={item.group} supplies={item.supplies} time={item.time} content={item.content} />}
            />
          </View>
        </SafeAreaView>
      </>
    )
  }
}

function ActivitiesScreen({ navigation }) {
  return (
    <ActivityList />
  );
}

export default ActivitiesScreen;