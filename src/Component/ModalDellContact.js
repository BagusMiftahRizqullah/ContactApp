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
import {useDispatch, useSelector} from 'react-redux';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const ModalDellContact = ({isVisibleDell, setIsVisibleDell, id}) => {
  const dispatch = useDispatch();
  return (
    <Modal isVisible={isVisibleDell}>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 8,
          height: heightPercentageToDP(35),
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            padding: 24,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            Apkah anda yakin ingin menghapus data ini ?
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              dispatch({
                type: 'DELL_DATA',
                payload: id,
              });
              setIsVisibleDell(false);
            }}
            style={{
              backgroundColor: '#E11428',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 18,
              marginHorizontal: 8,
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
              marginVertical: 8,
              marginHorizontal: 8,
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
