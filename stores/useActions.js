import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

export const useActions = defineStore('actions', () => {

  async function createOrder(order){

    const response = await useApiFetch("/api/order/create", {
      method: "POST",
      body: order,
    });
    return response;
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
