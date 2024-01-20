import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

export const useAdmin = defineStore('admin', () => {

    async function getOrders() {
        const { data, error } = await useApiFetch("/api/admin/orders", {
            method: "GET",
        });
        return data.value;
    }

    async function deleteOrder(id) {
        const { data, error } = await useApiFetch("/api/admin/order/" + id, {
            method: "DELETE",
        });
        return data.value;
    }

    return { getOrders }
})
