import axiosInstance from './axios-instance';

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export const fetchWithWarehouse = (url, warehouseUri) =>
  axiosInstance
    .get(url, {
      baseURL: warehouseUri,
    })
    .then((res) => res.data);

export default fetcher;
