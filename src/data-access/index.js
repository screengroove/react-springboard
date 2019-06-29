import React from 'react';
import axios from 'axios';
import { types } from 'mobx-state-tree';

function createFetchWrapper() {
  const instance = axios.create({
    baseURL: 'https://randomuser.me/api/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  instance.interceptors.response.use(response => response, error => Promise.reject(error.response.data));
  const client = {
    get: (endpoint, config) =>
      instance.get(endpoint, {
        ...config,
      }),
    post: (endpoint, data) => instance.post(endpoint, data),

    put: (endpoint, data) => instance.put(endpoint, data),

    delete: endpoint => instance.delete(endpoint),
  };
  return client;
}

export const RootStore = types.model({
  // index.jsuserStore: AuthStore,
});

const rootStore = RootStore.create(
  {
    // authStore: AuthStore.create(),
  },
  {
    client: createFetchWrapper(),
  }
);

export default React.createContext();
