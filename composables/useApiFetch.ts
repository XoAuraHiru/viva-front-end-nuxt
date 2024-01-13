import type { UseFetchOptions } from 'nuxt/app'
import { useRequestHeaders } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {
    accept: "application/json",
    referer: "http://vivafront.xoaurahiru.com",
    "Access-Control-Allow-Origin": "http://vivafront.xoaurahiru.com",
    "Access-Control-Allow-Credentials": true,
  }

  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
    }
  }

  return useFetch("https://vivaapi.xoaurahiru.com" + path, {
    credentials: "include",
    mode: "cors",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  });
}