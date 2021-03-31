import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {SCREEN_NAME} from '../navigations';

export const CountryList: NavigationFunctionComponent = props => {
  const handleGoToDetail = () => {
    Navigation.push(props.componentId, {
      component: {
        name: SCREEN_NAME.COUNTRY_DETAIL,
      },
    });
  };
  return (
    <SafeAreaView>
      <Text>Country List</Text>
      <Button title="Go to detail" onPress={handleGoToDetail} />
    </SafeAreaView>
  );
};

CountryList.options = {
  topBar: {
    title: {
      text: 'Countries',
    },
  },
};
