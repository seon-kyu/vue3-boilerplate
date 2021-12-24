import { ModuleAState } from "@/store/modules";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  // interface State {
  //   moduleA: ModuleAState;
  // }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
