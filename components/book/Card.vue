
import type { LottieLoading } from '#build/components';
<script setup>
import axios from 'axios';

const { id } = useRoute().params;

const selectedSeats = ref([]);
const seatSelected = ref(false);

const show = ref([]);
const seats = ref([]);

await axios.get(`https://vivaapi.xoaurahiru.com/api/shows/show/` + id)
    .then(response => {
        show.value = response.data.data
    })
    .catch(error => {
        console.log(error);
    });

await axios.get(`https://vivaapi.xoaurahiru.com/api/seats`)
    .then(response => {
        seats.value = response.data.data
    })
    .catch(error => {
        console.log(error);
    });

const totalPrice = ref(0)

const uniqueLetters = computed(() => {
    const seatLetters = seats.value.map(seat => seat.seat_no.charAt(0));
    return [...new Set(seatLetters)];
});

const seatsByLetter = computed(() => {
    return uniqueLetters.value.reduce((acc, letter) => {
        acc[letter] = seats.value.filter(seat => seat.seat_no.startsWith(letter));
        return acc;
    }, {});
});

const handleSeatChecked = (id, price) => {
    if (!selectedSeats.value.includes(id)) {
        selectedSeats.value.push(id);
        totalPrice.value += parseFloat(price);
    }
    console.log(selectedSeats.value);
};

const handleSeatUnchecked = (id, price) => {
    const index = selectedSeats.value.indexOf(id);
    if (index !== -1) {
        selectedSeats.value.splice(index, 1);
        totalPrice.value -= parseFloat(price);
    }
    console.log(selectedSeats.value);
};

const confirmSeats = () => {
    seatSelected.value = true;
};



</script>

<template>
    <div class="card__content mt-5">
        <div class="card__body">
            <a href="index.html" class="sign__logo card__top">
                <img src="/img/logo.svg" alt="">
            </a>

            <h3 class="movie__title card__top">{{ show }}</h3>
            <!-- <span class="movie__date card__top">{{ show[0].shedule_date }}</span>
            <span class="movie__time card__top mt-3">{{ show[0].time.time }}</span> -->

            <div v-if="!seatSelected" v-auto-animate class="row justify-content-center card__top mt-5 px-3">
                <div v-for="letter in uniqueLetters" :key="letter" class="col gap-1 d-flex justify-content-center">
                    <BookSeat v-for="seat in seatsByLetter[letter]" @SeatChecked="handleSeatChecked"
                        @SeatUnchecked="handleSeatUnchecked" :id="seat.seat_no" :price="seat.type.price" :key="seat.seat_no" />
                </div>
                <!-- stats -->
                <div class="row">
                    <div class="col-12">
                        <div class="selected">
                            <span>Selected Seats:</span>
                            <span>{{ selectedSeats }}</span>
                        </div>

                        <div class="row mt-5">
                            <h3 class="total__title col-6">Total</h3>
                            <span class="total__price col-6">${{totalPrice}}</span>
                        </div>
                    </div>
                </div>
                <!-- end stats -->

                <div class="row px-5">
                    <GeneralButtonFill class="mt-5" @click="confirmSeats()">Continue</GeneralButtonFill>
                    <GeneralButtonOutline class="mt-2">Cancel</GeneralButtonOutline>
                </div>
            </div>

            <!-- end seats -->

            <LottieLoading class="card__top" v-if="seatSelected" />


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