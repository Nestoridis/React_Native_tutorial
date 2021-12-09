import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from './../../components/common/Container';
import {useNavigation} from '@react-navigation/native';
import Icon from './../../components/common/Icon/index';
import ContactsComponent from './../../components/ContactsComponent/index';
import {GlobalContext} from './../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {contactsDispatch, contactsState: {getContacts : {data, loading}}}=useContext(GlobalContext)

  React.useEffect(()=>{
  getContacts()(contactsDispatch);
  },[]);
  
  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" style={{padding: 10}} size={25} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible}
    data={data} loading={loading}/>
  );
};

export default Contacts;
