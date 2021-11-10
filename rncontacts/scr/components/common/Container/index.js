import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';

const Container = ({children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper]} />
      {children}
    </ScrollView>
  );
};

export default Container;
