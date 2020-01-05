<template>
  <div class="projects md-elevation-10">
      <div class="projects__left">
          <h3>PORTOFOLIOS</h3>

          <h1>Latest Project</h1>

       <Button text="My Portfolios" />

      </div>

      <div class="projects__right md-elevation-4">
        <img  src="../../../img/d.jpg"/>
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
    $color: #f67280;
    .projects {
        display: flex;
        padding: 2rem;
        justify-content: space-evenly;
        flex-direction: column;
    }
    @include breakpoint(desktop) {
        .projects {
            padding: 5rem;
            flex-direction: row;
            &__left {
                display: flex;
                flex-direction: column;
                align-items: center;
                align-self: center;
                margin-right: 2rem;
                h3 {
                    color: $color;
                }
                h1 {
                    text-transform: uppercase;
                }
            }
            &__right {
                img {
                    width: 40rem;
                    cursor: pointer;
                }
            }
        }
    }

</style>

