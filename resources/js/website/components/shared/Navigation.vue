<template>
    <div>

    <md-button @click="showNav" v-if="!show" class="nav md-fab md-fixed md-fab-top-right">
        <md-icon>menu</md-icon>
    </md-button>
    <div id="myNav" v-bind:style="{ width: !show ? '0%' : '100%' }" class="overlay">

    <a href="javascript:void(0)" class="closebtn" @click="showNav">&times;</a>

    <div class="overlay-content">
        <router-link to="/">Home</router-link>
        <a href="#">Services</a>
        <router-link to="/about">About me</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>

    </div>
    </div>
</template>

<script>
export default {
    beforeCreate() {  },
    data: function() {
      return {
        show: false
      }
    },
    methods: {
        showNav() {
            this.show = !this.show;
        }
    },
    watch: {
    $route (to, from) {
        this.show = false;
        }
    }
}
</script>

<style scoped>
.nav{
    background: #f67280;
    color: white;
}

/* credits w3 skills */

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 2rem;
  text-decoration: none;
  font-size: 36px;
  color: #f67280;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
