<template>
  <v-col style="margin:0;">
    <Title text="Pie chart" />
    <v-row justify="center">
      <v-radio-group v-model="method" row>
        <v-radio label="Gender Count" value="numOfGenders"></v-radio>
        <v-radio label="Eye Color Count" value="numOfEyeColors"></v-radio>
      </v-radio-group>
    </v-row>
    <v-row class="chart-container" justify="center">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
      ></fusioncharts>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Title from '@/components/Title.vue';

@Component({
  components: { Title },
})
export default class PieChart extends Vue {
  method = 'numOfGenders';

  type = 'pie2d';

  width = '500';

  height = '300';

  dataFormat = 'json';

  get caption(): string {
    const str = 'Total number of each ';
    if (this.method === 'numOfGenders') {
      return `${str}Gender`;
    }
    return `${str}Eye Color`;
  }

  get dataSource(): object {
    return {
      chart: {
        caption: this.caption,
        // subCaption: '',
        showValues: '1',
        showPercentInTooltip: '0',
        // numberPrefix: '',
        enableMultiSlicing: '1',
        theme: 'fusion',
      },
      data: this.$store.getters[`people/${this.method}`],
    };
  }
}
</script>
