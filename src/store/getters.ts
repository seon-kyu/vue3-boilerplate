import { GetterTree } from "vuex";
import { RootState } from ".";

export type Getters = {
  DOUBLE: (state: RootState) => number;
};

export const getters: GetterTree<RootState, RootState> & Getters = {
  DOUBLE: (state: RootState) => {
    return state.count * 2;
  },
};
