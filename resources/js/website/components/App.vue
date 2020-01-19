<template>
    <div class="">
      <Nav :handleShowNav="showNav" />

    <md-drawer class="drawer" :md-fixed="true" :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">
              <router-link to="/">Home</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">
              <router-link to="/contact">Contact</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">
              <router-link to="/about">About me</router-link>
          </span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content class="content">
        <router-view></router-view>
        <Footer/>
    </md-content>
  </div>
</template>

<script>
    import Footer from "./shared/Footer";
    import Nav from "./shared/Navigation";
    export default {
        components: {
            Footer,
            Nav
        },
        data: () => ({
        showNavigation: false,
        showSidepanel: false
        }),
        methods: {
            showNav() {
                this.showNavigation = !this.showNavigation;
            }
        },
        watch: {
        $route (to, from) {
            this.showNavigation = false;
        }
        }
    }

</script>

<style lang="scss">
 @import "../css/_variables.scss";
 .md-content.md-theme-default {
     background-color: #fafafa;
 }
 .drawer {
     width: 1rem;
 }
.content {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 768px) {
        .content {
            width: 750px;
        }
    }

    @media (min-width: 992px) {
        .content {
            width: 970px;
        }
    }

    @media (min-width: 1200px) {
        .content {
            width: 1170px;
        }
    }
</style>
