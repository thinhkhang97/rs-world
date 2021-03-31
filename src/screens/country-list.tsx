import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {SCREEN_NAME} from '../navigations';
import {ICountry} from 'types';
import {CountryItem} from '../components/country-item';
import {COLOR} from '../assets/themes';

const tempData: ICountry[] = [
  {
    imageUrl:
      'https://i.pinimg.com/originals/95/1a/53/951a535c499f0b7c5511bf4bead09d2a.gif',
    name: 'Vietnam',
    captital: 'Hanoi',
  },
];

export const CountryList: NavigationFunctionComponent = props => {
  const handleGoToDetail = () => {
    Navigation.push(props.componentId, {
      component: {
        name: SCREEN_NAME.COUNTRY_DETAIL,
      },
    });
  };

  const renderItem = ({item}: {item: ICountry}) => <CountryItem data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.list} data={tempData} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    backgroundColor: COLOR.CYAN,
  },
});
