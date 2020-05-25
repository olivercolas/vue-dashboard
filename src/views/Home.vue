<template>
  <v-col style="margin:0;">
    <Title text="Bar chart" />
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
export default class Home extends Vue {
  method = 'numOfGenders';

  type = 'column2d';

  renderAt = 'chart-container';

  width = '550';

  height = '350';

  dataFormat = 'json';

  get caption(): string {
    const str = 'Total number of each ';
    if (this.method === 'numOfGenders') {
      return `${str}Gender`;
    }
    return `${str}Eye Color`;
  }

  get xaxisname(): string {
    if (this.method === 'numOfGenders') {
      return 'Gender';
    }
    return 'Eye Color';
  }

  get dataSource(): object {
    return {
      chart: {
        caption: this.caption,
        // subcaption: '',
        xaxisname: this.xaxisname,
        yaxisname: 'Count',
        theme: 'fusion',
      },
      data: this.$store.getters[`people/${this.method}`],
    };
  }
}
</script>
