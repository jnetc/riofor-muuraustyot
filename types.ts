export type LanguagesType = 'ru' | 'fi';

interface TitleAndDescType<T> {
  title: T;
  description: T;
}
interface SEO<T> {
  globalSeo: {
    fallbackSeo: TitleAndDescType<T>;
  };
}
export interface PriceTimeType<T> {
  label: T;
  price: T;
}
interface AvatarType<T> {
  url: T;
}
interface HomeType<T> extends TitleAndDescType<T> {
  mainButtonName: T;
  mainTelephoneNum: T;
}
interface PriceType<T> extends TitleAndDescType<T> {
  priceLand: T;
  priceLandDesc: T;
  switcherName: T;
  priceTrip: T;
  priceTripDesc: T;
  priceByKm: Array<PriceTimeType<T>>;
  priceByTime: Array<PriceTimeType<T>>;
  holidays: Array<PriceTimeType<T>>;
  weekend: Array<PriceTimeType<T>>;
  workdays: Array<PriceTimeType<T>>;
}
export interface ServiceType<T> extends TitleAndDescType<T> {
  iconName: T;
}
export interface ServicesType<T> extends TitleAndDescType<T> {
  service: Array<ServiceType<T>>;
}
export interface AboutType<T> extends TitleAndDescType<T> {
  name: T;
  proff: T;
  aboutMe: T;
  avatar: AvatarType<T>;
}

export interface DataType {
  _site: SEO<string>;
  home: HomeType<string>;
  price: PriceType<string>;
  service: ServicesType<string>;
  about: AboutType<string>;
}
