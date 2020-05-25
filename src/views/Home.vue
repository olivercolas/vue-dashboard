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

  get dataSource(): object {
    return {
      chart: {
        caption: 'Total number of each Gender',
        // subcaption: '',
        xaxisname: 'Gender',
        yaxisname: 'Count',
        theme: 'fusion',
      },
      data: this.$store.getters[`people/${this.method}`],
    };
  }
}
</script>
