<template>
  <v-app>
    <!-- <v-app-bar dense app color="secondary" dark>
      <v-toolbar-title>Vue Dashboard</v-toolbar-title>
    </v-app-bar> -->

    <v-navigation-drawer app mini-variant permanent>
      <v-list dense nav>
        <v-list-item v-for="link in links" :key="link.title" :to="link.url">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item-icon v-on="on" style="margin-left:0px;">
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
            </template>
            <span>{{ link.title }}</span>
          </v-tooltip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Link } from '@/models/link';

@Component
export default class App extends Vue {
  links: Link[] = [
    {
      icon: 'mdi-chart-bar',
      title: 'Bar Chart',
      url: '/',
    },
    {
      icon: 'mdi-chart-pie',
      title: 'Pie Chart',
      url: '/pie-chart',
    },
    {
      icon: 'mdi-map-marker',
      title: 'Geographic',
      url: '/geographic-chart',
    },
  ];

  mounted() {
    this.$store.dispatch('people/getPeople');
  }
}
</script>
