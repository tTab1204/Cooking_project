import { LOCAL_SERVER } from './config';
import { production } from './constants';

export const getImage = imgName => {
  console.log('production: ', production);
  return production ? imgName : `${LOCAL_SERVER}${imgName}`;
};
