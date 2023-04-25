import { STORAGE_AUTH_TOKEN } from 'constants/storage';

/* eslint-disable import/prefer-default-export */
export const getTokenFromStorage = () => JSON.parse(localStorage.getItem(STORAGE_AUTH_TOKEN));
