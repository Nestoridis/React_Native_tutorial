import React from 'react';
import Container from './../../components/common/Container';
import Input from './../../components/common/Input';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomButton from './../../components/common/CustomButton';
import {LOGIN} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
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
        <Text style={styles.subTitle}> Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName}
          />

          <Input
            label="Firstname"
            placeholder="Enter fisrtname"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />

          <Input
            label="Lastname"
            placeholder="Enter lastname"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />

          <Input
            label="Email"
            placeholder="Enter email"
            error={errors.email}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
