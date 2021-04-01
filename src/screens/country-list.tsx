import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ICountry} from '../types/country';
import {CountryItem} from '../components/country-item';
import {COLOR} from '../assets/themes';
import {useSelector, useDispatch} from 'react-redux';
import {selectCountries, selectSkipCountry} from '../selectors/country';
import {getCountryAction} from '../actions/country';

const NUMBER_COUNTRY_LOADING = 10;

export const CountryList: NavigationFunctionComponent = () => {
  const countries = useSelector(selectCountries);
  const skip = useSelector(selectSkipCountry);
  const dispatch = useDispatch();
  let reachEnd = false;

  useEffect(() => {
    dispatch(getCountryAction(NUMBER_COUNTRY_LOADING, skip));
  }, []);

  const handleReachEnd = () => {
    reachEnd = true;
  };

  const handleMomentumEnd = () => {
    if (reachEnd) {
      dispatch(getCountryAction(NUMBER_COUNTRY_LOADING, skip));
      reachEnd = false;
    }
  };

  const renderItem = useCallback(
    ({item}: {item: ICountry}) => <CountryItem data={item} />,
    [],
  );

  const keyExtract = (item: ICountry) => `countries_id_${item.id}`;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={countries}
        renderItem={renderItem}
        keyExtractor={keyExtract}
        extraData={countries}
        onEndReached={handleReachEnd}
        onEndReachedThreshold={0.5}
        onMomentumScrollEnd={handleMomentumEnd}
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
