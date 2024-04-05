import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import IconGoback from 'react-native-vector-icons/Ionicons';
import IconEdit from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {IconSetting} from '../../Assets/images';
import LottieView from 'lottie-react-native';

const DetailHome = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#06A3DB'}}>
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
        <TouchableOpacity>
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
            top: heightPercentageToDP('-10%'),
            right: widthPercentageToDP('30%'),
          }}>
          <FastImage
            style={{width: 150, height: 150, borderRadius: 100}}
            source={IconSetting}
            resizeMode={FastImage.resizeMode.contain}
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
              marginTop: heightPercentageToDP('12%'),
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 23, fontWeight: 'bold', color: '#000000'}}>
              Bagus Miftah Rizqullah
            </Text>
            <View style={{height: 12}} />
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}}>
              25 Years Old
            </Text>
          </View>
        </View>
      </View>
    </View>
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
