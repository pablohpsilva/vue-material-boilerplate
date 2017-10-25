<template>
  <md-sidenav
    ref="leftSidenav"
    v-on:open="lockBodyScroll"
    v-on:close="unlockBodyScroll"
    class="md-left Sidebar__Wrapper">
    <md-toolbar
      class="md-account-header">
      <md-list
        class="md-transparent">
        <md-list-item
          class="md-avatar-list">
          <md-avatar
            class="md-large">
            <img
              src="https://placeimg.com/64/64/people/8"
              alt="People">
          </md-avatar>

          <span
            style="flex: 1"></span>

          <md-avatar>
            <img
              src="https://placeimg.com/40/40/people/3"
              alt="People">
          </md-avatar>

          <md-avatar>
            <img
              src="https://placeimg.com/40/40/people/4"
              alt="People">
          </md-avatar>
        </md-list-item>

        <md-list-item>
          <div
            class="md-list-text-container">
            <span>John Doe</span>
            <span>johndoe@email.com</span>
          </div>

          <md-button
            class="md-icon-button md-list-action">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-toolbar>

    <md-list>
      <md-list-item
        v-for="(item, index) in menuList"
        :key="index">
        <md-icon></md-icon>
        <span></span>
        <md-list-expand
          v-if="item.sub">
          <md-list>
            <md-list-item
              v-for="(sub, index) in item.sub"
              :key="index"
              class="md-inset">
              <md-icon
                v-if="sub.icon"></md-icon>
              <span
                v-if="sub.text"></span>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>

<script>
  export default {
    props: {
      menuList: {
        type: Array,
        default() {
          return [
            {
              text: 'Favoritos',
              icon: 'favorite',
              url: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
            },
            {
              text: 'Configs',
              icon: 'settings',
              url: '',
              sub: [
                {
                  text: 'Rowing',
                  icon: 'rowing',
                  url: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
                },
                {
                  text: 'Ethernet',
                  icon: 'settings_ethernet',
                  url: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
                },
              ]
            },
            {
              text: 'delta',
              icon: 'change_history',
              url: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
            }
          ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    methods: {
      toggle() {
        this.$refs.leftSidenav.toggle(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
      lockBodyScroll() {
        document.body.style.overflowY = 'hidden'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
      unlockBodyScroll() {
        document.body.style.overflowY = 'auto'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
  .Sidebar__Wrapper.md-sidenav.md-active .md-sidenav-content,
  .Sidebar__Wrapper.md-sidenav.md-active .md-sidenav-backdrop {
    height: 100% !important;
    max-height: 100vh !important;
    position: fixed !important;
  }
</style>
