<template lang="html">
  <md-sidenav class="md-left"
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

    <md-list v-if="menuList && menuList.length">
      <md-list-item class="md-primary"
        v-for="(menuItem, index) in menuList"
        @click="toggle">
        <md-icon>access_time</md-icon>
        <span>item</span>
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
            { text: 'Favoritos', icon: 'start' },
            { text: 'Apagados', icon: 'delete' },
          ];
        },
      },
    },
    methods: {
      toggle() {
        this.$refs.leftSidenav.toggle();
      },
    },
  };
</script>
