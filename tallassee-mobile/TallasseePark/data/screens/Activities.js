import React from 'react';
import { SafeAreaView, View, FlatList, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';

// Resources
const styles = MainStyle;

function Item({ id, title, desc, group, supplies, time, content }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button buttonStyle={styles.exploreListButton} titleStyle={{ fontSize: 18, fontFamily: 'OpenSans-Regular' }} title={title} onPress={() => navigation.navigate('ActivityDetails', { itemId: id, title: title, desc: desc, group: group, supplies: supplies, time: time, content: content })} />
    </View>
  );
}

class ActivityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      SOLO_DATA: [],
      GROUP_DATA: [],
      ALL_DATA: [],
      data: [],
      soloStyle: styles.filterButtonOff,
      groupStyle: styles.filterButtonOff,
      allStyles: styles.filterButtonOn
    };
  }

  async componentDidMount() {
    // Subscribe to user updates
    const unsubscribe = await firestore().collection('activities');
    const querySnap = await unsubscribe.get();
    const entries = querySnap.docs.map((documentSnapshot) => {
      return {
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      }
    });
    this.setState({ ALL_DATA: entries });
    this.setState({
      GROUP_DATA: entries.filter(function (el) {
        return el.group == true;
      })
    });
    this.setState({
      SOLO_DATA: entries.filter(function (el) {
        return el.group == false;
      })
    });
    this.setState({ data: this.state.ALL_DATA });
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <StatusBar barStyle="light-content" />
          <View style={styles.body}>
            <View style={{ flexDirection: 'row' }}>
              <Button buttonStyle={this.state.soloStyle} titleStyle={{ fontSize: 14, fontFamily: 'OpenSans-Regular' }} title="Solo" onPress={() => this.setState({ data: this.state.SOLO_DATA, soloStyle: styles.filterButtonOn, groupStyle: styles.filterButtonOff, allStyles: styles.filterButtonOff })} />
              <Button buttonStyle={this.state.groupStyle} titleStyle={{ fontSize: 14, fontFamily: 'OpenSans-Regular' }} title="Group" onPress={() => this.setState({ data: this.state.GROUP_DATA, soloStyle: styles.filterButtonOff, groupStyle: styles.filterButtonOn, allStyles: styles.filterButtonOff })} />
              <Button buttonStyle={this.state.allStyles} titleStyle={{ fontSize: 14, fontFamily: 'OpenSans-Regular' }} title="All" onPress={() => this.setState({ data: this.state.ALL_DATA, soloStyle: styles.filterButtonOff, groupStyle: styles.filterButtonOff, allStyles: styles.filterButtonOn })} />
            </View>

            <FlatList
              data={this.state.data}
              renderItem={({ item }) => <Item id={item.key} title={item.title} desc={item.desc} group={item.group} supplies={item.supplies} time={item.time} content={item.content} />}
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