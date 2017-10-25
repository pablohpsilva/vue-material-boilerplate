<template lang="html">
  <div>
    <toolbar
      class="Home__PageTeller"
      :title="pageName"
      v-on:TOGGLE_SIDEBAR="toggleSidenav"/>

    <keep-alive>
      <transition
        name="slide-fade"
        mode="out-in">
        <router-view/>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  import Toolbar from '../shared-components/Toolbar';

  export default {
    name: 'Home',
    components: {
      Toolbar{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    computed: {
      pageName() {
        return this.$route.name{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
    },
    methods: {
      toggleSidenav() {
        this.$refs.sidenav.toggle(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
  .Home__PageTeller .md-title {
    text-transform: capitalize;
  }
</style>
