import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateUserName} from '../../redux/action';
import styles from './style';

const WelcomeScreen = ({navigation}) => {
  const initialState = {
    name: '',
  };
  const [state, setState] = useState(initialState);
  const updateState = data => {
    setState({...state, ...data});
  };
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.welcomeText}>Welcome, User</Text>
        <TextInput
          placeholder={'Enter you name'}
          placeholderTextColor={'grey'}
          style={styles.inputName}
          onChangeText={text => updateState({name: text})}
          value={state.name}
        />
        <Text style={styles.errorText}>Please Enter you name here.</Text>
        <Button
          style={styles.button}
          title="Proceed"
          color={state.name.length > 1 ? 'black' : 'grey'}
          onPress={() => {
            dispatch(updateUserName(state.name));
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
