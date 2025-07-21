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

type Category = "ADMIN" | "UTILS" | "DEPENDENCIES" | "FUN"

export type Plugin = {

  id: number

  name: string;
  version: string;
  slogan: string;
  description: string;
  iconUrl: string;

  price: number;
  downloadLink: string;
  githubLink: string;
  downloads: number;

  created: Date;
  updated: Date;

  commands: string;
  permissions: string;

  categories: Array<Category>;
  changelog: Array<Update>;

}

export type Update = {

  title: string;
  version: string;
  description: string;
  updated: Date;

  downloadLink: string;

}
