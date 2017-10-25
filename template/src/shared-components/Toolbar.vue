<template>
  <md-toolbar>
    <md-button
      v-show="!hideMenu"
      @click="toggleSidenav"
      class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>

    <h2
      class="md-title"
      style="flex: 1">
    </h2>

    <md-button
      v-for="(option, index) in options"
      :key="index"
      class="md-icon-button">
      <md-icon></md-icon>
    </md-button>

  </md-toolbar>
</template>

<script>
  export default {
    props: {
      hideMenu: {
        type: Boolean,
        default() { return false; }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      title: {
        type: String,
        default() { return ''; }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      options: {
        type: Array,
        default() { return []; }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    data() {
      return {
        progress: 0,
        progressInterval: null,
        done: false,
        transition: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      };
    },
    components: {
    },
    methods: {
      toggleSidenav() {
        this.$emit('TOGGLE_SIDEBAR'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style media="screen">

</style>
