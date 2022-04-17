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
interface PosterType<T> {
  url: T;
}
interface HomeType<T> extends ArticleType<T> {
  phone: T;
  email: T;
  address: T;
}
export interface ProjectType<T> extends ArticleType<T> {
  area: T;
  address: T;
  cloudLink: T;
  completed: boolean;
  contractor: T;
  googleMap: T;
  id: T;
  jobType: T;
  projectDescription: T;
  projectName: T;
  projectNumber: T;
  releaseDate: T;
  projectImage: PosterType<T>;
}
interface ProjectsType<T> {
  projects: Array<ProjectType<T>>;
}

export type ServiceIconsType = 'building' | 'house' | 'office';

export interface ServicesType<T> {
  id: T;
  cardTitle: T;
  cardDescription: T;
  icon: ServiceIconsType;
}
export interface ServiceType<T> extends ArticleType<T> {
  serviceCard: Array<ServicesType<T>>;
}
export interface AboutType<T> extends ArticleType<T> {}

export interface DataType {
  _site: SEO<string>;
  home: HomeType<string>;
  project: ProjectsType<string>;
  service: ServiceType<string>;
  about: AboutType<string>;
}
