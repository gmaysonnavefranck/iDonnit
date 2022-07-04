import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#602234",
        secondary: "#d2ba83",
        accent: "#862f48",
        error: "#b71c1c",
        background: "#f0ece2"
      }
    }
  }
});
export default vuetify;
