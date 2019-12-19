<template>
    <div class="content">
        <Header />
        <WhatIDo />
        <Skills />
    </div>
</template>

<script>
    import Header from "./shared/Header";
    import WhatIDo from "./shared/WhatIDo";
    import Skills from "./shared/Skills";

    export default {
        components: {
            Header,
            WhatIDo,
            Skills
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
