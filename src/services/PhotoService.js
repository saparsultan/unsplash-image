import axios from "axios";
const API_KEY = "kKO3wMSB5xnzvNwy2Mc-jpXhH2W1PMtnSAHzSi_yCHs";
const apiClient = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getPhotos = (count) => {
  return apiClient.get(`/photos/random?client_id=${API_KEY}&count=${count}`);
};

export const searchPhotos = (per_page, value) => {
  return apiClient.get(
    `/search/photos?page=1&query=${value}&client_id=${API_KEY}&per_page=${per_page}`
  );
};

export const getPhotoId = (id) => {
  return apiClient.get(`/photos/${id}?client_id=${API_KEY}`);
};
