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

const ModalAddContact = ({isVisible, setIsVisible}) => {
  return (
    <View>
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
                />
              </View>
              <View style={{height: heightPercentageToDP('3%')}} />
              <View>
                <Text style={styles.textLabel}>Photo</Text>
                <TouchableOpacity
                  style={{
                    marginTop: 8,
                    paddingVertical: 8,
                    borderWidth: 1,
                    borderRadius: 8,
                    height: heightPercentageToDP('25%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#000000',
                      fontWeight: 'bold',
                    }}>
                    Upload Your Photo
                  </Text>
                </TouchableOpacity>
                <View style={{height: heightPercentageToDP('3%')}} />
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
