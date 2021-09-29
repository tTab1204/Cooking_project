import { LOCAL_SERVER } from './config';

export const getImage = imgName => {
  return `${LOCAL_SERVER}${imgName}`;
};
