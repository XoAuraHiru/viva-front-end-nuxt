<script setup>

import { defineEmits } from 'vue'
const isChecked = ref(false) 
const emit = defineEmits(['seat-checked', 'seat-unchecked'])
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})

const id = props.id
const price = props.price

const handleClick = () => {
    isChecked.value = !isChecked.value;
    if (isChecked.value) {
        emit('seat-checked', id, price);
    } else {
        emit('seat-unchecked', id, price);
    }
}

</script>

<template>
    <button @click="handleClick()" :class="['seat', { 'seat-active': isChecked }]"></button> 
</template>


<style scoped>
.seat {
    height: 18px;
    width: 23px;
    border: 1px solid #495361;
    border-radius: 2px 2px 4px 4px;
    margin: 1px;
    margin-bottom: 0.8rem;
    position: relative;
    cursor: pointer;
    background-color: #495361;
    transition: 0.3s ease background-color;
}

.seat-active {
    height: 18px;
    width: 23px;
    border: 1px solid #495361;
    border-radius: 2px 2px 4px 4px;
    margin: 1px;
    margin-bottom: 0.8rem;
    position: relative;
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    transition: 0.3s ease background-color;
}

.seat-inactive {
    height: 18px;
    width: 23px;
    border: 1px solid #495361;
    border-radius: 2px 2px 4px 4px;
    margin: 10px;
    margin-bottom: 0.8rem;
    position: relative;
    background-color: #FF6E6E;
    transition: 0.3s ease background-color;
}

.seat::after {
    content: "";
    height: 18px;
    width: 15px;
    border: 1px solid #1B2644;
    position: absolute;
    left: 50%;
    top: 29%;
    transform: translate(-50%, -50%);
    background-color: #495361;
    border-radius: 2px 2px;
    transition: 0.3s ease background-color;
}

.seat-active::after {
    content: "";
    height: 18px;
    width: 15px;
    border: 1px solid #1B2644;
    position: absolute;
    left: 50%;
    top: 29%;
    transform: translate(-50%, -50%);
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    border-radius: 2px 2px;
    transition: 0.3s ease background-color;
}

.seat-inactive::after {
    content: "";
    height: 18px;
    width: 15px;
    border: 1px solid #1B2644;
    position: absolute;
    left: 50%;
    top: 29%;
    transform: translate(-50%, -50%);
    background-color: #FF6E6E;
    border-radius: 2px 2px;
    transition: 0.3s ease background-color;
}

.seat:hover,
.seat:hover::after {
    background-color: #e6e6e6;
}
</style>