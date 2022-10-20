import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#40393f',
    width: '100%',
  },
  subContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  textStyle: {fontSize: 20, color: 'white', alignSelf: 'center'},
});
export default style;
