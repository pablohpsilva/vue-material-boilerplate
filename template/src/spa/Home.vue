<template lang="html">
  <div>
    <toolbar class="Home__PageTeller"
      :title="pageName"
      v-on:TOGGLE_SIDEBAR="toggleSidenav"></toolbar>

    <keep-alive>
      <transition name="slide-fade"
        mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>

    <sidebar ref="sidenav"></sidebar>
  </div>
</template>

<script>
  import Sidebar from '../shared-components/Sidebar';
  import Toolbar from '../shared-components/Toolbar';

  export default {
    name: 'Home',
    components: {
      Sidebar,
      Toolbar,
    },
    computed: {
      pageName() {
        return this.$route.name;
      },
    },
    methods: {
      toggleSidenav() {
        this.$refs.sidenav.toggle();
      },
    },
  };
</script>

<style>
  .Home__PageTeller .md-title {
    text-transform: capitalize;
  }
</style>
