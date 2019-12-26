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
    import Header from "./views/Header";
    import WhatIDo from "./views/WhatIDo";
    import Skills from "./views/Skills";
    import Projects from "./views/Projects";
    import MyStacks from "./views/Technologies";
    import Footer from './shared/Footer.vue';
    import Repos from "./views/Repos";
    import HireMe from "./views/HireMe";
    
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
