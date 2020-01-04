<template>
    <div class="skills container">
        <div class="skills__header">
            <h2>Expertise</h2>
            <h1>Special Skills</h1>
        </div>

        <div class="skills__content">
            <div class="skills__content--left">

                <md-card md-with-hover>
                    <md-card-header>
                        <md-card-header-text class="skill">

                            <div class="md-title skill__level">
                                <Progress progressClass="progress-60" percentage="60"/>
                                <p>Front-End Development</p>
                                </div>
                            <div class="md-subhead skill__name">Bild your front end application using latest technology such as Vue Js, React Js and Angular</div>
                        </md-card-header-text>
                    </md-card-header>
                </md-card>

                <md-card md-with-hover>
                    <md-card-header>
                        <md-card-header-text class="skill">

                            <div class="md-title skill__level">
                                <Progress progressClass="progress-60" percentage="60"/>
                                <p>Backend Developemnt</p>
                            </div>
                            <div class="md-subhead skill__name">Build Scalable backend applications using Node Js, Laravel and Python</div>
                        </md-card-header-text>
                    </md-card-header>
                </md-card>

                <md-card md-with-hover>
                    <md-card-header>
                        <md-card-header-text class="skill">

                            <div class="md-title skill__level">
                                 <Progress progressClass="progress-45" percentage="50"/>
                                 <p>Mobile Developemnt</p>
                            </div>
                            <div class="md-subhead skill__name">Develop Cross platform Mobile applications using React Native and Fluter</div>
                        </md-card-header-text>
                    </md-card-header>
                </md-card>
            </div>

            <div class="skills__content--right">
                <md-card md-with-hover>
                    <md-card-header>
                        <md-card-header-text class="skill">
                             <div class="md-title skill__level">
                                 <Progress progressClass="progress-45" percentage="40"/>
                                 <p>Desktop Applications</p>
                            </div>
                            <div class="md-subhead skill__name">Build cross platform desktop applications that can run across Mac, Linux and windows</div>
                        </md-card-header-text>
                    </md-card-header>
                </md-card>

                <md-card md-with-hover>
                    <md-card-header>
                        <md-card-header-text class="skill">
                            <div class="md-title skill__level">
                                 <Progress progressClass="progress-60" percentage="70"/>
                                 <p>Deployment</p>
                            </div>
                            <div class="md-subhead skill__name">Deploy your application to shared hosting platforms like Cpanel or Dedicated Servers Like Heroku</div>
                        </md-card-header-text>
                    </md-card-header>
                </md-card>

                <md-card md-with-hover>
                    <md-card-header>
                        <md-card-header-text class="skill">
                            <div class="md-title skill__level">
                                 <Progress progressClass="progress-60" percentage="70"/>
                                 <p>API Integration</p>
                            </div>
                            <div class="md-subhead skill__name">Intergrate APIs like Google Maps, Payment, SMS to easily power and more functionality to your web or mobile application</div>
                        </md-card-header-text>
                    </md-card-header>
                </md-card>
            </div>
        </div>
    </div>

</template>

<script>
    import FollowMe from "../../shared/FollowMe";
    import Progress  from "../../shared/CircularProgress";

    export default {
        components: {
            FollowMe,
            Progress
        }
    }

</script>

<style lang="scss" scoped>
    p {
        font-size: 1rem;
    }
    .md-card {
        width: 20rem;
        padding: .8rem;
        margin: 1rem;
    }
    .skill {
        &__level {
            display: flex;
            align-items: center;
        }
    }
    .skills {

        margin-top: 5rem;

        &__header {
            text-align: center;
            h2 {
                color: #f67280;
            }
        }

        &__content {

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &--right {
                display: flex;

            }

            &--left {
                display: flex;
            }
        }
    }

</style>
