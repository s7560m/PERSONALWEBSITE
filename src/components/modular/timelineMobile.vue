<template>
  <v-timeline dense>
    <v-timeline-item
      fill-dot
      v-for="(year, i) in workexperience"
      :key="i"
      :color="year.color"
      small
    >
      <v-card>
        <v-card-title :class="`mb-4 font white--text ${year.color}`">
          {{year.company}}
        </v-card-title>
        <v-card-subtitle :class="`jobtitle white--text ${year.color}`">
          {{year.jobtitle}}
        </v-card-subtitle>
        <v-list class="list">
          <v-list-item class="list-text">{{year.description}}. As a {{lowerCase(year.jobtitle)}} at {{year.company}}, {{year.solutionquote}}</v-list-item>
          <v-list-item v-for="point in year.points" class="list-text">• {{point}}</v-list-item>
        </v-list>
        <v-card-subtitle>
          <span :class="`mb-4 ${year.color.split(' ')[0]}--text year`" slot="opposite">{{year.year}}</span>
        </v-card-subtitle>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  import {workexperience} from './workexperience';
  export default {
    name: 'TimelineDesktop',
    data: () => ({
      workexperience: workexperience
    }),
    methods: {
      lowerCase(str) {
        if (str !== undefined) {
          return str.toLowerCase();
        }
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .year {
    font-family: Montserrat, sans-serif;
    padding-bottom: 0px;
  }
  .font {
    font-family: Montserrat, sans-serif;
    font-weight: bolder;
    padding-bottom: 0px;
  }
  .jobtitle {
    font-family: Montserrat, sans-serif;
    padding-top: 0px;
    font-size: 16px;

    padding-bottom: 10px;
  }

  .contenttext {
    padding-top: 16px;
    font-size: 16px;
  }
  .list-text {
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    padding-bottom: 10px;
  }
  .list {
    /*padding: 0px;*/
  }
</style>
