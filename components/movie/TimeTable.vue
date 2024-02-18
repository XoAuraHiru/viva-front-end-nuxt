<script setup>
const today = new Date();
const showDates = ref([]);

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = -2; i <= 2; i++) {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + i);
    showDates.value.push(newDate);
}

function selectDate(date) {
    showDates.value = [];
    today.setDate(date.getDate());
    for (let i = -2; i <= 2; i++) {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + i);
        showDates.value.push(newDate);
    }
}


</script>

<template>
    <div class="box">
        <div class="calender">
            <div @click="selectDate(date)" v-for="date in showDates" :class="['date_box', { 'active': date.getDate() === today.getDate() }]">
                <p class="month">{{ date.toLocaleString('default', { month: 'short' }).slice(0, 3) }}</p>
                <p class="date">{{ date.getDate() }}</p>
                <p class="day">{{ daysOfWeek[date.getDay()] }}</p>
            </div>
        </div>

        <div class="shedule">
            <div class="event">
                <p>10:00 AM</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.box {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 40px 20px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin: 0;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
}


.calender {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.date_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 10px;
    cursor: pointer;;
}

.month {
    font-size: 12px;
    font-weight: 500;
    color: #ff55a5;
    margin: 0;
}

.date {
    font-size: 30px;
    font-weight: 700;
    color: #ff55a5;
    margin: 0;
}

.day {
    font-size: 12px;
    font-weight: 500;
    color: #ff55a5;
    margin: 0;
}

.shedule {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
}

.event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    background: linear-gradient(90deg, #ff5860 0%, #ff55a5 100%);
    position: relative;
}

.event:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #ff5860 0%, #ff55a5 100%);
    z-index: -1;
}

.event p {
    font-size: 24px;
    font-weight: 600;
    color: #202024;
    text-align: center;
    width: 100%;
    margin-top: 20px;
}

.event:hover {
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
}

.event:hover:before {
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
}

.active {
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
}

.active p {
    color: #fff;
}

</style>