<template>
  <div>
    <div class="main-container">
      <h1>To do List</h1>
      <div class="heading">
        <button
          @click="isActiveCollapse = !isActiveCollapse"
          :class="isActiveCollapse ? 'active-collapse' : ''"
        >
          {{ completedTaskList.length }} Done
        </button>
        <div v-if="isActiveCollapse && completedTaskList.length > 0">
          <transition name="fade">
            <TodoItem
              v-for="task in completedTaskList"
              :key="task.id"
              :taskItem="task"
              @changedTaskStatus="handleTaskStatus"
            />
          </transition>
        </div>
      </div>
      <div v-if="pendingTaskList.length > 0">
        <TodoItem
          v-for="task in pendingTaskList"
          :key="task.id"
          :taskItem="task"
          @changedTaskStatus="handleTaskStatus"
        />
      </div>
      <div class="input-container">
        <TextArea
          v-model="title"
          placeholder="A new To Do Item..."
          @inputChange="handleTitleChange"
        />
        <Button label="Add Item" @onClick="handleSubmit" :disabled="!title" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/common/Button.vue";
import TextArea from "@/components/common/TextArea.vue";
import TodoItem from "@/components/common/TodoItem.vue";
import Task from "@/model/Task";
import store from "@/store";

@Component({
  components: {
    Button,
    TextArea,
    TodoItem,
  },
})
export default class TodoList extends Vue {
  private title = "";
  private isActiveCollapse = false;

  // get task list from the state
  private get todoTaskItems() {
    return store.getters.getTaskList();
  }

  // get completedTaskList
  private get completedTaskList(): Task[] {
    return this.todoTaskItems.filter((task: Task) => task.isCompleted);
  }

  // get pendingTaskList
  private get pendingTaskList(): Task[] {
    return this.todoTaskItems.filter((task: Task) => !task.isCompleted);
  }

  // update task title value
  private handleTitleChange(value: string) {
    this.title = value;
  }

  // submit task value
  private handleSubmit() {
    const newTask = new Task();
    newTask.title = this.title;
    this.title = "";
    // push new task record the state
    store.commit("addTask", newTask);
  }

  // update task status based on user action
  private handleTaskStatus(isChecked: boolean, id: string) {
    // update task status
    store.commit("updateTaskStatus", { id, isChecked });
  }
}
</script>
<style lang="scss">
@mixin container {
  height: 90vh;
  max-width: 812px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  overflow: auto;
  padding: 0 10px;
  h1 {
    color: #121212;
    font-size: 28px;
    line-height: 37px;
    font-family: "Roboto", sans-serif;
    text-align: left;
    font-weight: bold;
  }
  .heading {
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    padding: 15px 0;
    color: #cccccc;
    font-size: 15px;
    line-height: 20px;
    text-align: left;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }

  button {
    position: relative;
    background: transparent;
    border: 0;
    color: #ccc;
    padding-left: 23px;
    font-size: 15px;
    line-height: 20px;

    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: 4px;
      top: 5px;
      border-top: 6px solid transparent;
      border-right: 12px solid #ccc;
      border-bottom: 6px solid transparent;
      transform: matrix(-1, 0, 0, -1, 0, 0);
    }

    &.active-collapse {
      &:before {
        transform: rotate(270deg);
      }
    }
  }
  .input-container {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 24px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0 20px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
.main-container {
  @include container;
}
</style>
