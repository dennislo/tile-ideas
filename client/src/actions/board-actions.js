import { IDEAS_DATA_REQUESTED, IDEAS_DATA_RECEIVED, IDEAS_DATA_NOT_RECEIVED, IDEA_ADD, IDEA_UPDATE, IDEA_DELETE } from './types';

export const ideasDataRequested = () => ({
  type: IDEAS_DATA_REQUESTED,
});

export const ideasDataRecieved = payload => ({
  type: IDEAS_DATA_RECEIVED,
  payload,
});

export const ideasDataNotRecieved = payload => ({
  type: IDEAS_DATA_NOT_RECEIVED,
  payload,
});

export const ideaAdd = payload => ({
  type: IDEA_ADD,
  payload,
});

export const ideaUpdated = payload => ({
  type: IDEA_UPDATE,
  payload,
});

export const ideaDeleted = payload => ({
  type: IDEA_DELETE,
  payload,
});
