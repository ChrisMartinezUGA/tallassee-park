import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MainStyle from '../styles/MainStyle';
import AsyncImage from './AsyncImage';
import storage from '@react-native-firebase/storage';

// Resources
const styles = MainStyle;

function ExploreDetailsScreen({ route, navigation }) {
  console.log("Inside ExploreDetailsScreen");
  const { itemId } = route.params;
  const { title } = route.params;
  const { subtitle } = route.params;
  const { category } = route.params;
  const { content } = route.params;
  var typeId = 0;
  if (category == 'Flora') {
    typeId = 0;
  } else if (category == 'Fauna') {
    typeId = 1;
  } else if (category == 'Earth Science') {
    typeId = 2;
  } else {
    typeId = 3;
  }
  updateProgress(typeId, title);

  return <ExploreDetails navigation={navigation} itemId={itemId} title={title} subtitle={subtitle} category={category} typeId={typeId} content={content} />
  //return <ExploreDetails navigation={navigation} />
}

class ExploreDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("##### Inside ExploreDetails constructor");
    this.state = {
      navigation: this.props.navigation,
      itemId: this.props.itemId,
      title: this.props.title,
      subtitle: this.props.subtitle,
      category: this.props.category,
      typeId: this.props.typeId,
      content: this.props.content,
      imageUrl: "https://www.positive.news/wp-content/uploads/2019/03/feat-1800x0-c-center.jpg",
      firebaseImageRef: 'exploreimgs/' + this.props.itemId + '.jpg'
    }
    this.props.navigation.setOptions({
      title: this.state.title,
    });
  }

  /*
  async componentDidMount() {
    console.log("##### Top of componentDidMount()");
    // Create a reference to the file we want to download
    var imageRef = await storage().ref('exploreimgs/' + this.state.itemId + '.jpg').getDownloadURL().then(function(url) {
      // Insert url into an <img> tag to "download"
      //console.log("IMAGEURL --> " + url );
      console.log("##### Inside getDownloadURL().then()");
      this.setState({imageUrl: url});
      forceUpdate();
      this.forceUpdate();
    }).catch(function(error) {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          console.log("Doesn't Exist");
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          console.log("Incorrect Permissions");
          break;

        case 'storage/canceled':
          // User canceled the upload
          console.log("Cancelled");
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          console.log("Unknown");
          break;
      }
    });
    console.log("##### Bottom of componentDidMount()");
    this.forceUpdate();
  }
  */

  render() {
    console.log("##### Inside Render, Before Return");
    //console.log("IMAGEURL --> " + this.state.imageUrl );
    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.exploreContainer}>
              <AsyncImage image={this.state.firebaseImageRef} style={styles.exploreImage} refresh={this.state.refresh}></AsyncImage>
            </View>
            <View style={styles.exploreContainer}>
              <Text style={styles.exploreTitle}>{this.state.title}</Text>
              <Text style={styles.exploreSubtitle}>{this.state.subtitle}</Text>
            </View>
            <View style={styles.exploreContainer}>
              <Text style={styles.exploreContent}>{this.state.content}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

}


// Updates the progress array currently on local storage
async function updateProgress(typeId, title) {
  try {
    // Get progress array from local data
    const stringifiedArray = await AsyncStorage.getItem('completedActivities');
    if (stringifiedArray !== null) {
      const restoredArray = JSON.parse(stringifiedArray); // Ex: [[0], [1,2], [1], [2,0]]
      // Checks if array doesn't contain id already
      if (!restoredArray[typeId].some(completedTitle => completedTitle == title)) {
        restoredArray[typeId].push(title);

        // Saves progress array to local data
        await AsyncStorage.setItem("completedActivities", JSON.stringify(restoredArray));
      }
    }
  } catch (error) {
    // Error retrieving data
    console.log("Error", "updateProgress(): " + error);
  }
}

export default ExploreDetailsScreen;

/*

function ExploreDetailsScreen({ route, navigation }) {
  // Get params from Navigation route
  const { itemId } = route.params;
  const { title } = route.params;
  const { subtitle } = route.params;
  const { category } = route.params;
  const { content } = route.params;
  var typeId = 0;
  if (category == 'Flora') {
    typeId = 0;
  } else if (category == 'Fauna') {
    typeId = 1;
  } else if (category == 'Earth Science') {
    typeId = 2;
  } else {
    typeId = 3;
  }
 
  // Update progress for 'discovered' entry
  updateProgress(typeId, title);
  
  console.log("CHECKPOINT 4");

  navigation.setOptions({
    title: title,
  });
  console.log("CHECKPOINT 5");

export default ExploreDetailsScreen;

*/