
import type loadingVue from '~/components/lottie/loading.vue';
<script setup>
import { useAdmin } from "~/stores/useAdmin";
const emits = defineEmits(['confirm'])
const props = defineProps({
    orderID: {
        type: Number,
        default: 0
    },
})


const isDeleting = ref(false);
const isCompleted = ref(false);
const admin = useAdmin();

async function deleteHandle() {
    isDeleting.value = true;
    try {
        await admin.deleteOrder(props.orderID);
        emits('confirm');
        isDeleting.value = false;
        isCompleted.value = true;
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <!-- delete modal -->
    <div class="modal fade" id="modal-delete" tabindex="-1" aria-labelledby="modal-delete" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal__content">
                    <form action="#" class="modal__form">
                        <h4 class="modal__title">Order delete</h4>

                        <p class="modal__text">Are you sure to permanently delete this Order #{{ orderID }}?</p>

                        <div class="col-9 d-flex justify-content-center w-100 mt-3">
                            <LottieDelete v-if="!isDeleting && !isCompleted" />
                            <LottieDone v-if="isCompleted" />
                        </div>

                        <div class="modal__btns">
                            <button v-if="!isDeleting && !isCompleted" @click="deleteHandle"
                                class="modal__btn modal__btn--apply" type="button"><span>Delete</span></button>
                            <button v-if="!isDeleting && !isCompleted" class="modal__btn modal__btn--dismiss" type="button"
                                data-bs-dismiss="modal" aria-label="Close"><span>Dismiss</span>
                            </button>

                            <!-- loading -->

                            <button v-if="isDeleting" @click="deleteHandle" class="modal__btn2 modal__btn--dismiss"
                                type="button">
                                <LottieDots class="col-6" />
                            </button>

                            <!-- completed -->
                            <button v-if="isCompleted" @click="deleteHandle" class="modal__btn2 modal__btn--dismiss"
                                type="button" data-bs-dismiss="modal">
                                <span>Done</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- end delete modal -->
</template>

<style scoped>
.modal__btns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 30px;
}

.modal__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    width: calc(50% - 15px);
    border-radius: 8px;
    position: relative;
}

.modal__btn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    width: 100%;
    border-radius: 8px;
    position: relative;
}

.modal__btn2:before {
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

.modal__btn2 span {
    position: relative;
    z-index: 2;
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
}

.modal__btn:before {
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

.modal__btn span {
    position: relative;
    z-index: 2;
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
}

.modal__btn--apply {
    background: linear-gradient(90deg, #ff5860 0%, #ff55a5 100%);
    box-shadow: 0 0 16px 0 rgba(255, 88, 96, 0.3);
}

.modal__btn--apply:hover {
    box-shadow: 0 0 16px 0 rgba(255, 88, 96, 0.6);
}

.modal__btn--apply:hover:before {
    opacity: 0;
}

.modal__btn--dismiss {
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
}

.modal__btn--dismiss:before {
    opacity: 0;
}

.modal__btn--dismiss:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}
</style>