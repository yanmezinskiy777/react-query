import axios, { AxiosError, AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const request = ({ ...options }) => {
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: AxiosError) => error;

  return client(options).then(onSuccess).catch(onError);
};
