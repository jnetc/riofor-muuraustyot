export type LanguagesType = 'ru' | 'fi';

interface ArticleType<T> {
  title: T;
  description: T;
}
interface SEO<T> {
  globalSeo: {
    fallbackSeo: ArticleType<T>;
  };
}
export interface PriceTimeType<T> {
  label: T;
  price: T;
}
interface PosterType<T> {
  url: T;
}
interface HomeType<T> extends ArticleType<T> {
  phone: T;
  email: T;
}
interface ProjetsType<T> extends ArticleType<T> {
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
export interface ServiceType<T> extends ArticleType<T> {
  iconName: T;
}
export interface ServicesType<T> extends ArticleType<T> {
  service: Array<ServiceType<T>>;
}
export interface AboutType<T> extends ArticleType<T> {
  name: T;
  proff: T;
  aboutMe: T;
}

export interface DataType {
  _site: SEO<string>;
  home: HomeType<string>;
  projects: ProjetsType<string>;
  services: ServicesType<string>;
  about: AboutType<string>;
}
