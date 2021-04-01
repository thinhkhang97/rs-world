export const GRAPHQL_URI = 'https://api.production.everbase.co/graphql';

export const getCountryFlagUrl = (code: string): string => {
  return `https://www.countryflags.io/${code}/flat/64.png`;
};
