<script setup>

</script>

<template>
    <div class="sign section--bg" data-bg="img/bg/section__bg.jpg">
        <div class="container">
            <div class="row pt-5">
                <div class="col-12">
                    <div class="sign__content">
                        <slot/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.sign {
    display: block;
    position: relative;
}

.sign__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 40px 0;
}

.sign__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #28282d;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
    padding: 40px 20px;
    position: relative;
    width: 100%;
    max-width: 440px;
    border-radius: 8px;
    overflow: hidden;
}

.sign__form:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    display: block;
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
}

.sign__form--contacts {
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
    padding: 30px 20px;
    margin-top: 50px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-top: none;
    box-shadow: none;
}

.sign__form--profile,
.sign__form--comments {
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
    padding: 30px 20px;
    box-shadow: none;
    border: 1px solid rgba(255, 255, 255, 0.05);
    margin-top: 20px;
}

.sign__form--profile:before,
.sign__form--comments:before {
    display: none;
}

.sign__logo {
    margin-bottom: 40px;
}

.sign__logo a {
    max-width: 100%;
    width: auto;
}

.sign__logo img {
    max-width: 130px;
}

.sign__title {
    color: #fff;
    font-size: 18px;
    line-height: 100%;
    font-weight: 500;
    margin-bottom: 30px;
}

.sign__label {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 100%;
    color: #c7c7c7;
    width: 100%;
    margin-bottom: 15px;
}

.sign__input {
    background-color: #2b2b31;
    border: 1px solid transparent;
    height: 50px;
    position: relative;
    color: #fff;
    font-size: 16px;
    width: 100%;
    border-radius: 8px;
    padding: 0 20px;
    font-family: 'Open Sans', sans-serif;
}

.sign__input:hover,
.sign__input:focus {
    border-color: #ff55a5;
}

.sign__textarea {
    background-color: #2b2b31;
    border: 1px solid transparent;
    height: 120px;
    position: relative;
    color: #fff;
    font-size: 16px;
    width: 100%;
    padding: 15px 20px;
    resize: none;
    font-family: 'Open Sans', sans-serif;
    border-radius: 8px;
}

.sign__textarea:hover,
.sign__textarea:focus {
    border-color: #ff55a5;
}

.sign__select {
    background: url("../img/angle-down.svg") no-repeat center right 20px #2b2b31;
    background-size: 20px auto;
    border: 1px solid transparent;
    border-radius: 8px;
    height: 50px;
    position: relative;
    color: #fff;
    font-size: 16px;
    width: 100%;
    padding: 0 20px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
}

.sign__select:focus,
.sign__select:hover {
    border-color: #ff55a5;
}

.sign__group {
    position: relative;
    margin-bottom: 20px;
    width: 100%;
}

.sign__group--checkbox {
    width: 100%;
    text-align: left;
}

.sign__group--checkbox input:not(:checked),
.sign__group--checkbox input:checked {
    position: absolute;
    left: -9999px;
}

.sign__group--checkbox input:not(:checked)+label,
.sign__group--checkbox input:checked+label {
    font-size: 14px;
    color: #c7c7c7;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    cursor: pointer;
    padding-left: 34px;
    line-height: 22px;
    margin: 0;
}

.sign__group--checkbox input:not(:checked)+label a,
.sign__group--checkbox input:checked+label a {
    color: #ff55a5;
}

.sign__group--checkbox input:not(:checked)+label a:hover,
.sign__group--checkbox input:checked+label a:hover {
    color: #ff5860;
}

.sign__group--checkbox input:not(:checked)+label:before,
.sign__group--checkbox input:checked+label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-color: #2b2b31;
    border-radius: 2px;
}

.sign__group--checkbox input:not(:checked)+label:after,
.sign__group--checkbox input:checked+label:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    transition: 0.5s;
    background: url("../img/check.svg") no-repeat center;
    background-size: 20px auto;
    border-radius: 2px;
}

.sign__group--checkbox input:not(:checked)+label:after {
    opacity: 0;
    transform: scale(0);
}

.sign__group--checkbox input:checked+label:after {
    opacity: 1;
    transform: scale(1);
}

.sign__group--checkbox label::-moz-selection {
    background: transparent;
    color: #c7c7c7;
}

.sign__group--checkbox label::selection {
    background: transparent;
    color: #c7c7c7;
}

.sign__radio {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 5px;
}

.sign__radio li {
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
}

.sign__radio li:last-child {
    margin-bottom: 0;
}

.sign__radio input:not(:checked),
.sign__radio input:checked {
    position: absolute;
    left: -9999px;
}

.sign__radio label {
    display: block;
    margin: 0;
    position: relative;
    font-weight: 400;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #c7c7c7;
    line-height: 20px;
    padding-left: 35px;
    transition: color 0.5s ease;
}

.sign__radio label:before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 5px solid rgba(255, 255, 255, 0.25);
    background-color: transparent;
    border-radius: 50%;
    left: 0;
    top: 0;
    transition: border-color 0.5s ease;
}

.sign__radio label:hover {
    color: #fff;
}

.sign__radio input:checked+label {
    color: #fff;
}

.sign__radio input:checked+label:before {
    border-color: #ff55a5;
}

.sign__text {
    display: block;
    margin-top: 20px;
    font-size: 14px;
    line-height: 24px;
    color: #c7c7c7;
    font-family: 'Open Sans', sans-serif;
}

.sign__text a {
    color: #ff55a5;
}

.sign__text a:hover {
    color: #ff5860;
}

@media (min-width: 768px) {
    .sign__form {
        padding: 40px 80px;
    }

    .sign__form--contacts {
        padding: 30px;
        margin-top: 70px;
    }

    .sign__form--profile {
        padding: 30px;
        margin-top: 24px;
    }

    .sign__form--comments {
        padding: 30px;
        margin-top: 24px;
    }

    .sign__btn--modal {
        margin-top: 20px;
    }

    .sign__btn--small {
        width: 160px;
    }
}

@media (min-width: 992px) {
    .sign__form--contacts {
        margin-top: 0;
    }
}
</style>