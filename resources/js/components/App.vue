<template>
<div class="content">
<Header/>
</div>
</template>

<script>
import Header from "./shared/Header";

export default {
components: {
    Header
}    
}
</script>

<style>
* {
    padding: 0;
    /* margin: 0; */
}
body{
background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

height: 100vh;

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