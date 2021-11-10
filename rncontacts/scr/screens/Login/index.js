import React from 'react';
import Container from './../../components/common/Container';
import Input from './../../components/common/Input';
import {Text} from 'react-native';
import CustomButton from './../../components/common/CustomButton';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        label="Username"
        OnChangeText={text => onChangeText(text)}
        value={value}
        //error={'This field is required'}
      />

      <Input
        label="Password"
        OnChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
      <CustomButton
        title="Submit"
        loading={true}
        disable={true}
        secondary={true}
      />
      <CustomButton title="Click me" />
      <CustomButton title="Click me" primary={true} loading={true} />
      <CustomButton title="Click me" disable={true} />
      <CustomButton title="Click me" danger={true} />
    </Container>
  );
};

export default Login;
