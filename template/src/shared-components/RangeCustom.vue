<template lang="html">
  <div class="RangeCustom__Wrapper">
    <input
      v-model="myval"
      :max="max"
      :min="min"
      type="range"
      step="1"/>
    <span>
      Current value is:
    </span>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'RangeCustom'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    props: {
      max: {
        type: Number,
        default: 10{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      min: {
        type: Number,
        default: 0{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      defaultValue: {
        type: Number,
        default: 4{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    data() {
      return {
        myval: this.defaultValue + 0{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
