export enum SIZE_TYPE {
  large = "large",
  medium = "medium",
  small = "small",
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
