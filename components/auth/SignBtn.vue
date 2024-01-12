<script setup>

const isNormal = true

defineProps({
    isDisabled: {
        type: Boolean,
        default: false,
    },
})

</script>

<template>
    <button v-if="!isDisabled" class="sign__btn" type="submit">
        <span>
            <slot />
        </span>
    </button>

    <button v-if="isDisabled" class="sign__btn sign__btn--disabled" type="submit" disabled>
        <span>
            <slot />
        </span>
    </button>
</template>

<style scoped>
.sign__btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff5860 0%, #ff55a5 100%);
    box-shadow: 0 0 16px 0 rgba(255, 88, 96, 0.3);
    position: relative;
}

.sign__btn--disabled {
    filter: grayscale(50%);
}

.sign__btn--modal {
    margin-top: 10px;
}

.sign__btn--small {
    margin-top: 10px;
}

.sign__btn:before {
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

.sign__btn span {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    z-index: 2;
}

.sign__btn:hover {
    box-shadow: 0 0 16px 0 rgba(255, 88, 96, 0.6);
}

.sign__btn:hover:before {
    opacity: 0;
}

@media (min-width: 768px) {

    .sign__btn--modal {
        margin-top: 20px;
    }

    .sign__btn--small {
        width: 160px;
    }
}
</style>