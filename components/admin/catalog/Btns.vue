<script setup>
const props = defineProps({
    status: {
        type: Boolean,
        default: 0
    },
    delete: {
        type: Boolean,
        default: 0
    },
    edit: {
        type: Boolean,
        default: 0
    },
    view: {
        type: Boolean,
        default: 0
    },
    refund: {
        type: Boolean,
        default: 0
    }
})

</script>

<template>
    <div class="catalog__btns">
        <button v-if="props.status" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
            data-bs-target="#modal-status">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
            </svg>
        </button>
        <button v-if="props.view" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
            data-bs-target="#modal-view">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
            </svg>
        </button>
        <a v-if="props.edit" href="edit-user.html" class="catalog__btn catalog__btn--edit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
            </svg>
        </a>
        <button v-if="props.refund" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--refund"
            data-bs-target="#modal-refund">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
        </button>
        <button v-if="props.delete" type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
            data-bs-target="#modal-delete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
            </svg>
        </button>
    </div>
</template>


<style scoped>
.catalog__btns {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.catalog__btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    font-size: 16px;
    color: #fff;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
    margin-right: 10px;
}

.catalog__btn svg {
    width: 18px;
    height: 18px;
}

.catalog__btn:last-child {
    margin-right: 0;
}

.catalog__btn--delete {
    background-color: rgba(236, 84, 122, 0.1);
}

.catalog__btn--delete svg {
    fill: #ec547a;
}

.catalog__btn--delete:hover {
    background-color: rgba(236, 84, 122, 0.2);
}

.catalog__btn--delete:hover svg {
    fill: #ec547a;
}

.catalog__btn--edit {
    background-color: rgba(55, 150, 246, 0.1);
}

.catalog__btn--edit svg {
    fill: #3796f6;
}

.catalog__btn--edit:hover {
    background-color: rgba(55, 150, 246, 0.2);
}

.catalog__btn--edit:hover svg {
    fill: #3796f6;
}

.catalog__btn--banned {
    background-color: rgba(91, 206, 174, 0.1);
}

.catalog__btn--banned svg {
    fill: #5bceae;
}

.catalog__btn--banned:hover {
    background-color: rgba(91, 206, 174, 0.2);
}

.catalog__btn--banned:hover svg {
    fill: #5bceae;
}

.catalog__btn--view {
    background-color: rgba(255, 85, 165, 0.1);
}

.catalog__btn--view svg {
    fill: rgba(255, 85, 165, 0.8);
}

.catalog__btn--view:hover {
    background-color: rgba(255, 85, 165, 0.2);
}

.catalog__btn--view:hover svg {
    fill: #ff55a5;
}

.catalog__btn--refund {
    background-color: rgba(255, 193, 7, 0.1);
}

.catalog__btn--refund svg {
    fill: rgba(255, 193, 7, 0.8);
}

.catalog__btn--refund:hover {
    background-color: rgba(255, 85, 165, 0.2);
}

.catalog__btn--refund:hover svg {
    fill: rgb(255, 193, 7);
}
</style>