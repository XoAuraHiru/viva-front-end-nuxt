<script setup>
definePageMeta({
    layout: 'admin'
})

</script>

<template>
    <!-- main content -->
    <main class="main">
        <div class="container-fluid">
            <div class="row">
                <AdminMoviesTitle />

                <AdminMoviesTable />

                <AdminMoviesPagination />
            </div>
        </div>
    </main>
    <!-- end main content -->

    <!-- status modal -->
    <div class="modal fade" id="modal-status" tabindex="-1" aria-labelledby="modal-status" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal__content">
                    <form action="#" class="modal__form">
                        <h4 class="modal__title">Status change</h4>

                        <p class="modal__text">Are you sure about immediately change status?</p>

                        <div class="modal__btns">
                            <button class="modal__btn modal__btn--apply" type="button"><span>Apply</span></button>
                            <button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
                                aria-label="Close"><span>Dismiss</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- end status modal -->

    <!-- delete modal -->
    <div class="modal fade" id="modal-delete" tabindex="-1" aria-labelledby="modal-delete" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal__content">
                    <form action="#" class="modal__form">
                        <h4 class="modal__title">Item delete</h4>

                        <p class="modal__text">Are you sure to permanently delete this item?</p>

                        <div class="modal__btns">
                            <button class="modal__btn modal__btn--apply" type="button"><span>Delete</span></button>
                            <button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
                                aria-label="Close"><span>Dismiss</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- end delete modal -->

    <!-- status modal -->
    <div class="modal fade" id="modal-status" tabindex="-1" aria-labelledby="modal-status" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal__content">
                    <form action="#" class="modal__form">
                        <h4 class="modal__title">Status change</h4>

                        <p class="modal__text">Are you sure about immediately change status?</p>

                        <div class="modal__btns">
                            <button class="modal__btn modal__btn--apply" type="button"><span>Apply</span></button>
                            <button class="modal__btn modal__btn--dismiss" type="button" data-bs-dismiss="modal"
                                aria-label="Close"><span>Dismiss</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- end status modal -->
</template>


<style lang="scss" scoped></style>