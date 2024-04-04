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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

const ModalAddContact = ({isVisible, setIsVisible}) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);

  const addContact = () => {
    dispatch({
      type: 'ADD_DATA',
      payload: {
        firstName: firstName,
        lastName: lastName,
        age: age,
        photo: photo,
      },
    });
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleCameraClick();
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleGalleryClick();
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
        setMenu(!menu);
      }
    } catch (err) {
      console.warn(err);
      setMenu(!menu);
    }
  };
  const handleCameraClick = async () => {
    const options = {
      title: 'Select Your Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0]?.uri};
        console.log('Image selected: ', source?.uri);
        setPhoto(source?.uri);
        setMenu(!menu);
      }
    });
  };

  const handleGalleryClick = async () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0]?.uri};
        console.log('Image selected: ', source?.uri);
        setPhoto(source?.uri);
        setMenu(!menu);
      }
    });
  };

  const ModalSelection = () => {
    return (
      <Modal animationIn="zoomIn" isVisible={menu}>
        <View
          style={{
            height: heightPercentageToDP(30),
            backgroundColor: '#ffffff',
            borderRadius: 8,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 8,
            }}>
            <TouchableOpacity
              onPress={() => setMenu(false)}
              style={styles.containerButtonBack}>
              <IconGoback name="close" size={32} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.textSetting}>Select your options</Text>
            <View style={{width: widthPercentageToDP('2%')}} />
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => requestCameraPermission()}
              style={{
                backgroundColor: '#06A3DB',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 18,
                borderRadius: 10,
                width: widthPercentageToDP('30%'),
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => requestStoragePermission()}
              style={{
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 18,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#06A3DB',
                width: widthPercentageToDP('30%'),
              }}>
              <Text
                style={{
                  color: '#06A3DB',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View>
      <ModalSelection />
      <Modal isVisible={isVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            borderRadius: 8,
            padding: 24,
          }}>
          <View style={styles.containerHeader}>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={styles.containerButtonBack}>
              <IconGoback name="close" size={32} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.textSetting}>Add New Contact</Text>
            <View style={{width: widthPercentageToDP('3%')}} />
          </View>
          <View style={{flex: 1, marginTop: 32}}>
            <ScrollView style={{flex: 1}}>
              <View style={{flex: 1}}>
                <Text style={styles.textLabel}>First Name</Text>
                <TextInput
                  style={{
                    marginTop: 8,
                    paddingVertical: 8,
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                  placeholder="FirstName"
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                />
              </View>
              <View style={{height: heightPercentageToDP('3%')}} />
              <View>
                <Text style={styles.textLabel}>Last Name</Text>
                <TextInput
                  style={{
                    marginTop: 8,
                    paddingVertical: 8,
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                  placeholder="Last Name"
                />
              </View>
              <View style={{height: heightPercentageToDP('3%')}} />
              <View>
                <Text style={styles.textLabel}>Age</Text>
                <TextInput
                  style={{
                    marginTop: 8,
                    paddingVertical: 8,
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                  placeholder="Age"
                  value={age}
                  onChangeText={text => setAge(text)}
                />
              </View>
              <View style={{height: heightPercentageToDP('3%')}} />
              <View>
                <Text style={styles.textLabel}>Photo</Text>
                <TouchableOpacity
                  onPress={() => setMenu(!menu)}
                  style={{
                    marginTop: 8,
                    paddingVertical: 8,
                    borderWidth: 1,
                    borderRadius: 8,
                    height: heightPercentageToDP('25%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {photo == null ? (
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#000000',
                        fontWeight: 'bold',
                      }}>
                      Upload Your Photo
                    </Text>
                  ) : (
                    <FastImage
                      style={{width: 150, height: 150}}
                      source={{uri: photo}}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  )}
                </TouchableOpacity>
                <View style={{height: heightPercentageToDP('3%')}} />
                <TouchableOpacity
                  onPress={() => addContact()}
                  style={{
                    backgroundColor: '#06A3DB',
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
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalAddContact;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  textSetting: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  textLabel: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
});
