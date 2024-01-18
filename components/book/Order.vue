<script setup>
import { loadStripe } from '@stripe/stripe-js';
import { useActions } from "~/stores/useActions";
const user = useSanctumUser();
const props = defineProps({
    orderInfo: {
        type: Object,
        required: true
    }
});
const actions = useActions();
const order = props.orderInfo[0];

const isLoading = ref(false);
const messages = ref([]);

let stripe = null;
let elements = null;

const info = {
    amount: parseInt(order.amount),
    customer: order.customer_id,
    metadata: {
        orderID: order.order_id,
        userID: user.id,
    }
};

onMounted(async () => {

    stripe = await loadStripe('pk_test_51OZb8EI084Bvf0eZOOw5VR4REyv9o3MbAVpFJ0SuSzKMj8whjoEpgOxz1dN5quwfutsmQbFZXaUqlztFfPwNpNjF00mzYfVtCG');
    const { clientSecret, error: backendError } = await actions.getPaymentIntent(info).then((res) => res.clientSecret);
    console.log(clientSecret, backendError)
    const appearance = {

    };
    
    elements = stripe.elements({clientSecret: clientSecret, appearance});
    const options = {
        layout: {
            type: 'tabs',
            defaultCollapsed: false,
        }
    };
    const paymentElement = elements.create('payment', options);
    paymentElement.mount('#payment-element');
    const linkAuthenticationElement = elements.create('linkAuthentication');
    linkAuthenticationElement.mount('#link-authentication-element');
    isLoading.value = false;
});

const handleSubmit = async () => {
    if (isLoading.value) return;

    isLoading.value = true;

    try {
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/return`
            }
        });

        if (error) {
            messages.value.push(error.message);
        } else {
            // Handle successful payment
            messages.value.push('Payment successful!');
            // Redirect or handle success as needed
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        messages.value.push('An unexpected error occurred.');
    } finally {
        isLoading.value = false;
    }
};

</script>

<template>
    <div class="card__content">
        <div class="card__body p-5">
            <a href="index.html" class="sign__logo card__top">
                <img src="/img/logo.svg" alt="">
            </a>

            <h3 class="movie__title card__top">Order #{{ order.order_id }}</h3>
            <h3 class="movie__title card__top">Amount {{ order.amount }}</h3>

            <form class="card__top" id="payment-form" @submit.prevent="handleSubmit">
                <div id="link-authentication-element"></div>
                <div class="mt-4" id="payment-element"></div>
                <GeneralButtonFill class="mt-4" id="submit">Pay Now</GeneralButtonFill>
            </form>

        </div>


    </div>
</template>

<style scoped>
.card__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 40px 0;

}

.card__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: URL('/img/bg/home__bg.jpg') no-repeat center center / cover;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
    padding: 40px 20px;
    position: relative;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    border-radius: 8px;
    overflow: hidden;
}

/* .card__body:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    display: block;
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
} */

.card__body:before,
.card__body:after {
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
}

.card__body:before {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.card__body:after {
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 2;
}

.card__top {
    z-index: 3;
}

.selected {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #28282d;
    padding: 20px;
    height: auto;
    width: 100%;
    margin-top: 20px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.selected img {
    width: 36px;
    height: auto;
    position: absolute;
    bottom: 20px;
    right: 20px;
}

.selected span {
    font-size: 14px;
    color: #c7c7c7;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
}

.selected p {
    font-size: 36px;
    font-weight: 400;
    color: #f7a1c4;
    line-height: 100%;
    margin-bottom: 0;
}

@media (min-width: 768px) {
    .stats {
        margin-top: 24px;
    }
}

.total__price {
    font-size: 26px;
    line-height: 100%;
    color: #ff55a5;
    font-weight: 400;
    text-align: right;
}

.total__title {
    font-size: 26px;
    line-height: 100%;
    color: #fff;
    font-weight: 400;
    text-align: left;
}

.movie__date {
    font-size: 26px;
    line-height: 100%;
    color: #ff55a5;
    font-weight: 400;
    text-align: right;
}

.movie__time {
    font-size: 18px;
    line-height: 100%;
    color: #ff55a5;
    font-weight: 400;
    text-align: right;
}

.movie__title {
    font-size: 26px;
    line-height: 100%;
    color: #fff;
    font-weight: 400;
    text-align: left;
}

.plan__btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff5860 0%, #ff55a5 100%);
    box-shadow: 0 0 16px 0 rgba(255, 88, 96, 0.3);
    position: relative;
}

.plan__btn:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    border-radius: 8px;
    opacity: 1;
    transition: opacity 0.5s ease;
}

.plan__btn span {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    z-index: 2;
}

.plan__btn:hover {
    box-shadow: 0 0 16px 0 rgba(255, 88, 96, 0.6);
}

.plan__btn:hover:before {
    opacity: 0;
}
</style>