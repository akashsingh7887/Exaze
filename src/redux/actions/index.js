import {NAME_UPDATE} from '../constants';

export const updateName = text => {
  return {
    type: NAME_UPDATE,
    payload: text,
  };
};
