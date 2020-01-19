<template>
<div class="container">
    <h1 class="heading">About me</h1>
  <div class="about">
      <div class="left">
          <img class="" src="../../../img/Muhwezi Deo_2.png"/>
      </div>
      <div class="right">
    <md-tabs class="md-transparent">
        <md-tab id="tab-home" class="md-active" md-label="Me">
            <p>Hi, I'm Muhwezi Deo a freelance Software Developer with an eye for solving problems. I like working on both backend and Frontend but these days I really like working on the frontend
                Iam mainly work with Javascript and PHP but really open to learning new languages. I have worked in the past with Python and can easily work in a team or freelance.
          .</p>
        </md-tab>
        <md-tab id="tab-pages" md-label="Where Iam From">
            <p>I currently stay in the country normally known as the pearl of Africa Uganda.</p>
            <p>I like my Country because of the good weather and the ever growing Tech Scene. I have lived in Uganda for most of my life and always dream of atleast travelling to the US or UK.</p>

        </md-tab>
        <md-tab id="tab-posts" md-label="Education">
            <p>I hold a Bachelors Degree in Informations Systems which I attained in the year 2018 from Makerere University</p>
        </md-tab>
        <md-tab id="tab-favorites" md-label="Hobbies">
            <p>Personally most of time Iam coding so I would say coding is my hobby.</p>
            <p>Any ways below are some of the things I enjoy doing on a daily</p>
            <ul>
                <li>Gaming</li>
                <li>Streaming Youtube I mostly follow programming channels</li>
                <li>Football Iam a die hard arsenal fun</li>
                <li>Reading</li>
                <li>Movies and Series</li>
                <li>Travelling occassionaly</li>
            </ul>
        </md-tab>
        </md-tabs>
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
.heading {
    text-align: center;
    color: $color
}
.container {
    padding: 2rem;
}
.about {
    display: flex;
    padding: 3rem;
    justify-content: space-around;
    justify-items: center;
    // align-items: center;
    .left {
        img {
            width: 150rem;
            padding: 2rem;
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
        }
    }
}
</style>>

