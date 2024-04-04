import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import IconApp from '../Assets/images/IconApp.png';
import {useDispatch, useSelector} from 'react-redux';
import {HOME_ACTION} from './Home/Home.Action';
import AnimatedLoader from 'react-native-animated-loader';

const SplashScreen = props => {
  const dispatch = useDispatch();
  const homeReducer = useSelector(state => state.homeReducer);

  useEffect(() => {
    fetchContact();
    // setTimeout(() => {
    //   props.navigation.navigate('HomeScreen');
    //   if (homeReducer.DataWeather) {
    //   } else {
    //     fetchContact();
    //   }
    // }, 800);
  }, []);

  const fetchContact = () => {
    dispatch({
      type: HOME_ACTION.GET_DATA_HOME,
    });
  };

  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require('../Assets/images/AnimationSplash.json')}
      animationStyle={styles.lottie}
      speed={1}
      loop={true}>
      <Text>Contact Apps</Text>
    </AnimatedLoader>
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
  lottie: {
    width: 100,
    height: 100,
  },
});
