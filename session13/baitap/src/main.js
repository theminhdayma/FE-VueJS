
import "../src/style.css"

import { createApp } from "vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; 

import App from "./App.vue";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi", 
  },
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");