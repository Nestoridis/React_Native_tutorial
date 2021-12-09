import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../components/common/Container/index';
import styles from '../SideMenu/styles';
import {SETTINGS} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import Icon from './../../components/common/Icon/index';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" size={21} name="player-settings" />,
      name: 'Setings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="material" size={21} name="logout" />,
      name: 'LogOut',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={50}
          width={50}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <Text style={styles.itemText}>{icon}</Text>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
