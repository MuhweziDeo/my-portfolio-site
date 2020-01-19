<template>
    <div>

    <md-button @click="handleShowNav" v-if="!show" class="nav md-fab md-fixed md-fab-top-right">
        <md-icon>menu</md-icon>
    </md-button>
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
    props: {
        handleShowNav: {type: Function}
    },
    methods: {
        showNav() {
            this.$emit('clicked');
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
</style>
