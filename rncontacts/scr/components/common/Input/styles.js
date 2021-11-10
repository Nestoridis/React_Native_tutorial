import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  textInput: {
    flex: 1,
  },
  inputContainer: {
    padding: 10,
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 5,
    fontSize: 11,
  },
});
