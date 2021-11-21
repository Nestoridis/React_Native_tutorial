import React from 'react';
import LoginComponent from './../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from './../../context/Provider';

const Login = () => {
  const {
    authDispatch,
    authState: {error, loading},
  } = React.useContext(GlobalContext);

  const [form, setForm] = React.useState({});

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
