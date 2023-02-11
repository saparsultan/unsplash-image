import Vuex from "vuex";
import * as photo from "./modules/photo";
import * as searchPhoto from "./modules/searchPhoto";

export default new Vuex.Store({
  modules: {
    photo,
    searchPhoto,
  },
});
