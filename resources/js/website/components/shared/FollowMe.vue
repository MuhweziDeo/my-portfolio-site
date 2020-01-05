<template>
    <div :class="[followClass, 'follow md-elevation-8']">
        <div class="follow__text">
            <h3>Follow me on: </h3>
        </div>
        <div class="follow__icons">
            <md-icon class="fa fa-facebook"></md-icon>
            <md-icon class="fa fa-github"></md-icon>
            <md-icon class="fa fa-linkedin"></md-icon>
            <md-icon class="fa fa-google"></md-icon>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            followClass: {
                type: String
            }
        }
    }

</script>

<style lang="scss" scoped>
    $color: #f67280;

    .follow {
        border-radius: 45px;
        color: $color;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: .3rem;
        width: 100%;

        &__icons {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 1.2rem; 
        }
    }

</style>
