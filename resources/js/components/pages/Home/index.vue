<template>
    <div class="content">
        <Header />
        <WhatIDo />
        <Skills />
        <Projects/>
        <MyStacks/>
        <Repos/>
        <HireMe/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "./Header";
    import WhatIDo from "./WhatIDo";
    import Skills from "./Skills";
    import Projects from "./Projects";
    import MyStacks from "./Technologies";
    import Footer from '../../shared/Footer.vue';
    import Repos from "./Repos";
    import HireMe from "./HireMe";

    export default {
        components: {
            Header,
            WhatIDo,
            Skills,
            Projects,
            MyStacks,
            Footer,
            Repos,
            HireMe
        }
    }

</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    body {
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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
