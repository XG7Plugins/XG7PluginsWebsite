export enum Category {
  ALL = "Todos",
  ADMIN = "Administração",
  UTILS = "Utilidades",
  FUN = "Diversão",
  MANAGEMENT = "Gestão",
  DEPENDENCY = "Dependencia"
}

export function formatCategories(categories: Category[]): string {
  // @ts-ignore
  return categories.map(cat => Category[cat]).join(', ');
}

export type LoadedPlugin = {

  id: number

  name: string;
  version: string;
  slogan: string;
  description: string;
  icon64: string;

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

export type Update = {

  id: number;

  title: string;
  version: string;
  description: string;
  updated: Date;
}
