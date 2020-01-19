<template>
    <md-button
    @click="click"
    :class="['btn',btnClass]"
    :style="{'background-color': setButtonColor, color: setTextColor}"
    > {{text}}</md-button>
</template>

<script>
export default {
    props: {
        text: {type: String},
        buttonColor: {type: String},
        textColor: {type: String},
        btnClass: {type: String},
        click: {
            type: Function,
            required: false,
            default: function() {
                return () => {}
            }
        }
    },
    computed: {
        setButtonColor: function() {
            if(!this.buttonColor) {
                return "#f67280"
            }
        },
        setTextColor: function() {
            if(!this.textColor) {
                return "white"
            }
        },

    }
}
</script>

<style lang="scss" scoped>
.btn {
    border-radius: 4.5rem;
    width: 12rem;
    color: white;
    height: 3rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    text-transform: none;

}


</style>
