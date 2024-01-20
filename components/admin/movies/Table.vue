<template>
    <!-- items -->
    <div class="col-12">
        <div class="catalog catalog--1">
            <table class="catalog__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>RATING</th>
                        <th>CATEGORY</th>
                        <th>VIEWS</th>
                        <th>STATUS</th>
                        <th>CRAETED DATE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>
                            <div class="catalog__text">11</div>
                        </td>
                        <td>
                            <div class="catalog__text"><a href="#">I Dream in Another Language</a></div>
                        </td>
                        <td>
                            <div class="catalog__text catalog__text--rate">7.9</div>
                        </td>
                        <td>
                            <div class="catalog__text">Movie</div>
                        </td>
                        <td>
                            <div class="catalog__text">1392</div>
                        </td>
                        <td>
                            <div class="catalog__text catalog__text--green">Visible</div>
                        </td>
                        <td>
                            <div class="catalog__text">05.02.2023</div>
                        </td>
                        <td>
                            <div class="catalog__btns">
                                <button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--banned"
                                    data-bs-target="#modal-status">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
                                    </svg>
                                </button>
                                <button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
                                    data-bs-target="#modal-view">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                                    </svg>
                                </button>
                                <a href="add-item.html" class="catalog__btn catalog__btn--edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
                                    </svg>
                                </a>
                                <button type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
                                    data-bs-target="#modal-delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    <!-- end items -->
</template>


<style lang="scss" scoped></style>