# vue3-table-resizable

## Requirements

- Vue 3.x

## Installation

```
npm i vue3-table-resizable
```

## Global registration

When registered globally, the directive will be available throughout the project. This means that you can use it in any component without the need for additional imports.

In main.js:
```js
import { createApp } from 'vue';
import App from './App.vue';

import vTableResizable from 'vue3-table-resizable';

createApp(App)
  .use(vTableResizable)
  .mount('#app');
```

## Local registration

When registering locally, the directive will be available for use only in the component where it was registered.

In any component:
```vue
<script>
import vTableResizable from "vue3-table-resizable";

export default {
  directives: {
    vTableResizable
  }
}
</script>
```
## License

[ISC](https://github.com/denisoed/vue3-table-resizable/blob/main/LICENSE)
