import { searchPhotos } from "@/services/PhotoService";
import partials from "../partials";

export const namespaced = true;

export const state = {
  photos: [],
  perPage: 0,
  searchValue: "",
  loadState: partials.LOAD_STATE.LOADING,
};

export const mutations = {
  SET_PHOTOS(state, photos) {
    state.photos = photos;
  },
  SET_PER_PAGE(state, per_page) {
    state.perPage = per_page;
  },
  SET_SEARCH_VALUE(state, value) {
    state.searchValue = value;
  },
  SET_LOAD_STATE(state, value) {
    state.loadState = value;
  },
};

export const actions = {
  fetch({ commit }, { per_page, value }) {
    searchPhotos(per_page, value)
      .then((response) => {
        commit("SET_PHOTOS", response.data.results);
        commit("SET_PER_PAGE", per_page);
        commit("SET_SEARCH_VALUE", value);
        commit("SET_LOAD_STATE", partials.LOAD_STATE.SUCCESS);
      })
      .catch((error) => {
        commit("SET_LOAD_STATE", partials.LOAD_STATE.ERROR);
        console.log("Error: " + error.response.data.errors[0]);
      });
  }
};
