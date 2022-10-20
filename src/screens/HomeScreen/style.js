import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#40393f',
    width: '100%',
  },
  nameText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'flex-end',
    width: 'auto',
    fontWeight: '600',
  },
  backText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'flex-end',
    width: 100,
    fontWeight: '600',
  },
  subContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonTotal: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'white',
    height: 300,
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  iconImage: {
    resizeMode: 'contain',
    height: 40,
    width: 40,
    backgroundColor: '#78a7fa',
  },
  swipeView: {
    width: 100,
    height: 50,
    backgroundColor: '#78a7fa',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default style;
