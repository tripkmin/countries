import { cca3Mappings } from 'assets/cca3Mappings';
import { Currencies, Languages, Name, Translations } from 'types/type';

export const formatter = (num: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(item => {
      return num >= item.value;
    });
  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
};

export const getSymbols = (currencies: Currencies | undefined) => {
  if (!currencies) return;

  const keys = Object.keys(currencies);
  const symbols = keys.map(key => currencies[key]?.symbol);
  // test 용도
  const names = keys.map(key => currencies[key]?.name);
  // return symbols;
  return names;
};

export const getLanguages = (lang: Languages | undefined) => {
  if (!lang) return;

  const keys = Object.keys(lang);
  const languages = keys.map(key => lang[key]);

  if (languages.length >= 2) {
    return languages.join(', ');
  } else {
    return languages;
  }
};

export const getTranslations = (translations: Translations | undefined) => {
  if (!translations) return;

  const keys = Object.keys(translations);
  const names = keys.map(key => translations[key]?.official);

  return names;
};

export const mapCca3ToName = (cca3: string) => {
  const findData = cca3Mappings.find(data => data.cca3 === cca3);
  return findData?.official;
};
