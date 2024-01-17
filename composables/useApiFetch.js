import { useRequestHeaders } from "nuxt/app";
import dotenv from 'dotenv';

export function useApiFetch(path, options = {}) {
  let headers = {
    accept: "application/json",
    referer: "http://localhost:3000"
  }

  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
    }
  }

dotenv.config();

const apiUrl = process.env.API_URL;

return useFetch(apiUrl + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...(options.headers || {})
    }
  });
}
