<template>
    <button type="button" class="plan__btn">
        <span>
            <slot/>
        </span>
    </button>
</template>


<style scoped>
.plan__btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 8px;
  border-color: #ff5860;
  border-width: 5px;
  background: transparent;
  box-shadow: 0 0 8px 0 rgba(255,88,96,0.3);
  position: relative;
}
.plan__btn:before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  border-radius: 8px;
  border-color: #ff5860;
  border-width: 5px;
  opacity: 1;
  transition: opacity 0.5s ease;
}
.plan__btn span {
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  position: relative;
  z-index: 2;
}
.plan__btn:hover {
  box-shadow: 0 0 16px 0 rgba(255,88,96,0.6);
}
.plan__btn:hover:before {
  opacity: 0;
}
</style>