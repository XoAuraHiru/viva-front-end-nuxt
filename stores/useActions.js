import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

export const useActions = defineStore('actions', () => {

  async function createOrder(order){
    await useApiFetch("/sanctum/csrf-cookie");
    const {data, error} = await useApiFetch("/api/order/create", {
      method: "POST",
      body: order,
    });
    return data.value;
  }

  return { createOrder}
})
