<template lang="html">
  <md-sidenav class="md-left Sidebar__Wrapper"
    v-on:open="lockBodyScroll"
    v-on:close="unlockBodyScroll"
    ref="leftSidenav">
    <md-toolbar class="md-account-header">
      <md-list class="md-transparent">
        <md-list-item class="md-avatar-list">
          <md-avatar class="md-large">
            <img src="https://placeimg.com/64/64/people/8"
              alt="People">
          </md-avatar>

          <span style="flex: 1"></span>

          <md-avatar>
            <img src="https://placeimg.com/40/40/people/3"
              alt="People">
          </md-avatar>

          <md-avatar>
            <img src="https://placeimg.com/40/40/people/4"
              alt="People">
          </md-avatar>
        </md-list-item>

        <md-list-item>
          <div class="md-list-text-container">
            <span>John Doe</span>
            <span>johndoe@email.com</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-toolbar>

    <md-list>
      <md-list-item v-for="item in menuList">
        <md-icon>{{ item.icon }}</md-icon>
        <span>{{ item.text }}</span>
        <md-list-expand v-if="item.sub">
          <md-list>
            <md-list-item class="md-inset"
              v-for="sub in item.sub">
              <md-icon v-if="sub.icon">{{ sub.icon }}</md-icon>
              <span v-if="sub.text">{{ sub.text }}</span>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script type="text/javascript">
  export default {
    props: {
      menuList: {
        type: Array,
        default() {
          return [
            { text: 'Favoritos', icon: 'favorite', url: '' },
            { text: 'Configs', icon: 'settings', url: '', sub: [
              { text: 'Rowing', icon: 'rowing', url: '' },
              { text: 'Ethernet', icon: 'settings_ethernet', url: '' },
            ] },
            { text: 'delta', icon: 'change_history', url: '' },
          ];
        },
      },
    },
    methods: {
      toggle() {
        this.$refs.leftSidenav.toggle();
      },
      lockBodyScroll() {
        document.body.style.overflowY = 'hidden';
      },
      unlockBodyScroll() {
        document.body.style.overflowY = 'auto'
      },
    },
  };
</script>

<style>
  .Sidebar__Wrapper {}

  .Sidebar__Wrapper.md-sidenav.md-active .md-sidenav-content,
  .Sidebar__Wrapper.md-sidenav.md-active .md-sidenav-backdrop {
    height: 100% !important;
    max-height: 100vh !important;
    position: fixed !important;
  }
</style>
