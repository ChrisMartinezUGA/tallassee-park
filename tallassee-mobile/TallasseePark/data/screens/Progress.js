import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import MainStyle from '../styles/MainStyle';

const styles = MainStyle;

function ProgressScreen({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Progress.Bar progress={0.3} width={200} height={25} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Current Rank</Text>
              <Text style={styles.sectionDescription}>Tadpole</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Badges</Text>
              <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 100, height: 100 }} source={require('./../../data/images/star.png')} />
                <Image style={{ width: 100, height: 100 }} source={require('./../../data/images/tree.png')} />
                <Image style={{ width: 100, height: 100 }} source={require('./../../data/images/river.png')} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ProgressScreen;