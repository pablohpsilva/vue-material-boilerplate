<template lang="html">
  <div class="Typeahead__Wrapper">
    <input class="md-input"
      v-model="query"
      autocomplete="off"
      type="text"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.enter="hit"
      @keydown.esc="reset"
      @blur="onBlur"
      @focus="onFocus"
      @input="update"/>

    <md-button class="md-icon-button Typeahead__IconButton"
      v-if="hasSearchButton"
      @click="callFetch">
      <md-icon>{{searchIcon}}</md-icon>
    </md-button>

    <ul class="md-list md-theme-default Typeahead__List"
      v-show="hasItems">
      <li class="md-list-item md-menu-item md-option Typeahead__Item"
        :class="activeClass(index)"
        v-for="(item, index) in items"
        @mousedown="hit"
        @mousemove="setActive(index)">
        <md-button @click.native="hit"
          @mousemove="setActive(index)">
          {{item.name}}
        </md-button>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import { util } from 'vue';
  import { getClosestVueParent } from '../common/functions/helpers';

  export default {
    name: 'MdTypeahead',
    props: {
      url: {
        type: String,
        default() { return 'https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search'; },
      },
      queryParam: {
        type: String,
        default() { return 'q'; },
      },
      minChars: {
        type: Number,
        default() { return 3; },
      },
      fetchFunction: {
        type: Function,
      },
      hasSearchButton: {
        type: Boolean,
        default() { return false; },
      },
      searchIcon: {
        type: String,
        default() { return 'search'; },
      },
    },
    data() {
      return {
        items: [],
        query: '',
        current: -1,
        loading: false,
        selectFirst: false,
        selected: null,
      };
    },

    computed: {
      hasItems() {
        return this.items.length > 0
      },

      isEmpty() {
        return !this.query
      },

      isDirty() {
        return !!this.query
      },
      parentContainer() {
        if (this.$parent) {
          return getClosestVueParent(this.$parent, 'md-input-container');
        }
        util.warn('You need to use this component wrapped in a \'md-input-container\' component. Material Design guide.', this);
      },
      hasSelected() {
        return !!(this.selected && this.query.length);
      },
      selectedText() {
        return this.selected ?
          (this.selected.name || this.selected.nome || this.selected.title) :
          '';
      },
    },

    watch: {
      query(value) {
        this.setParentValue(value);
      },
    },

    methods: {
      update() {
        if (!this.query) {
          return this.reset();
        }

        if (this.minChars && this.query.length < this.minChars) {
          return;
        }

        this.loading = true;

        this.callFetch();
      },

      callFetch() {
        if (this.fetchFunction) {
          this.fetchFunction().then((response) => this.handleRequest(response));
          return;
        }

        this.fetch().then((response) => this.handleRequest(response));
      },

      fetch() {
        if (!this.$http) {
          return util.warn('You need to install the `vue-resource` plugin', this);
        }

        if (!this.url) {
          return util.warn('You need to set the `src` property', this);
        }

        const src = this.queryParam
          ? this.url
          : this.url + this.query;

        const params = this.queryParam
          ? Object.assign({ [this.queryParam]: this.query }, this.data)
          : this.data;

        return this.$http.get(src, { params });
      },

      handleRequest(response) {
        if (this.query) {
          let data = response.data;
          data = this.prepareResponseData ?
            this.prepareResponseData(data) :
            data;
          this.items = this.limit ?
            data.slice(0, this.limit) :
            data;
          this.current = -1;
          this.loading = false;

          if (this.selectFirst) {
            this.down();
          }
        }
      },

      reset() {
        this.items = [];
        this.loading = false;
      },

      setActive (index) {
        this.current = index;
      },

      activeClass (index) {
        return {
          active: this.current === index
        };
      },

      hit() {
        if (this.current !== -1) {
          this.onHit(this.items[this.current]);
        }
      },

      up() {
        if (this.current - 1 < 0) {
          this.current = this.items.length - 1;
          return;
        }

        this.current -= 1;
      },

      down() {
        if ((this.current + 1) >= this.items.length) {
          this.current = 0;
          return;
        }
        this.current += 1;
      },

      onHit(hit) {
        this.selected = hit;
        this.query = this.selectedText;

        this.$emit('TYPEAHEAD_SELECTED', hit);

        this.reset();
      },

      onFocus() {
        this.parentContainer.isFocused = true;
      },

      onBlur() {
        setTimeout(() => {
          this.parentContainer.isFocused = false;
          this.reset();
        }, 1E2);
      },

      setParentValue(query) {
        this.parentContainer.setValue(query || this.$el.query);
      },
    }
  }
</script>

<style lang="css" scoped>
  .Typeahead__Wrapper {}

  .md-list.Typeahead__List {
    position: absolute;
    width: 100%;
    z-index: 10;
    max-height: 200px;
    overflow-y: scroll;
  }

  .Typeahead__Item.active {
    background-color: rgba(153, 153, 153, 0.2);
    text-decoration: none;
  }

  .Typeahead__Item.active .md-button.md-theme-default {
    background-color: transparent;
  }

  .Typeahead__IconButton {
    position: absolute;
    right: 0;
    top: 12px;
  }

  .Typeahead__IconButton .md-icon {
    color: rgba(0,0,0,0.7);
  }
</style>
