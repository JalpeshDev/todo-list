<template>
  <input
    type="text"
    class="text-field"
    :value="value"
    :placeholder="placeholder"
    @input="(event) => this.$emit('inputChange', event.target.value)"
  />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TextArea extends Vue {
  @Prop() private placeholder: string;
  @Prop() private value: string;
}
</script>
<style lang="scss">
.text-field {
  max-width: 705px;
  width: 100%;
  height: 42px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0px 2px 5px #0000000d;
  border-radius: 4px;
  opacity: 1;
  text-align: left;
  letter-spacing: 0px;
  color: #121212;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  display: inline-flex;
  padding: 0 12px;
}
</style>
