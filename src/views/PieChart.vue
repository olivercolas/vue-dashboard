<template>
  <v-col style="margin:0;">
    <Title text="Pie chart" />
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Title from '@/components/Title.vue';

@Component({
  components: { Title },
})
export default class PieChart extends Vue {}
</script>
