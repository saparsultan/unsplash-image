import { getPhotos } from "@/services/PhotoService";
import partials from "../partials";

export const namespaced = true;

export const state = {
  photos: [],
  count: 9,
  loadState: partials.LOAD_STATE.LOADING,
};

export const mutations = {
  SET_PHOTOS(state, photos) {
    state.photos = photos;
  },
  SET_COUNT(state, count) {
    state.count = count;
  },
  SET_LOAD_STATE(state, value) {
    state.loadState = value;
  },
};

export const actions = {
  fetch({ commit }, count) {
    getPhotos(count)
      .then((response) => {
        commit("SET_PHOTOS", response.data);
        commit("SET_COUNT", count);
        commit("SET_LOAD_STATE", partials.LOAD_STATE.SUCCESS);
      })
      .catch((error) => {
        commit("SET_LOAD_STATE", partials.LOAD_STATE.ERROR);
        console.log("Error: " + error.response.data.errors[0]);
      });
  },
};
