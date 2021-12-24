import { ActionContext, ActionTree } from "vuex";
import { RootState } from ".";
import { Getters } from "./getters";
import { Mutations } from "./mutations";

export type ActionTypes = "INIT";

type TypedActionContext = Omit<
  ActionContext<RootState, RootState>,
  "commit" | "dispatch" | "getters" | "rootState" | "rootGetters"
> & {
  commit<K extends keyof Mutations>(key: K, payload?: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;

  dispatch<K extends keyof Actions>(key: K, payload?: Parameters<Actions[K]>[1]): ReturnType<Actions[K]>;

  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export type Actions = {
  INIT: (context: TypedActionContext) => Promise<void>;
};

export const actions: ActionTree<RootState, RootState> & Actions = {
  INIT: async ({ commit }) => {
    commit("INCREMENT", 42);
  },
};
