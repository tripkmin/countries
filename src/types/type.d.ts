import { ReactNode } from 'react';

// Nation Type 관련 시작
export interface NationT {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string | string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  cioc?: string;
  borders?: string[];
  fifa?: string;
  gini?: { [key: string]: number | undefined };
}

export interface Translations {
  [key: string]: Translation | undefined;
}

export interface Languages {
  [key: string]: string | undefined;
}

export interface Currencies {
  [key: string]: Aed | undefined;
}

export interface Aed {
  name: string;
  symbol?: string;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation | undefined };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

// Nation Type 관련 끝

export interface LayoutProps {
  children?: ReactNode;
}
