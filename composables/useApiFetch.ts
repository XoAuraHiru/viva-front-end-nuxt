import type { UseFetchOptions } from 'nuxt/app'
import { useRequestHeaders } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {
    accept: "application/json",
    referer: "http://vivafront.xoaurahiru.com",
    'Access-Control-Allow-Origin': 'Same-Origin',
    'crossOriginResourcePolicy': 'same-origin',
    'crossOriginOpenerPolicy': 'same-origin',
    'crossOriginEmbedderPolicy': 'require-corp',
    'contentSecurityPolicy': "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
    'X-XSS-Protection': 1
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
    mode: "no-cors", // Set the mode to "no-cors"
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  });
}