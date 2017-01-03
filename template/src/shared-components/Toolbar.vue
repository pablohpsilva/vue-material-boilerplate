<template lang="html">
  <md-toolbar>
    <md-button class="md-icon-button"
      @click="toggleSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">Exemplo de título na toolbar</h2>

    <md-button class="md-icon-button">
      <md-icon>notifications_none</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
  export default {
    methods: {
      toggleSidenav() {
        this.$emit('TOGGLE_SIDEBAR');
      },
    },
  };
</script>
