<script setup>
const user = useSanctumUser();
const props = defineProps({
    orderInfo: {
        type: Object,
        required: true
    }
});

const order = props.orderInfo[0];

const payment = {
    "sandbox": true,
    "merchant_id": "NDA1Mjk5NzQ0MTE2MDM0NjI3OTAyMjUxNzYxMjMwNTI0NTIyNzI=",    // Replace your Merchant ID
    "return_url": undefined,     // Important
    "cancel_url": undefined,     // Important
    "notify_url": "http://sample.com/notify",
    "order_id": order.order_id,
    "items": "Movie Tickets",
    "amount": order.amount,
    "currency": "LKR",
    "hash": "45D3CBA93E9F2189BD630ADFE19AA6DC", // *Replace with generated hash retrieved from backend
    "first_name": user.first_name,
    "last_name": user.last_name,
    "email": user.email,
    "phone": "0771234567",
    "address": "No.1, Galle Road",
    "city": "Colombo",
    "country": "Sri Lanka",
    "delivery_address": "No. 46, Galle road, Kalutara South",
    "delivery_city": "Kalutara",
    "delivery_country": "Sri Lanka",
    "custom_1": "",
    "custom_2": ""
};

onMounted(() => {
    document.getElementById('payhere-payment').onclick = function (e) {
        payhere.startPayment(payment);
    };
})

</script>

<template>
    <div class="card__content mt-5 ">
        <div class="card__body p-5">
            <a href="index.html" class="sign__logo card__top">
                <img src="/img/logo.svg" alt="">
            </a>

            <h3 class="movie__title card__top">Order #{{ order.order_id }}</h3>
            <h3 class="movie__title card__top">Amount {{ order.amount }}</h3>

            <span>{{ order }}</span>

            <GeneralButtonFill class="mt-5 card__top" type="submit" id="payhere-payment">Pay Now</GeneralButtonFill>

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
    max-width: 480px;
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