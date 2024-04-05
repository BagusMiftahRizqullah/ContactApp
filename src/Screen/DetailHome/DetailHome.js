import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import IconGoback from 'react-native-vector-icons/Ionicons';
import IconEdit from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {IconSetting} from '../../Assets/images';
import LottieView from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../Component/Loading';
import ModalEditContact from '../../Component/ModalEditContact';
import {HOME_ACTION} from '../Home/Home.Action';
const DetailHome = props => {
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState(false);
  const homeReducer = useSelector(state => state.homeReducer);
  const isLoading = useSelector(state => state.GlobalReducer.Loading);

  console.log('homeReducerDETAIL', homeReducer.DataDetails);
  const getDetail = async () => {
    await dispatch({
      type: HOME_ACTION.GET_DATA_BYID,
      payload: {
        id: homeReducer.DataDetails.id,
      },
    });
  };

  const getAll = async () => {
    dispatch({
      type: HOME_ACTION.GET_DATA_HOME,
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{flex: 1, backgroundColor: '#06A3DB'}}>
          <ModalEditContact
            isVisible={modalEdit}
            setIsVisible={setModalEdit}
            data={homeReducer.DataDetails}
            getDetail={getDetail}
            getAll={getAll}
          />
          <LottieView
            source={require('../../Assets/images/plane.json')}
            autoPlay
            loop
            speed={1}
            style={{
              position: 'absolute',
              width: 440,
              height: 400,
              zIndex: -10,
              top: heightPercentageToDP('-3%'),
            }}
          />
          <View style={styles.containerHeader}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.containerButtonBack}>
              <IconGoback
                style={{marginRight: 8}}
                name="chevron-back"
                size={22}
                color="#ffffff"
              />
              <Text style={styles.textHome}>Home</Text>
            </TouchableOpacity>
            <Text style={styles.textSetting}>Details Contact</Text>
            <TouchableOpacity onPress={() => setModalEdit(true)}>
              <IconEdit
                style={{marginRight: 8}}
                name="edit"
                size={24}
                color="#ffffff"
              />
            </TouchableOpacity>
          </View>
          <View style={{height: 180}} />
          <View style={{flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                position: 'absolute',
                zIndex: 1000,
                top: heightPercentageToDP('-8%'),
                right: widthPercentageToDP('35%'),
              }}>
              <FastImage
                style={{width: 120, height: 120, borderRadius: 100}}
                source={{
                  uri: homeReducer.DataDetails.photo,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </View>
            <View
              style={{
                borderTopStartRadius: 40,
                borderTopEndRadius: 40,
                padding: 12,
                flex: 1,
                backgroundColor: '#ffffff',
              }}>
              <View
                style={{
                  marginTop: heightPercentageToDP('8%'),
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 23, fontWeight: 'bold', color: '#000000'}}>
                  {`${homeReducer.DataDetails.firstName} ${homeReducer.DataDetails.lastName}`}
                </Text>
                <View style={{height: 12}} />
                <Text style={{fontSize: 18, color: '#000000'}}>
                  {`${homeReducer.DataDetails.age} Years Old`}
                </Text>
              </View>

              <View style={{padding: 12}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000000',
                    marginTop: heightPercentageToDP('5%'),
                  }}>
                  Number
                </Text>
                <View style={{height: 12}} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000000',
                  }}>
                  +62 {Math.random()}
                </Text>

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000000',
                    marginTop: heightPercentageToDP('5%'),
                  }}>
                  Email
                </Text>
                <View style={{height: 12}} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000000',
                  }}>
                  admin@gmail.com
                </Text>
                <View style={{height: heightPercentageToDP('10%')}} />
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({
                        type: 'DELL_DATA',
                        payload: homeReducer.DataDetails.id,
                      });
                    }}
                    style={{
                      backgroundColor: '#E11428',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 18,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default DetailHome;

const styles = StyleSheet.create({
  containerHeader: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  containerButtonBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHome: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  textSetting: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
