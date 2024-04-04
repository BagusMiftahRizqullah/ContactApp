import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import IconGoback from 'react-native-vector-icons/Ionicons';
import IconGoRight from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Setting = props => {
  return (
    <View>
      {/* Header */}
      <View style={styles.containerHeader}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.containerButtonBack}>
          <IconGoback
            style={{marginRight: 8}}
            name="chevron-back"
            size={22}
            color="#000000"
          />
          <Text style={styles.textHome}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.textSetting}>Settings</Text>
        <View style={{width: widthPercentageToDP('20%'), height: 24}} />
      </View>
      <View
        style={{
          width: widthPercentageToDP('100%'),
          height: 2,
          backgroundColor: '#D9D9D9',
          opacity: 0.5,
        }}
      />

      <View style={styles.containerTextData}>
        <Text style={styles.textHeadData}>Contact Data</Text>
        <Text style={styles.textHeadData}>Crud API</Text>
      </View>
      <View style={styles.containerAllTextData}>
        <Text style={styles.textAllData}>
          All the data for OpenWeather App is provided by On Call Api.
          OpenWeather aggregates and processes meteorological data from tens of
          thousands of weather stations, on-ground radars and satelitesto bring
          you accurate and actionable weather data for any location worldwide.
        </Text>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  containerHeader: {
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
    color: '#000000',
  },
  textSetting: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerDifWeather: {
    paddingTop: 23,
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDifWeather: {
    color: '#000000',
    fontWeight: 'bold',
  },
  containerList: {
    width: widthPercentageToDP('100%'),
    height: 2,
    backgroundColor: '#D9D9D9',
  },
  componentList: {
    paddingTop: 23,
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCusUnit: {
    color: '#000000',
    fontWeight: 'bold',
  },
  containerTextData: {
    paddingTop: 23,
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textHeadData: {color: '#000000'},
  containerAllTextData: {
    padding: 8,
  },
  textAllData: {
    color: '#000000',
    textAlign: 'justify',
  },
});
