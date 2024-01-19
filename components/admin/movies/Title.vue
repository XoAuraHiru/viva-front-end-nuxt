<template>
    <!-- main title -->
    <div class="col-12">
        <div class="main__title">
            <h2>Catalog</h2>

            <span class="main__title-stat">14,452 Total</span>

            <div class="main__title-wrap">
                <select class="filter__select" name="sort" id="filter__sort">
                    <option value="0">Date created</option>
                    <option value="1">Rating</option>
                    <option value="2">Views</option>
                </select>

                <!-- search -->
                <form action="#" class="main__title-form">
                    <input type="text" placeholder="Find movie / tv series..">
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                            </path>
                        </svg>
                    </button>
                </form>
                <!-- end search -->
            </div>
        </div>
    </div>
    <!-- end main title -->
</template>



<style lang="scss" scoped></style>