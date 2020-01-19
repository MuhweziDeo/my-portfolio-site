<template>
  <div class="contact">
      <h1>Contact me</h1>
      <form class="form">
        <md-field>
            <label>Your Names</label>
            <md-input :required="true" v-model="names"></md-input>
        </md-field>

        <md-field>
            <label>Contact Email</label>
            <md-input :required="true" v-model="email"></md-input>
        </md-field>

        <md-field>
            <label>Subject</label>
            <md-input :required="true" v-model="subject"></md-input>
        </md-field>
        <md-field>
            <label>Message</label>
            <md-textarea md-counter="true" :required="true" v-model="message"></md-textarea>
        </md-field>
        <Button :click="send" text="Send"/>
      </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import Button from "../../shared/Button";
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
      components: {
          Button
      },
      data: () => {
          return {
            email: null,
            message: null,
            names: null,
            subject: null
          }
      },
      methods: {
          send() {
            //   console.log("ss")
            console.log(this.email);
          }
      }
  }
</script>

<style lang="scss" scoped>

.form {
    padding: 3rem;
}
.contact {
    padding: 4rem;
    h1 {
        text-align: center;
    }
}

.md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
