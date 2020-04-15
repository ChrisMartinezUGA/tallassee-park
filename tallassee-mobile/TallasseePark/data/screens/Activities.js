import React from 'react';
import { SafeAreaView, View, Button, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';

// Resources
const styles = MainStyle;

function Item({ id, title, group, supplies, time, content }) {
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
    this.state = {
      SOLO_DATA: [],
      GROUP_DATA: [],
      ALL_DATA: [],
      data: []
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
              <Button title="Solo" onPress={() => this.setState({ data: this.state.SOLO_DATA })} />
              <Button title="Group" onPress={() => this.setState({ data: this.state.GROUP_DATA })} />
              <Button title="All" onPress={() => this.setState({ data: this.state.ALL_DATA })} />
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