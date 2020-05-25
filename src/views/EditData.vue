<template>
  <v-col style="margin:0;">
    <Title text="Edit data" />
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Title from '@/components/Title.vue';

@Component({
  components: { Title },
})
export default class EditData extends Vue {}
</script>
