import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;
const exploreData = require('../sampleData/exploreList.json');

function Item({ title, id, typeId }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button style={styles.title} title={title} onPress={() => navigation.navigate('ExploreDetails', { typeId: typeId, itemId: id })} />
    </View>
  );
}

class ExploreList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: exploreData.categories[props.typeId].items
    }
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <View style={styles.body}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => <Item title={item.title} id={item.id} typeId={this.props.typeId} />}
              keyExtractor={item => item.id}
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
      <ExploreList typeId={typeId} />
    </View>
  );
}

export default ExploreListScreen;