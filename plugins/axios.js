import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    axios.defaults.baseURL = 'https://vivaapi.xoaurahiru.com'

    return {
        provide: { 
            axios: axios
        },
    }
})