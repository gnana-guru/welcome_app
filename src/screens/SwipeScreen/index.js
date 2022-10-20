import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';

const SwipeScreen = ({navigation}) => {
  const {name} = useSelector(state => state.CommonReducer);
  console.log('name ', name);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Text onPress={() => navigation.goBack()} style={styles.backText}>
            Back
          </Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={{}}>
          <Text style={styles.textStyle}>Welcome {name},</Text>
          <Text style={styles.textStyle}>This page is for demo purpose.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SwipeScreen;
