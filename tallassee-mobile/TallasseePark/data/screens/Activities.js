import React from 'react';
import { SafeAreaView, View, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;
const activityList = require('../sampleData/activityList.json');

const SOLO_DATA = activityList.soloActivities;
const GROUP_DATA = activityList.groupActivities;
const ALL_DATA = activityList.soloActivities.concat(activityList.groupActivities);

function Item({ title, id }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button style={styles.title} title={title} onPress={() => navigation.navigate('ActivityDetails', { itemId: id })} />
    </View>
  );
}

class ActivityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: SOLO_DATA
    }
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <View style={styles.body}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => <Item title={item.title} id={item.id} />}
              keyExtractor={item => item.id}
            />
            <View style={{ flexDirection: 'row' }}>
              <Button title="Solo" onPress={() => this.setState({ data: SOLO_DATA })} />
              <Button title="Group" onPress={() => this.setState({ data: GROUP_DATA })} />
              <Button title="All" onPress={() => this.setState({ data: ALL_DATA })} />
            </View>
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