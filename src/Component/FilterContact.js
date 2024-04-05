import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import IconGoback from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

const FilterContact = ({fillter, setIsVisibleFill, setDataFill}) => {
  const fillterData = [
    {
      start: 'A',
      end: 'T',
    },
    {
      start: 'T',
      end: 'Z',
    },
    {
      start: 'A',
      end: 'Z',
    },
  ];

  return (
    <Modal animationIn="zoomIn" isVisible={fillter}>
      <View
        style={{
          height: heightPercentageToDP(34),
          backgroundColor: '#ffffff',
          borderRadius: 8,
          padding: 12,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => setIsVisibleFill(false)}
            style={styles.containerButtonBack}>
            <IconGoback name="close" size={32} color="#000000" />
          </TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}}>
            Select Your Fillter
          </Text>
          <View
            style={{
              width: widthPercentageToDP('3%'),
            }}
          />
        </View>
        <View
          style={{
            height: widthPercentageToDP('5%'),
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: heightPercentageToDP(23),
          }}>
          {fillterData?.map((v, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setDataFill(v), setIsVisibleFill(false);
                }}
                style={{
                  padding: 8,
                  borderColor: '#000000',
                  borderWidth: 4,
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}}>
                  {`${v.start} - ${v.end}`}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            height: widthPercentageToDP('3%'),
          }}
        />
      </View>
    </Modal>
  );
};

export default FilterContact;

const styles = StyleSheet.create({});
