import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 12,
  },
  textInput: {
    flex: 1,
  },
  inputContainer: {
    margin: 12,
    padding: 10,
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 5,
    fontSize: 11,
  },
  loaderSection: {
    flexDirection: 'row',
  },
});
