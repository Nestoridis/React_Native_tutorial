import React from 'react';
import Container from './../../components/common/Container';
import Input from './../../components/common/Input';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomButton from './../../components/common/CustomButton';
import {REGISTER} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={50}
        width={50}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}> Welcome to RNContacts</Text>
        <Text style={styles.subTitle}> Please Login here</Text>

        <View style={styles.form}>
          <Input label="Username" placeholder="Enter username" />

          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton title="Submit" primary={true} />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
