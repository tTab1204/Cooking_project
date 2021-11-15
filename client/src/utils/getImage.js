import { LOCAL_SERVER } from './config';
import { production } from './constants';

export const getImage = imgName => {
  return production ? imgName : `${LOCAL_SERVER}${imgName}`;
};
