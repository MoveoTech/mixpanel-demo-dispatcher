export enum SIZE_TYPE {
  large = "large",
  medium = "medium",
  small = "small",
}
export type dateType = null | Date;

export enum FILTERS {
  endpoint = "endpoint",
  country = "country",
  category = "category",
  sourceTopheadlines = "sourceTopheadlines",
  sourceEverything = "sourceEverything",
  language = "language",
  sortBy = 'sortBy',
  dates = 'Dates'
}
export enum ENDPOINTS {
  topheadlines = "top-headlines",
  everything = "everything",
}
export enum VARIANT {
  primary = "primary",
  secondery = "secondery",
}
export interface DataChart {
  name: string;
  value: number;
}
export interface ErrorType {
  number: Number;
  message: string;
}
export interface Source {
  id: string;
  name: string;
}
export interface Article {
  urlToImage: string;
  title: string;
  source: Source;
  description: string;
  publishedAt: string;
  url: string;
  tags?: string[];
}
export interface Option {
  name: string;
  value: string;
}
