import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import IconApp from '../Assets/images/IconApp.png';
import {useDispatch, useSelector} from 'react-redux';
import {HOME_ACTION} from './Home/Home.Action';

const SplashScreen = props => {
  const dispatch = useDispatch();
  const homeReducer = useSelector(state => state.homeReducer);

  useEffect(() => {
    fetchContact();
    setTimeout(() => {
      props.navigation.navigate('HomeScreen');
      if (homeReducer.DataWeather) {
      } else {
        fetchContact();
      }
    }, 800);
  }, []);

  const fetchContact = () => {
    dispatch({
      type: HOME_ACTION.GET_DATA_HOME,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <FastImage
          style={styles.icon}
          source={IconApp}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={{paddingTop: heightPercentageToDP(24)}}>
        <Text style={{color: '#06A3DB'}}>Contact Apps</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  containerIcon: {paddingTop: heightPercentageToDP(24)},
  icon: {
    alignSelf: 'center',
    width: 120,
    height: 120,
  },
  text: {color: '#000000'},
});
