import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from './../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setisAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setauthLoaded] = React.useState(false);

  const getUser = async () => {
    setauthLoaded(true);
    try {
      const user = await AsyncStorage.getItem('@user');
      console.log('user', user);

      if (user) {
        setauthLoaded(true);
        setisAuthenticated(true);
      } else {
        setauthLoaded(true);
        setisAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  console.log('state :>>', isAuthenticated);
  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
