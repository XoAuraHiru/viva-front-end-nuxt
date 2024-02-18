import { useRequestHeaders } from "nuxt/app";
import dotenv from 'dotenv';

export function useApiFetch(path, options = {}) {
    const apiUrl = process.env.API_URL;

    let headers = {
        accept: "application/json",
        referer: process.env.APP_URL
    }

    const token = useCookie('XSRF-TOKEN');

    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value;
    } else {
        useFetch(apiUrl + "/sanctum/csrf-cookie", {
            credentials: "include",
            method: "GET",
        });
    }

    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(["cookie"]),
        }
    }



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
