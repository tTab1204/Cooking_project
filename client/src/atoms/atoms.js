import { atom } from 'recoil';

export const hostDetailState = atom({
  key: 'hostDetailState',
  default: {},
});

export const showSuccessState = atom({
  key: 'showSuccessState',
  default: false,
});

export const ticketTabState = atom({
  key: 'ticketTabState',
  default: '',
});

export const showModalState = atom({
  key: 'showModalState',
  default: false,
});
