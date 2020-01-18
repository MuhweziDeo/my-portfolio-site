<template>
    <div class="content">
        <Nav />
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "./shared/Footer";
    import Nav from "./shared/Navigation";
    export default {
        components: {
            Footer,
            Nav
        }
    }

</script>

<style scoped>
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
