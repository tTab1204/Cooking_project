import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  SHOW_CART_ITEMS,
} from "./types";
import { USER_SERVER, EVENTS_SERVER } from "../components/Config.js";

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export const addToCart = async (id) => {
  let body = {
    eventId: id,
  };

  const response = await axios.post(`${USER_SERVER}/add-to-cart`, body);
  const request = response.data;

  return {
    type: ADD_TO_CART,
    payload: request,
  };
};

export const showCartItems = async (cartItems, userCart) => {
  const request = axios
    .get(`${EVENTS_SERVER}/events_by_id?id=${cartItems}&type=array`)
    .then((response) => {
      let data = response.data;

      userCart.forEach((cartItem) => {
        data.forEach((eventDetail, i) => {
          if (cartItem.id === eventDetail._id)
            data[i].quantity = cartItem.quantity;
        });
      });
      return data;
    });

  return {
    type: SHOW_CART_ITEMS,
    payload: request,
  };
};
