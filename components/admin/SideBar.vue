<template>
    <!-- sidebar -->
    <div class="sidebar">
        <!-- sidebar logo -->
        <a href="index.html" class="sidebar__logo">
            <img src="/img/logo.svg" alt="">
        </a>
        <!-- end sidebar logo -->

        <!-- sidebar user -->
        <div class="sidebar__user">
            <div class="sidebar__user-img">
                <img src="/img/user.svg" alt="">
            </div>

            <div class="sidebar__user-title">
                <span>Admin</span>
                <p>John Doe</p>
            </div>

            <button class="sidebar__user-btn" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z">
                    </path>
                </svg>
            </button>
        </div>
        <!-- end sidebar user -->

        <!-- sidebar nav -->
        <ul class="sidebar__nav">
            <li class="sidebar__nav-item">
                <nuxt-link to="/admin" href="index.html" class="sidebar__nav-link"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z" />
                    </svg> Dashboard
                </nuxt-link>
            </li>

            <li class="sidebar__nav-item">
                <nuxt-link to="/admin/movies" class="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21,2a1,1,0,0,0-1,1V5H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V5H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,2,0V19H6v2a1,1,0,0,0,2,0V20h8v1a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2ZM6,17H4V15H6Zm0-4H4V11H6ZM6,9H4V7H6Zm10,9H8V13h8Zm0-7H8V6h8Zm4,6H18V15h2Zm0-4H18V11h2Zm0-4H18V7h2Z" />
                    </svg> Movies
                </nuxt-link>
            </li>

            <li class="sidebar__nav-item">
                <nuxt-link to="/admin/users" class="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z" />
                    </svg> Users
                </nuxt-link>
            </li>

            <li class="sidebar__nav-item">
                <nuxt-link to="/admin/orders" class="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M20.61,19.19A7,7,0,0,0,17.87,8.62,8,8,0,1,0,3.68,14.91L2.29,16.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,18H8.69A7,7,0,0,0,15,22h6a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09ZM8,15a6.63,6.63,0,0,0,.08,1H5.41l.35-.34a1,1,0,0,0,0-1.42A5.93,5.93,0,0,1,4,10a6,6,0,0,1,6-6,5.94,5.94,0,0,1,5.65,4c-.22,0-.43,0-.65,0A7,7,0,0,0,8,15ZM18.54,20l.05.05H15a5,5,0,1,1,3.54-1.46,1,1,0,0,0-.3.7A1,1,0,0,0,18.54,20Z" />
                    </svg> Orders 
                </nuxt-link>
            </li>

            <li class="sidebar__nav-item">
                <a href="reviews.html" class="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                        <path
                            d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z M15.8,13.6c-0.2,0.2-0.3,0.6-0.3,0.9l0.7,4.2l-3.8-2c-0.1-0.1-0.3-0.1-0.5-0.1V5.7l1.9,3.8c0.1,0.3,0.4,0.5,0.8,0.5l4.2,0.6L15.8,13.6z" />
                    </svg> Reviews</a>
            </li>

            <!-- dropdown -->
            <li class="sidebar__nav-item">
                <a class="sidebar__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V6H6A3,3,0,0,0,3,9V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM15,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H7v7a3,3,0,0,0,3,3h5Zm4-4a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z" />
                    </svg> Pages</a>

                <ul class="dropdown-menu sidebar__dropdown-menu scrollbar-dropdown">
                    <li><a href="add-item.html">Add item</a></li>
                    <li><a href="edit-user.html">Edit user</a></li>
                    <li><a href="signin.html">Sign In</a></li>
                    <li><a href="signup.html">Sign Up</a></li>
                    <li><a href="forgot.html">Forgot password</a></li>
                    <li><a href="404.html">404 Page</a></li>
                </ul>
            </li>
            <!-- end dropdown -->
        </ul>
        <!-- end sidebar nav -->

        <!-- sidebar copyright -->
        <div class="sidebar__copyright">© FlixGo, 2018—2023. <br>Create by <a
                href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank" rel="noopener">Dmitry
                Volkov</a>.</div>
        <!-- end sidebar copyright -->
    </div>
    <!-- end sidebar -->
</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #28282d;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 101;
    width: 280px;
    transform: translate3d(-280px, 0, 0);
    transition: 0.5s ease;
    box-shadow: none;
}

.sidebar--active {
    transform: translate3d(0, 0, 0);
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
}

.sidebar__logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    min-height: 70px;
    padding: 0 30px;
    background-color: #28282d;
    width: 100%;
    position: relative;
}

.sidebar__logo:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    display: block;
    background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
    pointer-events: none;
}

.sidebar__logo img {
    width: 100%;
    max-width: 100px;
    display: block;
}

.sidebar__logo:hover {
    background-color: #2b2b31;
}

.sidebar__user {
    padding: 20px 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.sidebar__user-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 12px;
}

.sidebar__user-img img {
    width: 100%;
}

.sidebar__user-title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.sidebar__user-title p {
    color: #fff;
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 0;
}

.sidebar__user-title span {
    display: block;
    font-family: 'Open Sans', sans-serif;
    color: #c7c7c7;
    font-size: 10px;
    line-height: 16px;
}

.sidebar__user-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    margin-left: auto;
}

.sidebar__user-btn svg {
    fill: #fff;
    width: 24px;
    height: 24px;
}

.sidebar__user-btn:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
}

.sidebar__nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    padding: 30px;
    width: 100%;
}

.sidebar__nav-link {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    height: 36px;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
}

.sidebar__nav-link svg {
    width: 18px;
    height: auto;
    margin-right: 12px;
    fill: #fff;
}

.sidebar__nav-link:hover,
.sidebar__nav-link[aria-expanded="true"] {
    color: #ff55a5;
}

.sidebar__nav-link:hover svg,
.sidebar__nav-link[aria-expanded="true"] svg {
    fill: #ff55a5;
}

.sidebar__nav-link--active {
    color: #ff55a5;
    cursor: default;
}

.sidebar__nav-link--active svg {
    fill: #ff55a5;
}

.router-link-active {
    color: #ff55a5;
    cursor: default;
}

.router-link-active svg{
    fill: #ff55a5;
}


.sidebar__nav-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
}

.sidebar__nav-item:last-child {
    margin-bottom: 0;
}

.sidebar__dropdown-menu {
    position: absolute;
    background-color: #2b2b31;
    padding: 20px;
    display: flex !important;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 180px;
    z-index: -1;
    pointer-events: none;
    opacity: 0;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
    transition: 0.5s ease;
    margin-top: -10px;
    top: 100%;
    border-radius: 4px;
    overflow: hidden;
    border: none;
}

.sidebar__dropdown-menu:before {
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

.sidebar__dropdown-menu li {
    width: 100%;
    margin-bottom: 10px;
}

.sidebar__dropdown-menu li:last-child {
    margin-bottom: 0;
}

.sidebar__dropdown-menu a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    height: 30px;
    width: 100%;
    font-weight: 400;
}

.sidebar__dropdown-menu a:hover {
    color: #ff55a5;
}

.sidebar__dropdown-menu.show {
    z-index: 1000;
    pointer-events: auto;
    opacity: 1;
    margin-top: 0;
}

.sidebar__copyright {
    margin-top: auto;
    padding: 0 30px 20px;
    color: #c7c7c7;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
}

.sidebar__copyright a {
    color: #c7c7c7;
}

.sidebar__copyright a:hover {
    text-decoration: underline;
}

@media (min-width: 1200px) {
    .sidebar {
        transform: translate3d(0, 0, 0);
        box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
    }

    .sidebar__logo {
        height: 80px;
    }
}</style>