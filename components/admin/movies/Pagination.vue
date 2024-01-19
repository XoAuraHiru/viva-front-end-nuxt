<template>
    <!-- paginator -->
    <div class="col-12">
        <div class="main__paginator">
            <!-- amount -->
            <span class="main__paginator-pages">Showing 10 of 169</span>
            <!-- end amount -->

            <ul class="main__paginator-list">
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                        </svg>
                        <span>Prev</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                        </svg>
                    </a>
                </li>
            </ul>

            <ul class="paginator">
                <li class="paginator__item paginator__item--prev">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                            viewBox="0 0 24 24">
                            <path
                                d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" />
                        </svg></a>
                </li>
                <li class="paginator__item"><a href="#">1</a></li>
                <li class="paginator__item paginator__item--active"><a href="#">2</a></li>
                <li class="paginator__item"><a href="#">3</a></li>
                <li class="paginator__item"><a href="#">4</a></li>
                <li class="paginator__item"><span>...</span></li>
                <li class="paginator__item"><a href="#">29</a></li>
                <li class="paginator__item"><a href="#">30</a></li>
                <li class="paginator__item paginator__item--next">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" />
                    </svg></a>
            </li>
        </ul>
    </div>
</div>
<!-- end paginator --></template>


<style lang="scss" scoped></style>