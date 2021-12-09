import React from 'react';
import LoginComponent from './../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from './../../context/Provider';
import {useRoute} from '@react-navigation/native';

const Login = () => {
  const {
    authDispatch,
    authState: {error, loading},
  } = React.useContext(GlobalContext);

  const [form, setForm] = React.useState({});
  const [justSingedUp, setjustSingedUp] = React.useState(false);
  const {params} = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      setjustSingedUp(true);
      console.log('params', params);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };
  const onChange = ({name, value}) => {
    setjustSingedUp(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSingedUp={justSingedUp}
    />
  );
};

export default Login;
