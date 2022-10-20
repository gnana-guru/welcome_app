import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f2aeed',
  },
  subContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '700',
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    fontWeight: '300',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  inputName: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 0.6,
    borderColor: 'grey',
    height: 40,
    marginTop: 10,
    color: 'black',
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 35,
    color: 'blue',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
});
export default styles;
