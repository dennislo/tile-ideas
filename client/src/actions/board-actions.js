import { IDEAS_DATA_REQUESTED, IDEAS_DATA_RECEIVED, IDEAS_DATA_NOT_RECEIVED } from './types';

export const ideasDataRequested = () => ({
  type: IDEAS_DATA_REQUESTED,
});

export const ideasDataRecieved = payload => ({
  type: IDEAS_DATA_RECEIVED,
  payload,

});

export const searchDataNotRecieved = payload => ({
  type: IDEAS_DATA_NOT_RECEIVED,
  payload,
});
