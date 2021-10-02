export const ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  HOST: {
    MAIN: '/hosts',
    DETAIL: '/hosts/:hostsId',
  },
  BECOME_A_HOST: '/become-a-host',
  LIST_YOUR_KITCHEN: '/list-your-kitchen',
  KITCHENS: {
    MAIN: '/kitchens',
    DETAIL: '/kitchens/:kitchensId',
  },
  MY_TICKETS: {
    MAIN: '/my-tickets',
    AVAILABLE: '/available',
    USED_EXPIRED: '/used-expired',
  },
  EVENTS: {
    MAIN: '/events',
    DETAIL: '/events/:eventId',
  },
  UPLOAD_KITCHEN: '/upload-kitchen',
  UPLOAD_HOST: '/upload-host',
  UPLOAD_EVENT: '/upload-event',
  PAYMENT: '/payment',
};
