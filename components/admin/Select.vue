<template>
    <select class="sign__selectjs" multiple>
        <option value="Action">Action</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Historical">Historical</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Science-fiction">Science-fiction</option>
        <option value="Thriller">Thriller</option>
        <option value="Western">Western</option>
        <option value="Otheer">Otheer</option>
    </select>
</template>


<style scoped>
.sign__selectjs {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    border: none;
    background: #2b2b31;
    width: 100%;
    height: 50px;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0 20px;
    transition: border 0.5s ease;
}

.sign__selectjs:hover {
    border-color: #ff55a5;
}

.sign__selectjs:focus {
    box-shadow: none;
}

.sign__selectjs .ss-single {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 44px;
    padding: 0;
    margin: 0 !important;
    color: #fff;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
}

.sign__selectjs .ss-arrow {
    width: 8px;
    height: 8px;
    margin: 3px 0 0 6px;
}

.sign__selectjs .ss-arrow path {
    stroke: #ff55a5;
}

.sign__selectjs .ss-search {
    padding: 0;
    margin-bottom: 15px;
    font-size: 12px;
    color: #c7c7c7;
    width: 100%;
}

.sign__selectjs .ss-search:last-child {
    margin-bottom: 0;
}

.sign__selectjs .ss-search input {
    padding: 0;
    background-color: transparent;
    color: #fff;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    height: 46px;
}

.sign__selectjs .ss-search input:focus {
    box-shadow: none;
}

.sign__selectjs .ss-search input::placeholder {
    color: #c7c7c7;
}

.sign__selectjs .ss-list {
    width: 100%;
}

.sign__selectjs .ss-list .ss-option {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    line-height: 38px;
    padding: 0;
    transition: 0.5s ease;
}

.sign__selectjs .ss-list .ss-option:hover {
    background-color: transparent;
    color: #ff55a5;
}

.sign__selectjs .ss-list .ss-option.ss-selected {
    background-color: transparent !important;
    color: #ff55a5 !important;
}

.sign__selectjs .ss-values .ss-placeholder {
    color: #c7c7c7;
}

.sign__selectjs .ss-values .ss-value {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #28282d;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.sign__selectjs .ss-values .ss-value .ss-value-text {
    font-size: 14px;
    color: #fff;
    line-height: 30px;
    padding: 0 12px;
}

.sign__selectjs .ss-values .ss-value .ss-value-delete {
    width: 26px;
    height: 12px;
    border-color: #c7c7c7;
    padding: 0;
    margin-top: 1px;
}

.sign__selectjs .ss-values .ss-value .ss-value-delete svg {
    width: 6px !important;
    height: 6px;
    margin-left: 8px;
}

.sign__selectjs .ss-values .ss-value .ss-value-delete svg path {
    stroke: #ff5860;
}

.sign__selectjs.ss-content {
    flex-direction: column;
    align-items: flex-start;
    border: none;
    border-radius: 4px;
    min-width: 180px;
    height: auto;
    padding: 20px;
    background: #2b2b31;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
}

.sign__selectjs.ss-content:before {
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
</style>