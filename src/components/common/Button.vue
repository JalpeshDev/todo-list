<template>
  <input
    type="button"
    :value="label"
    class="button"
    :disabled="isDisabled"
    @click="$emit('onClick')"
  />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() private label: string;
  @Prop() private isDisabled: boolean;
}
</script>
<style lang="scss">
.button {
  max-width: 91px;
  height: 42px;
  background: #0080ff;
  border: 1px solid #005fbc;
  border-radius: 4px;
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  opacity: 1;
  margin-left: 16px;
}
.button:hover {
  background: #41a0ff 0% 0% no-repeat padding-box;
  border: 1px solid #0080ff;
  border-radius: 4px;
  opacity: 1;
}
input[type="button"]:disabled {
  background: #cccccc 0% 0% no-repeat padding-box;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  opacity: 1;
}
</style>
