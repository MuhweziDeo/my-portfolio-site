<template>
<div class="set-size charts-container">
  <div :class="['pie-wrapper', progressClass]" >
    <span class="label">{{percentage}}<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
  </div>  
</div>
</template>

<script>
export default {
    props: {
      progressClass: {
        type: String,
        default: function() {
          return 'progress-45';
        }
      },
       percentage: {
          type: String,
          default: function() {
            return '45';  
          }
        }
    },
    computed: {
    

    }
}
</script>
<style lang="scss" scoped>
// Credits to https://codepen.io/vikassingh1111/pen/awKjeB

$color: #f67280;
*,
*:before,
*:after {
  box-sizing: border-box;
}
html,
body {
  background: #ecf0f1;
  color: #444;
  font-family: 'Lato', Tahoma, Geneva, sans-serif;
  font-size: 16px;
  padding: 10px;
}
.set-size {
  font-size: 3em;
}
.charts-container:after {
  clear: both;
  content: "";
  display: table;
}
.pie-wrapper {
  height: 1em;
  width: 1em;
  float: left;
  margin: 15px;
  position: relative;
}
.pie-wrapper:nth-child(3n+1) {
  clear: both;
}
.pie-wrapper .pie {
  height: 100%;
  width: 100%;
  clip: rect(0, 1em, 1em, 0.5em);
  left: 0;
  position: absolute;
  top: 0;
}
.pie-wrapper .pie .half-circle {
  height: 100%;
  width: 100%;
  border: 0.1em solid #3498db;
  border-radius: 50%;
  clip: rect(0, 0.5em, 1em, 0);
  left: 0;
  position: absolute;
  top: 0;
}
.pie-wrapper .label {
  background: #34495e;
  border-radius: 50%;
  bottom: 0.4em;
  color: #ecf0f1;
  cursor: default;
  display: block;
  font-size: 0.25em;
  left: 0.4em;
  line-height: 2.6em;
  position: absolute;
  right: 0.4em;
  text-align: center;
  top: 0.4em;
}
.pie-wrapper .label .smaller {
  color: #bdc3c7;
  font-size: .45em;
  padding-bottom: 20px;
  vertical-align: super;
}
.pie-wrapper .shadow {
  height: 100%;
  width: 100%;
  border: 0.1em solid #bdc3c7;
  border-radius: 50%;
}
.pie-wrapper.style-2 .label {
  background: none;
  color: #7f8c8d;
}
.pie-wrapper.style-2 .label .smaller {
  color: #bdc3c7;
}
.pie-wrapper.progress-30 .pie .right-side {
  display: none;
}
.pie-wrapper.progress-30 .pie .half-circle {
  border-color:$color;
}
.pie-wrapper.progress-30 .pie .left-side {
  transform: rotate(108deg);
}
.pie-wrapper.progress-60 .pie {
  clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-60 .pie .right-side {
  transform: rotate(180deg);
}
.pie-wrapper.progress-60 .pie .half-circle {
  border-color: $color;
}
.pie-wrapper.progress-60 .pie .left-side {
  transform: rotate(216deg);
}
.pie-wrapper.progress-90 .pie {
  clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-90 .pie .right-side {
  transform: rotate(180deg);
}
.pie-wrapper.progress-90 .pie .half-circle {
  border-color: $color;
}
.pie-wrapper.progress-90 .pie .left-side {
  transform: rotate(324deg);
}
.pie-wrapper.progress-45 .pie .right-side {
  display: none;
}
.pie-wrapper.progress-45 .pie .half-circle {
  border-color:$color;
}
.pie-wrapper.progress-45 .pie .left-side {
  transform: rotate(162deg);
}
.pie-wrapper.progress-75 .pie {
  clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-75 .pie .right-side {
  transform: rotate(180deg);
}
.pie-wrapper.progress-75 .pie .half-circle {
  border-color: $color;
}
.pie-wrapper.progress-75 .pie .left-side {
  transform: rotate(270deg);
}
.pie-wrapper.progress-95 .pie {
  clip: rect(auto, auto, auto, auto);
}
.pie-wrapper.progress-95 .pie .right-side {
  transform: rotate(180deg);
}
.pie-wrapper.progress-95 .pie .half-circle {
  border-color: $color;
}
.pie-wrapper.progress-95 .pie .left-side {
  transform: rotate(342deg);
}
.pie-wrapper--solid {
  border-radius: 50%;
  overflow: hidden;
}
.pie-wrapper--solid:before {
  border-radius: 0 100% 100% 0%;
  content: '';
  display: block;
  height: 100%;
  margin-left: 50%;
  transform-origin: left;
}
.pie-wrapper--solid .label {
  background: transparent;
}
.pie-wrapper--solid.progress-65 {
  background: linear-gradient(to right, #e67e22 50%, #34495e 50%);
}
.pie-wrapper--solid.progress-65:before {
  background: #e67e22;
  transform: rotate(126deg);
}
.pie-wrapper--solid.progress-25 {
  background: linear-gradient(to right, #9b59b6 50%, #34495e 50%);
}
.pie-wrapper--solid.progress-25:before {
  background: #34495e;
  transform: rotate(-270deg);
}
.pie-wrapper--solid.progress-88 {
  background: linear-gradient(to right, #3498db 50%, #34495e 50%);
}
.pie-wrapper--solid.progress-88:before {
  background: #3498db;
  transform: rotate(43.2deg);
}


</style>

