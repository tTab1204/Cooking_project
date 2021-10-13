/* events */
export const SHOW_EVENTS = '/api/events/show-events';
export const SHOW_EVENT_DETAIL = eventId =>
  `/api/events/events_by_id?id=${eventId}&type=single`;

/* kitchens */
export const SHOW_KITCHENS = '/api/kitchens/show-kitchens';
export const SHOW_KITCHEN_DETAIL = kitchenId =>
  `/api/kitchens/kitchens_by_id?id=${kitchenId}&type=single`;
