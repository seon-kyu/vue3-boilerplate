import { MutationTree } from "vuex";
import { RootState } from ".";

export type MutationTypes = "INCREMENT" | "DECREMENT";

export type Mutations<S = RootState> = {
  INCREMENT: (state: S, payload: number) => void;
  DECREMENT: (state: S, payload: number) => void;
};

export const mutations: MutationTree<RootState> & Mutations = {
  INCREMENT: (state, payload) => {
    state.count += payload;
  },
  DECREMENT: (state, payload) => {
    state.count -= payload;
  },
};
