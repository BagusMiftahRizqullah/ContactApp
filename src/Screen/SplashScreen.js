import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import IconApp from '../Assets/images/IconApp.png';
import {useDispatch, useSelector} from 'react-redux';
import {HOME_ACTION} from './Home/Home.Action';
import AnimatedLoader from 'react-native-animated-loader';
import LottieView from 'lottie-react-native';

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
    }, 3000);
  }, []);

  const fetchContact = () => {
    dispatch({
      type: HOME_ACTION.GET_DATA_HOME,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <LottieView
          source={require('../Assets/images/Cats.json')}
          autoPlay
          loop
          speed={1}
          style={{
            width: 500,
            height: 500,
          }}
        />
        <Text style={styles.text}>Contact Apps</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },

  text: {
    color: '#06A3DB',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    top: heightPercentageToDP('70%'),
  },
});
