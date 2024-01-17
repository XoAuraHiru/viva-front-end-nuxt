import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

export const useActions = defineStore('actions', () => {

  async function createOrder(order){

    const {data, error, status} = await useApiFetch("/api/order/create", {
      method: "POST",
      body: order,
    });
    return [data.value, status.value, error.value];
  }

  async function getSeats(){
    const {data, error} = await useApiFetch("/api/seats", {
      method: "GET",
    });
    return data.value;
  }

  async function getShow(showId){
    const {data, error} = await useApiFetch("/api/shows/show/" + showId, {
      method: "GET",
    });
    return data.value;
  }

  return { createOrder, getSeats, getShow}
})
