import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import AppModal from './../common/AppModal/index';
import CustomButton from './../common/CustomButton/index';
import Message from './../common/Message';
import styles from './styles';
import { CREATE_CONTACT } from './../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';

const ContactsComponent = ({ modalVisible, setModalVisible, data, loading }) => {
    const {navigate} = useNavigation();
    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message info message="No contancts to show" />
            </View>);
    };

    const renderItem = ({ item }) => {
        const {contact_picture, first_name, last_name, phone_number, country_code}= item;
        return (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.item}>
            {contact_picture ? (<Image style={{width: 45, height: 45, borderRadius:100}} source={{uri:contact_picture}}/>) 
            : (<View style={{width:45, height:45, backgroundColor:colors.primary, 
            flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:100}}>

                <Text style={[styles.names, {color:colors.white}]}>{first_name[0]}</Text>
                <Text style={[styles.names, {color:colors.white}]}>{last_name[0]}</Text>
                </View>)}

                <View style={{paddingLeft:20}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.names}>{first_name}</Text>
                        <Text style={styles.names}>{last_name}</Text>
                    </View>
                    <Text>{`${country_code} ${phone_number}`}</Text>
                </View>
            </View>
            <Icon name='right' type='ant' size={17}/>
        </TouchableOpacity>
        )
    };
    return (
        <>
        <View style={{backgroundColor:colors.white}}>
            <AppModal modalFooter={<></>} modalBody={<View></View>} title="My Profile" setModalVisible={setModalVisible} modalVisible={modalVisible} />
            {loading && (
                <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>

                    <ActivityIndicator size="large" color={colors.primary} />
                </View>)}
            {!loading && (
            <View style={{paddingVertical:20}}>
            <FlatList renderItem={renderItem} data={data} 
            ItemSeparatorComponent={()=> (<View style={{height:1, backgroundColor:colors.grey}}></View>)}
            keyExtractor={(item) => String(item.id)} ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height:150}}></View>} />
            </View>)}
        </View>
        <TouchableOpacity style={styles.floatingActionButton} onPress={()=>{navigate(CREATE_CONTACT);}}>
            <Icon name="plus" color={colors.white} size={17}/>
        </TouchableOpacity>
        </>
    );


};

export default ContactsComponent;