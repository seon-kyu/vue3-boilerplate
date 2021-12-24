<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <h5>typed store</h5>
      count: {{ typedCount }}
      <button @click="() => countTypedHandler(1)">+</button>
      <button @click="() => countTypedHandler(-1)">-</button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useTypedStore } from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const typedStore = useTypedStore();

    const typedCount = computed(() => typedStore.state.count);

    function countTypedHandler(num: number) {
      typedStore.commit("INCREMENT", num);
      typedStore.commit("INCREMENT", num);
    }

    typedStore.commit("INCREMENT", 1);
    typedStore.dispatch("INIT");

    return {
      typedCount,
      countTypedHandler,
    };
  },
});
</script>
