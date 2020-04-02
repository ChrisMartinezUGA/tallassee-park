import { StyleSheet,Dimensions } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  wrapper: {
    ...StyleSheet.absoluteFill,
  },
  engine: {
    position: 'absolute',
    right: 0,
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
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'italic',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  textURL: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'blue',
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#a6afa1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: '#ffffff',
    textShadowColor: '#ffffff',
    alignSelf: 'stretch',
    width: width-40,
    
  },
  buttonTitle: {
    color: '#ffffff',
    textShadowColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
  },
  exploreButton: {
    backgroundColor: '#2f3c16',
    margin: 20,
    width: 140,
    height: 80
  }
});