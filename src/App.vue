<template>
  <div id="app">
    <TodoList msg="TodoList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/TodoList.vue";

@Component({
  components: {
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
