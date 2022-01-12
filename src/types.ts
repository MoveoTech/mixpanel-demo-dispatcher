export enum SIZE_TYPE {
  large = "large",
  medium = "medium",
  small = "small",
}

export enum VARIANT {
  primary = "primary",
  secondery = "secondary",
}
export interface DataChart {
  name: string;
  value: string | number;
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
}
