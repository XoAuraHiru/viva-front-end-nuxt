import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

export const useAdmin = defineStore('admin', () => {

    async function getOrders() {
        const { data, error } = await useApiFetch("/api/admin/orders", {
            method: "GET",
        });
        return data.value;
    }

    return { getOrders }
})
