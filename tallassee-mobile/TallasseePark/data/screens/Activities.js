import React from 'react';

import {
  SafeAreaView,
  View,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from '@react-navigation/native';

const SOLO_DATA = [
  {
    id: 'activity1',
    title: 'Identify The Leaf',
  },
  {
    id: 'activity3',
    title: 'The Water Cycle Around Us',
  },
];

const GROUP_DATA = [
  {
    id: 'activity2',
    title: 'First To Find!',
  },
  {
    id: 'activity4',
    title: 'Down The River',
  }
];

function Item({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button style={styles.title} title={title} onPress={() => navigation.navigate('ActivityDetails')}></Button>
    </View>
  );
}

class ActivityList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: SOLO_DATA
    }
  }

  render() {
    return(
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Item title={item.title}/>}
            keyExtractor={item => item.id}
          />
          <View style={{ flexDirection: 'row' }}>
            <Button title="Solo" onPress={() => this.setState({data: SOLO_DATA})}></Button>
            <Button title="Group" onPress={() => this.setState({data: GROUP_DATA})}></Button>
          </View>
        </View>
      </SafeAreaView>
    </>
    )
  }
}

function ActivitiesScreen({ navigation }) {
  return (
    <ActivityList></ActivityList>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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
  textURL: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'blue',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#A9F7FD',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});

export default ActivitiesScreen;