<template>
  <div class="projects md-elevation-10">
      <div class="projects__left">
          <h3>PORTOFOLIOS</h3>

          <h1>Latest Project</h1>

       <Button text="My Portofolios" />

      </div>

      <div class="projects__right md-elevation-4">
        <img  src="../../img/d.jpg"/>
      </div>
      
  </div>
</template>

<script>
 import Button from "../shared/Button";
export default {
    components: {
        Button
    }

}
</script>

<style lang="scss" scoped>
$color: #f67280;
.projects {
    display: flex;
    padding: 5rem;
    justify-content: space-evenly;
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
        }
    }
}
</style>

