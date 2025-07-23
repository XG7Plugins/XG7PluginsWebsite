import {PrePlugin} from './plugin';

export type PurchasedPlugin = {
  plugin: PrePlugin

  keys: Array<Key>
}

export type Key = {

  id: number

  ip: string
  port: number


}

export type Purshases = {
  id: number

  date: Date
  price: number

  items: Array<{name: string, price: number}>

}
