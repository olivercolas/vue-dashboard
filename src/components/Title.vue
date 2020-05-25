<template>
  <div class="title display-1 text-center">{{ text }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop(String) readonly text: string | undefined;
}
</script>

<style lang="scss" scoped>
.title {
    background-color: #f2f2f2;
    border-radius: 4px;
    padding:5px;
    margin-bottom: 25px;
}
</style>
