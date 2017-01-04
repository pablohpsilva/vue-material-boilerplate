<template lang="html">
  <div class="RangeCustom__Wrapper">
    <input type="range" :max="max" :min="min" step="1" v-model="myval"/>
    <span>Current value is: {{ myval }}</span>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'RangeCustom',
    props: {
      max: {
        type: Number,
        default: 10,
      },
      min: {
        type: Number,
        default: 0,
      },
      defaultValue: {
        type: Number,
        default: 4,
      },
    },
    data() {
      return {
        myval: this.defaultValue + 0,
      };
    },
  };
</script>

<style scoped>
  .RangeCustom__Wrapper { /* nice CSS */ }
</style>
