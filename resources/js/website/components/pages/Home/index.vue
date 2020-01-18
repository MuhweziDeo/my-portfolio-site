<template>
    <div>
        <Header />
        <WhatIDo />
        <Skills />
        <Projects/>
        <MyStacks/>
        <Slider/>
        <HireMe/>
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
    import Slider from "./Testimonial";

    export default {
        components: {
            Header,
            WhatIDo,
            Skills,
            Projects,
            MyStacks,
            Footer,
            Repos,
            HireMe,
            Slider
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



</style>
