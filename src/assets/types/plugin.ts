export type PrePlugin = {

  id: number

  name: string;
  version: string;
  slogan: string;
  iconUrl: string

  price: number;
  downloadLink: string;
  downloads: number;

  updated: Date;

  categories: Array<Category>;

}

export enum Category {
  ALL = "Todos",
  ADMIN = "Administração",
  UTILS = "Utilidades",
  FUN = "Diversão",
  MANAGEMENT = "Gestão",
  DEPENDENCY = "Dependencia"
}
export type Plugin = {

  id: number

  name: string;
  version: string;
  slogan: string;
  description: string;
  iconUrl: string;

  price: number;
  downloadLink: string;
  docLink: string;
  githubLink: string;
  downloads: number;

  created: Date;
  updated: Date;

  commands: string;
  permissions: string;

  categories: Array<Category>;
  changelog: Array<Update>;

}

export type CreatingPlugin = {
  name: string | undefined;
  version: string | undefined;
  slogan: string | undefined;
  description: string | undefined;
  iconFile: File | undefined;
  price: number | undefined;
  downloadFile: File | undefined;
  githubLink: string | undefined;
  docLink: string | undefined;
  commands: string | undefined;
  permissions: string | undefined;
  categories: Array<Category>;
}

export type Update = {

  title: string;
  version: string;
  description: string;
  updated: Date;

  downloadLink: string;

}
