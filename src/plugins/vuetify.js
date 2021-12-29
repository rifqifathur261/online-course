import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#25b4f4",
        secondary: "#F8F7FC",
        accent: "#25b4f4",
        error: "#EA2620",
        info: "#2097F3",
        success: "#00D200",
        warning: "#FBC02D",
        avg: "#899CAA",
        max: "#527A98",
        darkblue: "#343954",
        item: "#101117",
        table: "#fff",
        invert: "#000",
        field: "#e4e4e4",
      },
      dark: {
        primary: "#1e2026",
        secondary: "#00000",
        accent: "#00C09A",
        error: "#EA2620",
        info: "#2097F3",
        success: "#00D200",
        warning: "#FBC02D",
        avg: "#899CAA",
        max: "#527A98",
        darkblue: "#343954",
        item: "#101117",
        table: "#101117",
        invert: "#fff",
        field: "#1e2026",
      },
    },
  },
});
