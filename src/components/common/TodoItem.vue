<template>
  <div class="content">
    <label class="input-field">
      <input
        type="checkbox"
        class="input-checkbox"
        :checked="taskItem.isCompleted"
        @click="
          (event) =>
            this.$emit('changedTaskStatus', event.target.checked, taskItem.id)
        "
      />
      <span class="check-mark"></span>
      <div class="task-detail">
        <span
          :class="['task-title', taskItem.isCompleted ? 'strikethrough' : '']"
        >
          {{ taskItem.title }}</span
        >
        <span class="task-date">{{ formatDate(taskItem.created) }}</span>
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Task from "@/model/Task";
import moment from "moment";

@Component
export default class TodoItem extends Vue {
  @Prop() private taskItem: Task;

  private formatDate(date: Date) {
    if (date) {
      return moment(date).format("MMMM Do, YYYY");
    }
    return "";
  }
}
</script>
<style lang="scss">
.content {
  padding: 10px 0;
  .item {
    border: 1px solid black;
  }
  .input-field {
    display: flex;
  }

  .task-detail {
    margin-left: 10px;
  }
  .task-title {
    color: #121212;
    text-align: left;
    letter-spacing: 0px;
    font-family: "Roboto";
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    opacity: 1;
    display: flex;
  }
  .strikethrough {
    color: #aaaaaa;
    text-decoration: line-through;
  }
  .task-date {
    color: #aaaaaa;
    display: flex;
    text-align: left;
    letter-spacing: 0px;
    opacity: 1;
    font-family: "Roboto";
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
  }
  .input-field {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    .check-mark {
      position: absolute;
      top: 0;
      left: 0;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #ccc;
    }
    input:checked ~ .check-mark {
      background-color: #41a0ff;
    }
    .check-mark:after {
      content: "";
      position: absolute;
      display: none;
    }
    input:checked ~ .check-mark:after {
      display: block;
    }
    .check-mark:after {
      left: 8px;
      top: 4px;
      width: 5px;
      height: 10px;
      border: solid #fff;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
    }
  }
}
</style>
