<template>
    <div class="container">
        <h1 class="header">Testimonials</h1>
        <agile :autoplay-speed="5000" :autoplay="true">
            <div class="slide">
                <div class="slide__image">
                    <img width="400" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
                </div>

                <div class="slide__content">
                    <div class="slide__quote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos esse itaque magni molestiae nemo nulla repellat temporibus vel veniam!</p>

                    </div>
                    <div class="slide__info">
                        <p>Muhwezi Deo</p>
                        <p>Software Developer At Andela</p>
                        <div class="social">
                            <md-icon class="fa fa-facebook"></md-icon>
                            <md-icon class="fa fa-github"></md-icon>
                            <md-icon class="fa fa-linkedin"></md-icon>
                            <md-icon class="fa fa-google"></md-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="slide__image">
                    <img width="400" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
                </div>

                <div class="slide__content">
                    <div class="slide__quote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos esse itaque magni molestiae nemo nulla repellat temporibus vel veniam!</p>

                    </div>
                    <div class="slide__info">
                        <p>Muhwezi Deo</p>
                        <p>Software Developer At Andela</p>
                        <div class="social">
                            <md-icon class="fa fa-facebook"></md-icon>
                            <md-icon class="fa fa-github"></md-icon>
                            <md-icon class="fa fa-linkedin"></md-icon>
                            <md-icon class="fa fa-google"></md-icon>
                        </div>
                    </div>
                </div>
            </div>
        </agile>
    </div>

</template>

<script>
    import { VueAgile } from 'vue-agile'
    export default {
        components: {
            agile: VueAgile
        }
    }
</script>

<style lang="scss" scoped>
    @import "https://unpkg.com/vue-agile/dist/VueAgile.css";
    @import "../../../css/variables";

    @include breakpoint(desktop) {
        .header {
            text-align: center;
            color: $color;
        }

        .social {
            color: $color;
        }
        .slide {

            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
            padding: 2rem;

            &__content {
                display: flex;
                flex-direction: column;
                padding: 8rem;
            }

        }
        .social {
            display: flex;
            justify-content: space-between;
            margin-left: -4.4rem;
            .md-icon {
                cursor: pointer;
            }
        }
    }


</style>
