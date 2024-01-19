<template>
    <div class="container">
        <!-- code here -->
        <div class="card">
            <div class="card-img skeleton">
                
            </div>
            <div class="card-body">
                <h2 class="card-title skeleton">   
                </h2>
                <p class="card-intro skeleton">
                </p>
            </div>
        </div>
    </div>
</template>


<style scoped>

.card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20%;
    background-color: #000;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
}

.card-img {
    padding-bottom: 56.25%;
    position: relative;
}

.card-img img {
    position: absolute;
    width: 100%;
}

.card-body {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.25rem;
    line-height: 1.33;
    font-weight: 700;
}

.card-title.skeleton {
    min-height: 28px;
    border-radius: 4px;
}

.card-intro {
    margin-top:

        0.75rem;
    line-height: 1.5;
}

.card-intro.skeleton {
    min-height: 72px;
    border-radius: 4px;
}

.skeleton {
    background-color: #000;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: shine 1s ease infinite;
}

@keyframes shine {
    to {
        background-position: right -40px top 0;
    }
}


</style>