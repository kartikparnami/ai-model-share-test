<template>
  <v-app>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#209CEE"
      dark
    >
      <v-toolbar-title
        style="width: 200px"
        class="ml-0 pl-4"
      >
        <span class="">News Search</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        placeholder="Enter search string here"
        v-model="searchString"
        @keyup.enter.native="onSubmit"
      ></v-text-field>
    </v-app-bar>
    <v-content>
      <ResultsSection :data="results" :loading="loading" :error-messages="errorMsgs"/>
    </v-content>
  </v-app>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import axios          from 'axios';
import NewsApi        from './util/news-api.js'
import ResultsSection from './components/ResultsSection';

export default {
  name: 'App',
  components: {
    ResultsSection,
  },
  data: () => ({
    searchString: "",
    results: [],
    loading: false,
    errorMsgs: []
  }),
  methods: {
    onSubmit: function(e) {
      this.loading = true;
      this.errorMsgs = [];
      axios
        .get(NewsApi.getNewsUrl(this.searchString))
        .then(response => {
          this.loading = false;
          this.results = response.data.articles;
        })
        .catch(error => {
          this.loading = false;
          this.errorMsgs = [error.message];
        })
    }
  },
};
</script>
