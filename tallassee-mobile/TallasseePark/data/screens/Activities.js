import React from 'react';
import { SafeAreaView, View, Button, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';

// Resources
const styles = MainStyle;
const activityList = require('../sampleData/activityList.json');

const SOLO_DATA = activityList.soloActivities;
const GROUP_DATA = activityList.groupActivities;
const ALL_DATA = activityList.soloActivities.concat(activityList.groupActivities);

// Button that navigates to an Activity
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
      data: ALL_DATA
    }
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
              renderItem={({ item }) => <Item title={item.title} id={item.id} />}
              keyExtractor={item => item.id}
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