import React from 'react';
import { SafeAreaView, View, FlatList, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

// Resources
const styles = MainStyle;

// Button that navigates to a Explore Page
function Item({ title, id, category, subtitle, content }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button buttonStyle={styles.exploreListButton} titleStyle={{fontSize:18}} title={title} onPress={() => navigation.navigate('ExploreDetails', { itemId: id, title: title, subtitle: subtitle, category: category, content: content })} />
    </View>
  );
}

var currentFilter = 'Flora';

class ExploreList extends React.Component {

  constructor(props) {
    super(props)
    currentFilter = props.type;
    this.state = {
      data: []
    };
  }

  // Gets the progress array currently on local storage
  async getProgress(typeId) {
    var typeId = 0;
    if (currentFilter == 'Flora') {
      typeId = 0;
    } else if (currentFilter == 'Fauna') {
      typeId = 1;
    } else if (currentFilter == 'Earth Science') {
      typeId = 2;
    } else {
      typeId = 3;
    }
    try {
      // Get progress array from local data
      const stringifiedArray = await AsyncStorage.getItem('completedActivities');
      if (stringifiedArray !== null) {
        const restoredArray = JSON.parse(stringifiedArray); // Ex: [[0], [1,2], [1], [2,0]]
        var data = [...this.state.data];
        for (var i = 0; i < data.length; i++) {
          // Checks if array does contain id
          if (restoredArray[typeId].some(completedTitle => completedTitle == data[i].title)) {
            let checked = data[i].title + " ✓";
            data[i] = { ...data[i], title: checked };
            this.setState({ data });
          }
        }
      }
    } catch (error) {
      // Error retrieving data
      console.log("Error", "getProgress(): " + error);
    }
  }

  async componentDidMount() {
    try {
      // Subscribe to user updates
      const unsubscribe = await firestore().collection('explore');
      const querySnap = await unsubscribe.get();
      const entries = querySnap.docs.map((documentSnapshot) => {
        return {
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        }
      });
      this.setState({
        data: entries.filter(function (el) {
          return el.category == currentFilter;
        })
      });
      await this.getProgress();
    } catch (error) {
      console.log("Error", "componentDidMount(): " + error);
    }
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <View style={styles.body}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => <Item title={item.title} id={item.key} category={item.category} subtitle={item.subtitle} content={item.content} />}
              extraData={this.state}
            />
          </View>
        </SafeAreaView>
      </>
    )
  }
}

function ExploreListScreen({ route, navigation }) {
  const { typeId } = route.params;
  const { type } = route.params;
  navigation.setOptions({
    title: type,
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <StatusBar barStyle="light-content" />
      <ExploreList type={type} />
    </View>
  );
}

export default ExploreListScreen;