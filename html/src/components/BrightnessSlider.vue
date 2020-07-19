<template>
  <div class="brightnessSlider">
    <input type="range" :style="cssVars" class="brightness" min="0" max="255" id="formControlRange" v-bind:value="value"
      v-on:change="$emit('input', $event.target.value)"> {{ value }}
  </div>
</template>

<script>
export default {
  name: 'BrightnessSlider',
  props: [ 'value' ],
  computed: {
    cssVars() {
      return {
        '--background': (this.$store.state.leds.singleHue /255 * 360)
      }
    }
  }
}
</script>

<style>
input[type=range].brightness {
  outline: 0;
  -webkit-appearance: none;
  width: 400px;
  height: 4px;
  background: linear-gradient(to right, hsl(var(--background), 100%, 50%) 0%, hsl(var(--background), 100%, 100%) 100%);
}
</style>