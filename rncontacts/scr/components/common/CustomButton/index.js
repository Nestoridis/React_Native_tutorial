import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disable,
  loading,
  onPress,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
    return 'row';
  };

  const getbackgroundColor = () => {
    if (disable) {
      return colors.grey;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
    return colors.primary;
  };

  return (
    <TouchableOpacity
      disable={disable}
      omPress={onPress}
      style={[styles.wrapper, {backgroundColor: getbackgroundColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator color={primary ? colors.grey : colors.primary} />
        )}
        {title && (
          <Text
            style={{
              color: disable ? 'black' : 'white',
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
