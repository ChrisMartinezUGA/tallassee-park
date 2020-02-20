import React from 'react';
import { SafeAreaView, View, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;

const SOLO_DATA = [
  { id: 'activity1', title: 'Identify The Leaf' },
  { id: 'activity3', title: 'The Water Cycle Around Us' }
];

const GROUP_DATA = [
  { id: 'activity2', title: 'First To Find!' },
  { id: 'activity4', title: 'Down The River' }
];

function Item({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button style={styles.title} title={title} onPress={() => navigation.navigate('ActivityDetails')} />
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
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
            <View style={{ flexDirection: 'row' }}>
              <Button title="Solo" onPress={() => this.setState({ data: SOLO_DATA })} />
              <Button title="Group" onPress={() => this.setState({ data: GROUP_DATA })} />
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