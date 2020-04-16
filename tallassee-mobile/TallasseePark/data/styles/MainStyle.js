import { StyleSheet, Dimensions } from "react-native";
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
    fontFamily: 'BebasNeue-Regular',
    color: Colors.black,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Bitter-Bold',
    fontStyle: 'italic',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    color: Colors.dark,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'OpenSans-Regular',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  textURL: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    color: 'blue',
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#a6afa1',
    marginTop: 20,
    marginHorizontal: 16,
    color: '#ffffff',
    textShadowColor: '#ffffff',
    alignSelf: 'stretch',
    width: width - 40,

  },
  buttonTitle: {
    color: '#ffffff',
    textShadowColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Bitter-Bold',
  },
  exploreButton: {
    backgroundColor: '#2f3c16',
    margin: 20,
    width: 140,
    height: 80
  },
  exploreTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'BebasNeue-Regular',
    color: Colors.black,
    textAlign: 'center'
  },
  exploreSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'italic',
    color: Colors.black,
    textAlign: 'center'
  },
  exploreContent: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    color: Colors.black,
    lineHeight: 30
  },
  exploreContainer: {
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  exploreImage: {
    width: '100%',
    height: 160,
    resizeMode: 'contain'
  },
  loginButton: {
    backgroundColor: '#313c1a',
    paddingVertical: 15,
    paddingHorizontal: 32
  },
  clearProgressButton: {
    backgroundColor: '#a8a389',
    paddingVertical: 15,
    paddingHorizontal: 32
  },
  exploreListButton: {
    backgroundColor: '#a8a389',
    paddingVertical: 15,
    paddingHorizontal: 32
  },
  filterButtonOn: {
    backgroundColor: '#313c1a',
    borderRadius: 0
  },
  filterButtonOff: {
    backgroundColor: '#a6b0a1',
    borderRadius: 0
  },
  activityDesc: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'italic',
    color: Colors.black,
    textAlign: 'center'
  },
  activityInfo: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    color: Colors.black,
  },
  activityInstructionsTitle: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'BebasNeue-Regular',
    color: Colors.black,
    textAlign: 'center'
  },
  activityInstructions: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    color: Colors.black,
  },
  activityContainer: {
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  activityTopContainer: {
    marginTop: 4,
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: 'center'
  }
});