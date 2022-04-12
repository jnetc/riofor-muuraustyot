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
  project: ProjectsType<string>;
  service: ServicesType<string>;
  about: AboutType<string>;
}
