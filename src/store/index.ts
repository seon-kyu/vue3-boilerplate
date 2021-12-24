import { CommitOptions, createStore, DispatchOptions, Store, useStore } from "vuex";
import { mutations, Mutations } from "./mutations";
import { actions, Actions } from "./actions";
import { getters, Getters } from "./getters";
import { InjectionKey } from "vue";

export interface RootState {
  count: number;
}

export function state(): RootState {
  const defaultState: RootState = {
    count: 0,
  };

  return defaultState;
}
type TypedStore = Omit<Store<RootState>, "commit" | "dispatch" | "getters"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const injectionKey: InjectionKey<TypedStore> = Symbol("vuex");

export function useTypedStore(): TypedStore {
  return useStore(injectionKey);
}

export function createTypedStore(): TypedStore {
  const store = createStore<RootState>({
    strict: true,
    state,
    mutations,
    actions,
    getters,
  }) as TypedStore;

  return store;
}

// https://www.stephenli.ca/vuex-4-typescript-declarations-generator
