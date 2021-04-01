import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ICountry} from '../types/country';
import {CountryItem} from '../components/country-item';
import {COLOR} from '../assets/themes';
import {useSelector, useDispatch} from 'react-redux';
import {selectCountries} from '../selectors/country';
import {getCountryAction} from '../actions/country';

export const CountryList: NavigationFunctionComponent = () => {
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryAction(10, 0));
  }, []);

  const renderItem = ({item}: {item: ICountry}) => <CountryItem data={item} />;

  const keyExtract = (item: ICountry) => `countries_id_${item.id}`;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={countries}
        renderItem={renderItem}
        keyExtractor={keyExtract}
        extraData={countries}
      />
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
