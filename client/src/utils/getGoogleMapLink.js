const googleMapURL = 'https://www.google.com/maps/place/';

export const getGoogleMapLink = location => {
  return `${googleMapURL}${location.replace(/(\s*)/g, '')}`;
};
