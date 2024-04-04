import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/Feather';
import IconX from 'react-native-vector-icons/AntDesign';
import IconLocation from 'react-native-vector-icons/Octicons';
import IconStar from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {SEARCH_ACTION} from './Search.Action';
import {HOME_ACTION} from '../Home/Home.Action';
import * as _ from 'lodash';

const Search = props => {
  const dispatch = useDispatch();

  const SearchMyLocation = async a => {
    dispatch({
      type: HOME_ACTION.GET_DATA_HOME,
      payload: {country: a},
    });
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      try {
        const granted = await Geolocation.requestAuthorization('whenInUse');
        if (granted === 'granted') {
          console.log('IOS GRANTED LOCATION');

          return true;
        } else {
          console.log('IOS NOT GRANTED LOCATION');

          return false;
        }
      } catch (err) {
        console.log('Permission error', err);
        return false;
      }
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Geolocation Permission',
            message:
              'Weather App requires your location permission to be able to deliver your orders and show you restaurants around you',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === 'granted') {
          console.log('ANDROID GRANTED LOCATION');

          return true;
        } else {
          console.log('ANDROID NOT GRANTED LOCATION');

          return false;
        }
      } catch (err) {
        console.log('Permission error', err);
        return false;
      }
    }
  };

  const getLocation = async () => {
    const result = requestLocationPermission();

    await result
      .then(res => {
        if (res) {
          Geolocation.getCurrentPosition(
            position => {
              dispatch({
                type: SEARCH_ACTION.SET_MY_LOCATION,
                payload: {
                  lat: position?.coords.latitude,
                  lng: position?.coords.longitude,
                },
              });
              dispatch({
                type: SEARCH_ACTION.GET_MY_LOCATION,
                payload: {
                  lat: position?.coords.latitude,
                  lng: position?.coords.longitude,
                },
              });
            },
            error => {
              console.log('locationManager Error: ', error);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      })
      .catch(Err => console.log('Error', Err));
  };

  return (
    <View style={styles.conatainer}>
      <View style={styles.containerHead}>
        <View style={styles.containerIcon}>
          <Icon
            name="search"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
          <TextInput
            onChangeText={_.debounce(e => SearchMyLocation(e), 1000)}
            style={styles.textSearch}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IconX
            name="close"
            size={26}
            color="#000000"
            style={{marginLeft: 8}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.buttonGetLocation}
        onPress={() => getLocation()}>
        <IconLocation
          name="location"
          size={22}
          color="#000000"
          style={{marginRight: 8}}
        />
        <Text>Find my location</Text>
      </TouchableOpacity>

      {/* Result Search */}
      <ScrollView>
        <TouchableOpacity style={styles.containerResultSearch}>
          <IconLocation
            name="location"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
          <Text>Jakarta Indonesia</Text>
          <TouchableOpacity>
            <IconStar
              name="star"
              size={22}
              color="#000000"
              style={{marginRight: 8}}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  conatainer: {
    padding: 8,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerIcon: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSearch: {
    color: '#000000',
    width: '80%',
    height: 34,
  },
  buttonGetLocation: {
    paddingTop: 23,
    padding: 8,

    flexDirection: 'row',
    alignItems: 'center',
  },
  containerResultSearch: {
    paddingTop: 23,
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
