import {Navigation} from 'react-native-navigation';
import {SCREEN_NAME} from './src/navigations';
import {CountryList, LanguageCountry, CountryDetail} from './src/screens';

Navigation.registerComponent(SCREEN_NAME.MAIN, () => CountryList);
Navigation.registerComponent(SCREEN_NAME.COUNTRY_DETAIL, () => CountryDetail);
Navigation.registerComponent(
  SCREEN_NAME.LANGUAGE_COUNTRY,
  () => LanguageCountry,
);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREEN_NAME.MAIN,
              options: {
                topBar: {
                  title: {
                    text: 'Countries',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
