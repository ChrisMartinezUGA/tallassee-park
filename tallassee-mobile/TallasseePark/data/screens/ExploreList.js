import React from 'react';
import { SafeAreaView, View, Button, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainStyle from '../styles/MainStyle';
import firestore from '@react-native-firebase/firestore';

// Resources
const styles = MainStyle;

// Button that navigates to a Explore Page
function Item({ title, id, category, subtitle, content }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <Button style={styles.buttonTitle} title={title} onPress={() => navigation.navigate('ExploreDetails', { itemId: id, title: title, subtitle: subtitle, category: category, content: content })} />
    </View>
  );
}

var currentFilter = 'Flora';

class ExploreList extends React.Component {

  constructor(props) {
    super(props)
    currentFilter = props.type;
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
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