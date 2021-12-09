import React from 'react';
import Container from './../../components/common/Container';
import Input from './../../components/common/Input';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from './../../constants/actionTypes/general';

const CreateContactComponent = () => {
  return(
    <View style={styles.Container}>
        <Container>
          <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.imageView} />
          <Text style={styles.chooseText}>Choose image</Text>
          <Input label="First name" placeholder= "Enter fisrt name" />
          <Input label="Last name" placeholder= "Enter last name" />
          <Input icon={
          <CountryPicker
            withFilter
            withFlag
            withCountryNameButton ={false}
            withCallingCode
            withEmoji
            onSelect={() => {}}
          />} 
          style={{paddingLeft:10}}
          label="Phone number" placeholder= "Enter phone" />

          <CustomButton  primary title="Submit" />
      </Container>
    </View>

  );
};

export default CreateContactComponent;
