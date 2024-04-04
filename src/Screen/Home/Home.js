import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
  TextInput,
} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import {IconSetting} from '../../Assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {HOME_ACTION} from './Home.Action';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import * as _ from 'lodash';
import Loading from '../../Component/Loading';
import {actionLoading} from '../../Store/GlobalAction';
import ModalAddContact from '../../Component/ModalAddContact';
import ModalDellContact from '../../Component/ModalDellContact';

const Home = props => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDell, setIsVisibleDell] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const [idDell, setIdDell] = useState(null);
  const homeReducer = useSelector(state => state.homeReducer);
  const isLoading = useSelector(state => state.GlobalReducer.Loading);
  const myName = 'Bagus Miftah Rizqullah';

  const FunMatchAll = a => {
    let rgxName = new RegExp(/(\p{L}{1})\p{L}+/gu);
    let initials = [...a.matchAll(rgxName)] || [];

    let initialsName = (
      (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();

    return initialsName;
  };

  const FunMatchOne = a => {
    let rgxName = new RegExp(/(\p{L}{1})\p{L}+/gu);
    let initials = [...a.matchAll(rgxName)] || [];

    let initialsName = initials.shift()?.[1] || '';

    return initialsName;
  };

  const Abjad = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch({
      type: HOME_ACTION.GET_DATA_HOME,
    });
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });

  const SearchContact = async e => {
    console.log('eeeee', e);
    if (e.length > 0) {
      const res = homeReducer.DataContact?.filter((v, i) =>
        v.firstName?.toLowerCase().includes(e.toLowerCase()),
      );
      setDataSearch(res);
      console.log('dataRES SEARCHres', res);
    } else {
      setDataSearch([]);
    }
  };

  const dellData = async id => {
    await setIdDell(id);
    await setIsVisibleDell(!isVisibleDell);
    console.log('id', id);
  };

  console.log('DataSEARCHSS123', homeReducer.DataContact);
  return (
    <View style={styles.contaner}>
      <ModalDellContact
        isVisibleDell={isVisibleDell}
        setIsVisibleDell={setIsVisibleDell}
        id={idDell}
      />
      <ModalAddContact isVisible={isVisible} setIsVisible={setIsVisible} />
      {/* Header */}
      <View style={styles.containerHeader}>
        <View style={styles.containerIconSearch}>
          <Icon
            name="search"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
          <TextInput
            onChangeText={_.debounce(e => SearchContact(e), 1000)}
            style={styles.textSearch}
            placeholder="Search"
          />
        </View>
        <View style={styles.containerSetting}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SettingScreen')}>
            <FastImage
              style={{width: 20, height: 20}}
              source={IconSetting}
              tintColor={'#ffffff'}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={{
              flex: 1,
              paddingTop: heightPercentageToDP('2%'),
            }}>
            <View
              style={{
                flex: 1,
              }}>
              {/* Component one */}
              <View
                style={{
                  alignItems: 'center',
                  height: heightPercentageToDP('20%'),
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#e6e6e6',
                    borderRadius: 100,
                    padding: 12,
                  }}>
                  <Text
                    style={{
                      fontSize: 32,
                    }}>{`${FunMatchAll(myName)}`}</Text>
                </View>
                <Text>+62 89751253421265</Text>
                <Text>{myName}</Text>
              </View>
              <View style={{flex: 1}}>
                {Abjad.map((item, index) => {
                  return (
                    <View>
                      <View
                        key={index}
                        style={{
                          padding: 12,
                        }}>
                        <Text>{item}</Text>
                        {dataSearch.length > 0
                          ? dataSearch?.map((v, i) => {
                              return (
                                <View>
                                  {item == FunMatchOne(v.firstName) ? (
                                    <View
                                      style={{
                                        padding: 12,
                                        flex: 1,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                      }}>
                                      <TouchableOpacity
                                        onPress={() =>
                                          props.navigation.navigate(
                                            'DetailHome',
                                          )
                                        }
                                        style={{
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                        }}>
                                        <View
                                          style={{
                                            alignItems: 'center',
                                            backgroundColor: '#e6e6e6',
                                            borderRadius: 100,
                                            width: widthPercentageToDP('8%'),
                                            height: heightPercentageToDP('4%'),
                                            justifyContent: 'center',
                                          }}>
                                          <Text
                                            style={{
                                              fontSize: 12,
                                            }}>
                                            {`${FunMatchAll(
                                              `${v.firstName} ${v.lastName}`,
                                            )}`}
                                          </Text>
                                        </View>
                                        <View style={{width: 8}} />
                                        <Text>{`${v.firstName} ${v.lastName}`}</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                        onPress={() => dellData(v.id)}>
                                        <Text
                                          style={{
                                            color: '#4169E1',
                                          }}>
                                          Delete
                                        </Text>
                                      </TouchableOpacity>
                                    </View>
                                  ) : null}
                                </View>
                              );
                            })
                          : homeReducer.DataContact?.map((v, i) => {
                              return (
                                <View>
                                  {item == FunMatchOne(v.firstName) ? (
                                    <View
                                      style={{
                                        padding: 12,
                                        flex: 1,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                      }}>
                                      <TouchableOpacity
                                        onPress={() =>
                                          props.navigation.navigate(
                                            'DetailHome',
                                          )
                                        }
                                        style={{
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                        }}>
                                        <View
                                          style={{
                                            alignItems: 'center',
                                            backgroundColor: '#e6e6e6',
                                            borderRadius: 100,
                                            width: widthPercentageToDP('8%'),
                                            height: heightPercentageToDP('4%'),
                                            justifyContent: 'center',
                                          }}>
                                          <Text
                                            style={{
                                              fontSize: 12,
                                            }}>
                                            {`${FunMatchAll(
                                              `${v.firstName} ${v.lastName}`,
                                            )}`}
                                          </Text>
                                        </View>
                                        <View style={{width: 8}} />
                                        <Text>{`${v.firstName} ${v.lastName}`}</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                        onPress={() => dellData(v.id)}>
                                        <Text
                                          style={{
                                            color: '#4169E1',
                                          }}>
                                          Delete
                                        </Text>
                                      </TouchableOpacity>
                                    </View>
                                  ) : null}
                                </View>
                              );
                            })}
                      </View>
                      <View style={{height: 1, backgroundColor: '#e6e6e6'}} />
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </>
      )}

      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: widthPercentageToDP('15%'),
            height: heightPercentageToDP('8%'),
            backgroundColor: '#06A3DB',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            marginBottom: 24,
          }}>
          <Icon name="plus" size={32} color="#ffffff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    paddingVertical: 24,
    backgroundColor: '#06A3DB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSearch: {
    fontSize: 15,

    color: '#000000',
  },
  containerSetting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerOverCast: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTemperature: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTemparature: {
    fontSize: 76,
    color: '#000000',
  },
  textTempStatus: {
    fontSize: 13,
    color: '#000000',
  },
  textStatusDesc: {
    paddingTop: 32,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000000',
  },
  containerDataWind: {
    backgroundColor: '#e4e4e4',
    padding: 4,
    width: '100%',
    borderRadius: 8,
  },
  secondContainerWind: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
  },
  windData: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textWind: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  resWind: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  textUV: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerPvd: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  textPressure: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  textResPressure: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerVisibility: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textVisibility: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  textResVisibility: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerDewPoint: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textDewPoint: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  resDewPoint: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerIconSearch: {
    width: widthPercentageToDP('80%'),
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
