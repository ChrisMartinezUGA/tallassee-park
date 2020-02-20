import { StyleSheet } from "react-native";

import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
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
        backgroundColor: '#A9F7FD',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      }
  });