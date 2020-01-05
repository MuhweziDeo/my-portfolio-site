<template>
    <div class="do container md-elevation-24">
        <div class="do__header">
            <h1>What I Do</h1>
            <h2>Specializing In</h2>
        </div>

        <div class="do__content">
            <div class="do__job--left">
                <div class="do__item">
                    <div class="icon">
                        <img src="../../../img/code.svg" alt="">
                    </div>

                    <div class="text">
                        <h2>Web Developement</h2>
                        <p>Build your Backend and Frontend for your application using the latest Technologies</p>
                    </div>
                </div>

                 <div class="do__item">
                    <div class="icon">
                        <img src="../../../img/development.svg" alt="">
                    </div>

                    <div class="text">
                        <h2>Mobile App Developement</h2>
                        <p>Mobile app development using React Native. Soon to add Fluter.</p>
                    </div>
                </div>

                 <div class="do__item">
                    <div class="icon">
                        <img src="../../../img/font.svg" alt="">
                    </div>

                    <div class="text">
                        <h2>API Intergration</h2>
                        <p>Want to Integrate Payment API, Google API or anyother API</p>
                    </div>
                </div>

            </div>

            <div class="do__job--right">
                <div class="do__item">
                    <div class="icon">
                        <img src="../../../img/quality.svg" alt="">
                    </div>

                    <div class="text">
                        <h2>Desktop Apps Developement</h2>
                        <p>Building Cross Platform Desktop apps with Electron Js</p>
                    </div>
                </div>

                 <div class="do__item">
                    <div class="icon">
                        <img src="../../../img/diagram.svg" alt="">
                    </div>

                    <div class="text">
                        <h2>Deployment</h2>
                        <p>Deploy your site to shared hosting like Cpanel or Dedicated Servers Heroku</p>
                    </div>
                </div>

                 <div class="do__item">
                    <div class="icon">
                        <img src="../../../img/website.svg" alt="">
                    </div>

                    <div class="text">
                        <h2>DevOps Automation</h2>
                        <p>Still new to this but understand how to automate deployments using CI/CD tools like Travis</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    export default {

    }

</script>


<style lang="scss" scoped>
    @import "../../../css/variables";
    $color: #f67280;
    .do {
        .icon {
            img {
                width: 4rem;
            }
        }
        &__header {
            text-align: center;
            @include breakpoint(mobileonly) {
                padding: 2rem;
                margin-top: 2rem;
            }
            h1 {
                color: $color;
            }

            h2 {
                text-transform: uppercase;
            }
        }
        &__item {
            display: flex;
            align-items: center;
            padding: .8rem;
            flex-direction: column;
            .icon {
                padding: .6rem;
                border-radius: 45px;
                background: $color;
                margin-left: .2rem;
            }

            .text {
                font-weight: 300;
                color: grey;
                margin-left: 1.3rem;
                text-align: center;
            }
        }
    }
    @include breakpoint(desktop) {
        .do {
            .icon {
                img {
                    width: 4rem;
                }
            }

            &__content {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 2rem;
            }

            &__item {
                flex-direction: row;
                .text {
                    text-align: left;
                }
            }
        }

        .do.container {
            margin-top: 10rem;
            padding: 4rem;
        }
    }


</style>
