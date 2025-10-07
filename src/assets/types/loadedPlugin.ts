import {LangService} from '../../app/services/lang/lang.service';

export enum Category {
  ALL = "CATEGORY_ALL",
  ADMIN = "CATEGORY_ADMIN",
  UTILS = "CATEGORY_UTILS",
  FUN = "CATEGORY_FUN",
  MANAGEMENT = "CATEGORY_MANAGEMENT",
  DEPENDENCY = "CATEGORY_DEPENDENCY"
}

export function formatCategories(categories: Category[], langService: LangService): string {

  console.log(categories)

  let sb = ""

  let needSlice = false

  categories.forEach(cat => {

    let cate = cat.toString();

    if (!cate.startsWith("CATEGORY_")) {
      needSlice = true;
      cate = "CATEGORY_" + cate;
    }

    sb += langService.getTranslation(cate)

    if (needSlice) sb += ", "
  })

  if (needSlice) sb = sb.slice(0, -2)

  return sb;
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
