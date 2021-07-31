/**
 * Geract
 * This is a store using mobx
 */

import {makeAutoObservable} from 'mobx';

export interface <%= name %>StoreInterface {
  // describe your store interface here

  // states
  exampleState: string;

  // mutations
  helloState: string;

  // actions
  setExample: Function;
};

const baseStore = makeAutoObservable<<%= name %>StoreInterface>({
  // states
  exampleState: '',

  // mutations
  get helloState() {
    return this.exampleState + ' Hello!';
  },

  // actions
  setExample(newExample) {
    this.exampleState = newExample;
  },
});

export default baseStore;
