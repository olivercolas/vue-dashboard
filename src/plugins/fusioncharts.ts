import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Vue from 'vue';
// eslint-disable-next-line
const VueFusionCharts = require('vue-fusioncharts');

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);
