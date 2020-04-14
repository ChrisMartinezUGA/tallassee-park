import React from 'react';
import { SafeAreaView, View, Button, FlatList, StatusBar, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';

// Resources
const styles = MainStyle;
//var exploreData = require('../sampleData/exploreList.json');
var exploreData = [];
var currentFilter = "Flora";

// Button that navigates to a Explore Page
/*
function Item({ title, id, typeId }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button style={styles.title} title={title} onPress={() => navigation.navigate('ExploreDetails', { typeId: typeId, itemId: id })} />
    </View>
  );
}
*/

// Button that navigates to a Explore Page
function Item({ title, id, category, subtitle, content }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button style={styles.buttonTitle} title={title} onPress={() => navigation.navigate('ExploreDetails', { itemId: id, title: title, subtitle: subtitle, category: category, content: content })} />
    </View>
  );
}

class ExploreList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
    currentFilter = props.type;
    // Subscribe to user updates
    const unsubscribe = firestore()
      .collection('explore')
      .onSnapshot((querySnapshot) => {
        //console.log('Total explore entries', querySnapshot.size);
        const entries = querySnapshot.docs.map((documentSnapshot) => {
          return {
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          }
        });
        exploreData = entries;
      });
      this.state = {
        data: exploreData
      }
  }

  filter(type) {
    filteredData = exploreData.filter(function(el) {
      return el.category == currentFilter;
    });
    this.state.data = filteredData;
  }

  render() {
    this.filter(currentFilter);
    return (
      <>
        <SafeAreaView>
          <View style={styles.body}>
            <FlatList
              data={filteredData}
              renderItem={({ item }) => <Item title={item.title} id={item.key} category={item.category} subtitle={item.subtitle} content={item.content} />}
              extraData={this.state}
            />
          </View>
        </SafeAreaView>
      </>
    )
    
    /*
   return (
     <FlatList
      data={exploreData}
      renderItem={({item}) => <Text>{item.key}</Text>} />
   )
   */
  }
}

function ExploreListScreen({ route, navigation }) {
  const { typeId } = route.params;
  const { type } = route.params;
  navigation.setOptions({
    title: type,
  });
  /*
  navigation.setOptions({
    header: props => <Header
      backgroundImage={require('../images/trails.jpg')}
      statusBarProps={{ barStyle: 'light-content' }}
      barStyle={'light-content'}
      leftComponent={{
        text: 'back', color: '#fff', onPress: () => navigation.goBack(), style: {
          color: '#fff',
          fontWeight: 'bold'
        }
      }}
      centerComponent={{
        text: type.toUpperCase(), style: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 40
        }
      }}
      centerContainerStyle={{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 180
      }}
      containerStyle={{
        height: 240
      }}
      leftContainerStyle={{
        height: 180,
        justifyContent: 'flex-start'
      }}
    />
  });
  */
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <StatusBar barStyle="light-content" />
      <ExploreList type={type} />
    </View>
  );
}

export default ExploreListScreen;