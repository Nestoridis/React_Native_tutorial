import React from 'react';
import Container from './../../components/common/Container';
import Input from './../../components/common/Input';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomButton from './../../components/common/CustomButton';
import {REGISTER} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import Message from './../common/Message/index';

const LoginComponent = ({
  onSubmit,
  onChange,
  justSingedUp,
  form,
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
        <Text style={styles.subTitle}> Please Login here</Text>
        <View style={styles.form}>
          {justSingedUp && (
            <Message
              success
              onDismiss={() => {}}
              message="Account created successfully"
            />
          )}
          {error && !error?.error && (
            <Message
              danger
              onDismiss={() => {}}
              message="Invalid credentials"
            />
          )}

          {error?.error && <Message danger onDismiss message={error?.error} />}

          <Input
            label="Username"
            placeholder="Enter username"
            value={form.userName || null}
            onChangeText={value => {
              onChange({name: 'userName', value});
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
          />
          <CustomButton
            primary
            title="Submit"
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
          />
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
