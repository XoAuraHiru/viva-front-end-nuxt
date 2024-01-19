import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

export const useActions = defineStore('actions', () => {

  async function createOrder(order){

    const {data, error} = await useApiFetch("/api/order/create", {
      method: "POST",
      body: order,
    });
    return data.value;
  }

  async function getOrder(id){
    const {data, error} = await useApiFetch("/api/order/" + id, {
      method: "GET",
    });
    return data.value;
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

  async function getPaymentIntent(info){
    const {data, error} = await useApiFetch("/api/create-payment-intent", {
      method: "POST",
      body: info,
    });
    return data.value;
  }

  async function getUserOrders(){
    const {data, error} = await useApiFetch("/api/user/orders", {
      method: "GET",
    });
    return data.value;
  }

  return { createOrder, getOrder, getSeats, getShow, getPaymentIntent, getUserOrders}
})
