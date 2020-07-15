# Vue.js

## Features

A summary of features that Vue.js provides.

[Vue Mastery cheatsheet](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf)

### Components

A component is a Vue.js instance that can be reused inside of other components.

Below example shows the AppNav component being used inside of the template of the App.vue component.

```
<header id="header-main">
  <div id="header-content">
    <AppNav />
  </div>
</header>
```

Inside of the script tag of the App.vue component is where the component would be imported.

```
<script>
import AppNav from "./components/AppNav";

export default {
  components: { AppNav }
};
</script>
```

### Props

Props are properties that can be registered on components.

Below example shows an id prop defined inside of ProfileEdit.vue

```
<script>
import { mapState } from "vuex";
import store from "@/store/store";

export default {
  props: {
    id: {
      type: String
    }
  }
};
</script>
```

