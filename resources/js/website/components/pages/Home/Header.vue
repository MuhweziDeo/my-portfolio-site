<template>
    <div class="header">
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="header__left">
            <div class="header text">
                <h3 class="text--1">HELLO,</h3>
                <h3 class="text--2">IAM MUHWEZI DEO</h3>
            </div>
            <div class="header job">
                <h1>FullStack Engineer</h1>
            </div>
            <h4 class="header intro">I  Love to Play Games and Code</h4>
            <div class="header__call-to-action">
                <Button btn-class="header hire-me" text="Hire Me" />
                <Button textColor="#f67280" btn-class="header__button" buttonColor="#f67280" text="Get CV" />
            </div>
        </div>

        <div class="header__right">
            <img class="img" src="../../../img/39124174.png" alt="No Image" />
            <div class="social md-elevation-4">
           <md-icon class="fa fa-facebook"></md-icon>
           <md-icon class="fa fa-github"></md-icon>
           <md-icon class="fa fa-linkedin"></md-icon>
           <md-icon class="fa fa-google"></md-icon>
        </div>
        </div>
    </div>
</template>


<script>
    import Button from "../../shared/Button";

    export default {
        components: {
            Button
        }
    }

</script>

<style lang="scss" scoped>
    @import "../../../css/variables";

    .header {
        &__button {
            border: .1rem solid #f67280;
            color: red;
            background: white;
            width: 10rem;
        }
        .intro {
            font-weight: 300;
            color: grey;
        }

        .social {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            border-radius: 45px;
            width: 100%;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            cursor: pointer;
            margin-top: 1rem;
        }

        .hire-me {
            width: 10rem;
            margin-top: -.6rem;
            margin-left: -.2rem;
        }

    }

    @include breakpoint(desktop) {
        .header {
            display: flex;
            align-items: center;
            justify-items: flex-end;
            transform: translateY(30%);

            .text {
                display: flex;
                justify-content: flex-start;
                word-spacing: 0.2rem;

                &--1 {
                    color: #f67280;
                    margin-right: .4rem;
                }

            }

            .intro {
                font-weight: 300;
                color: grey;
            }

            .job {
                font-size: .7rem;
                text-transform: uppercase;
            }

            &__left {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                align-self: center;
            }

            &__call-to-action {
                display: flex;
                justify-content: flex-start;
            }

            &__right {

                .img {
                    width: 100%;
                    padding-left: 10rem;
                }

            }
            .social {
                display: flex;
                justify-content: space-between;
                padding: 1rem;
                border-radius: 45px;
                width: 45%;
                transform: translateX(38rem) translateY(-5rem);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                cursor: pointer;

            }

            .fa {
                cursor: pointer;
                color: #f67280;
            }
            .fa.fa-facebook {
                border-radius: 45px;
            }

        }
    }


</style>
