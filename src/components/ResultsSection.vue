<template>
  <v-container class="fill-height">
    <v-layout
      wrap
      align-center
    >
      <v-flex xs8 mx-auto v-if="loading">
        <v-progress-linear indeterminate height="10">
        </v-progress-linear>
      </v-flex>
      <v-flex xs-8 mx-auto v-if="hasError">
        <v-alert type="error">
          One or more error(s) occured:
          <ul>
            <li v-for="error in errorMessages">
              {{ error }}
            </li>
          </ul>
        </v-alert>
      </v-flex>
      <v-flex xs10 mx-auto v-if="hasData">
        <Result :data="item" v-for="item in data"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Result from '@/components/Result';

export default {
  components: {
    Result
  },
  data: () => ({
  }),
  props: {
    data: Array,
    loading: Boolean,
    errorMessages: Array,
  },
  computed: {
    hasError: function () {
      if (this.errorMessages && this.errorMessages.length) {
        return this.errorMessages.length > 0;
      }
      return false;
    },
    hasData: function () {
      if (this.data && this.data.length) {
        return this.data.length > 0;
      }
      return false;
    }
  }
};
</script>
