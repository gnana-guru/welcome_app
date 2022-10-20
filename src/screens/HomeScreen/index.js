import React from 'react';
import {Button, Image, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import SwipeButton from 'rn-swipe-button';
import styles from './style';
import Premium from '../../assets/red.png';

const HomeScreen = ({navigation}) => {
  const {name} = useSelector(state => state.CommonReducer);
  console.log('name ', name);

  const CheckoutButton = () => {
    return (
      <View style={styles.swipeView}>
        <Image style={styles.iconImage} source={Premium}></Image>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            onPress={() => navigation.navigate('WelcomeScreen')}
            style={styles.backText}>
            Back
          </Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.buttonTotal}>
          <Button title="Press me" color={'#40393f'} />
          <Button title="Press me" color={'#495d73'} />
          <Button title="Press me" color={'#78a7fa'} />
          <SwipeButton
            title="Slide me to continue"
            thumbIconComponent={CheckoutButton}
            thumbIconStyles={{borderRadius: 5}}
            thumbIconBackgroundColor={'white'}
            railStyles={{borderRadius: 5}}
            railFillBackgroundColor={'#78a7fa'}
            thumbIconWidth={50}
            railBackgroundColor="#40393f"
            containerStyles={{borderRadius: 5, backgroundColor: 'green'}}
            titleColor={'#75a5fa'}
            onSwipeSuccess={() => navigation.navigate('SwipeScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
