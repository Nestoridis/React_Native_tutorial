import React from 'react';
import Container from './../../components/common/Container';
import Input from './../../components/common/Input';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomButton from './../../components/common/CustomButton';
import {LOGIN} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import Message from './../common/Message/index';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  loading,
  error,
}) => {
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);
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
        {error?.error && (
          <Message
            retry
            danger
            retryFn={() => {
              console.log('222', 222);
            }}

            message={error?.error}
          />
        )}

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName || error?.username?.[0]}
          />

          <Input
            label="Firstname"
            placeholder="Enter fisrtname"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Lastname"
            placeholder="Enter lastname"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />

          <Input
            label="Email"
            placeholder="Enter email"
            error={errors.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />
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
