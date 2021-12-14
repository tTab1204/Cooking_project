import { LOCAL_SERVER, PROD_SERVER } from './config';
import { production } from '../constants/constants';

export const getImage = imgName => {
  return production ? `${PROD_SERVER}${imgName}` : `${LOCAL_SERVER}${imgName}`;
};
