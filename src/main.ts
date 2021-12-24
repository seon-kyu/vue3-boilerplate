import { injectionKey } from "./store";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createTypedStore } from "./store";
createApp(App).use(createTypedStore(), injectionKey).use(router).mount("#app");
