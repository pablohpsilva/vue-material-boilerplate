<template lang="html">
  <div>
    <toolbar v-on:TOGGLE_SIDEBAR="toggleSidenav"></toolbar>

    <keep-alive>
      <transition name="slide-fade" mode="out-in">
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
    components: {
      Sidebar,
      Toolbar,
    },
    methods: {
      toggleSidenav() {
        this.$refs.sidenav.toggle();
      },
    },
  };
</script>
