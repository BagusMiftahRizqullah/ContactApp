import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import IconGoback from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const ModalDellContact = ({isVisibleDell, setIsVisibleDell}) => {
  return (
    <Modal isVisible={isVisibleDell}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          borderRadius: 8,
        }}>
        <Text>Apkah anda yakin ingin menghapus data ini ?</Text>
        <TouchableOpacity
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
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsVisibleDell(false)}
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
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalDellContact;

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
