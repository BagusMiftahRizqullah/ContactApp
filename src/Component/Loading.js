import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
      }}>
      <ActivityIndicator size="large" color="#06A3DB" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
