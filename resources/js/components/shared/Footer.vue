<template>
    <div>

        <div class="footer">
                <div class="social-icons md-elevation-4">
                    <md-icon class="fa fa-facebook"></md-icon>
                    <md-icon class="fa fa-github"></md-icon>
                    <md-icon class="fa fa-linkedin"></md-icon>
                    <md-icon class="fa fa-google"></md-icon>
                </div>
            <md-bottom-bar class="footer__nav">
                <md-bottom-bar-item md-label="Home" md-icon="home" @click="theme = 'teal'"></md-bottom-bar-item>
                <md-bottom-bar-item md-label="Blog" md-icon="pages" @click="theme = 'orange'"></md-bottom-bar-item>
                <md-bottom-bar-item md-label="Portofolio" md-icon="pages" @click="theme = 'blue'"></md-bottom-bar-item>
                <md-bottom-bar-item md-label="Contact me" md-icon="favorite"></md-bottom-bar-item>
            </md-bottom-bar>
            <md-button class="md-fab">
                <md-icon>chat</md-icon>
            </md-button>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            theme: 'teal'
        })
    }

</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
    $color: #f67280;

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__nav {
            color: white;
            box-shadow: none;
            flex: 3;
        }
        .social-icons {
            flex: 1;
            padding: 1rem;
            border-radius: 45px;
            display: flex;
            justify-content: center !important;
            text-align: center;
            color: $color;
        }

        .md-fab {
            color:white;
            background: $color;
        }

    }

</style>
