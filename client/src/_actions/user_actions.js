import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  SHOW_CART_ITEMS,
  REMOVE_CART_ITEM,
  PAYMENT_SUCCESS,
} from './types';
import { USER_SERVER, EVENTS_SERVER } from 'utils/config.js';

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then(response => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then(response => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export const addToCart = async (id, quantity) => {
  let body = {
    eventId: id,
    quantity: quantity,
  };

  const response = await axios.post(`${USER_SERVER}/add-to-cart`, body);
  const request = response.data;

  return {
    type: ADD_TO_CART,
    payload: request,
  };
};

export const showCartItems = (cartItems, userCart) => {
  const request = axios
    .get(`${EVENTS_SERVER}/events_by_id?id=${cartItems}&type=array`)
    .then(response => {
      let data = response.data;

      userCart.forEach(cartItem => {
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

export const removeCartItem = eventId => {
  let variable = { eventId: eventId };

  const request = axios
    .post(`${USER_SERVER}/remove-cart-item`, variable)
    .then(response => {
      const data = response.data;

      data.cart.forEach(item => {
        data.eventInfo.forEach((event, i) => {
          if (item.id === event._id) data.eventInfo[i].quantity = item.quantity;
        });
      });
      return data;
    });

  return {
    type: REMOVE_CART_ITEM,
    payload: request,
  };
};

export const onSuccessPay = cartData => {
  const request = axios
    .post(`${USER_SERVER}/payment-success`, cartData)
    .then(response => response.data);

  return {
    type: PAYMENT_SUCCESS,
    payload: request,
  };
};
