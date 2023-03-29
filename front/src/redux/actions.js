import axios from "axios";
import { API_BASE_URL } from "../utils/consts";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";
export const CLEAR_FAVORITES = "CLEAR_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";

export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/fav`, character);
      dispatch({
        type: ADD_FAVORITE,
        payload: character,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const removeFavorite = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/fav/${id}`);
      dispatch({
        type: REMOVE_FAVORITE,
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getFavorites = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/fav`);
      const characters = response.data;
      dispatch({
        type: GET_FAVORITES,
        payload: characters,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const clearFavorites = () => {
  return {
    type: CLEAR_FAVORITES,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

export const resetCards = () => {
  return {
    type: RESET,
  };
};
