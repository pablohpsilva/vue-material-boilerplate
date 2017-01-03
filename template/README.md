# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
{{#unit}}

# run unit tests
yarn run unit
{{/unit}}
{{#e2e}}

# run e2e tests
yarn run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
yarn test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
