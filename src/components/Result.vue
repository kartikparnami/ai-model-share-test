<template>
  <v-col>
    <v-card
      max-width="600"
      class="mx-auto"
    >
      <v-list-item three-line>
        <v-list-item-content class="align-self-start">
          <v-list-item-title
            class="title mb-2"
            v-text="data.title"
          ></v-list-item-title>

          <v-list-item-action-text>{{data.source.name}} <v-icon size="2px">mdi-moon-full</v-icon> {{timestamp}}</v-list-item-action-text>
          <v-spacer/><v-spacer/><v-spacer/><v-spacer/>
          <v-list-item-subtitle>{{data.description}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          size="125"
          tile
          v-if="data.urlToImage"
        >
          <v-img :src="data.urlToImage"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn text @click.stop="dialog = true">Show more</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog
      v-model="dialog"
      full-width
    >
      <v-card>
        <v-img
          v-if="data.urlToImage"
          class="white--text"
          height="400px"
          :src="data.urlToImage"
          contain
          gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4)"
        >
          <v-card-title class="align-end fill-height headline pl-5">{{data.title}}</v-card-title>
        </v-img>
        <v-card-title v-else>{{data.title}}</v-card-title>

        <v-card-text class="mt-2 pb-1 overline">{{author}} <v-icon size="2px">mdi-moon-full</v-icon> {{timestamp}}</v-card-text>
        <v-card-text class="text--primary subtitle-1">
          {{data.description}}
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            :href="data.url"
            target="_blank"
          >
            More on {{data.source.name}} <v-icon x-small>mdi-open-in-new</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import moment from 'moment';

export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    data: Object
  },
  computed: {
    timestamp: function () {
      return moment(this.data.publishedAt).format('MMM DD YYYY, HH:mm')
    },
    author: function () {
      let byline = "";
      if (this.data.author) {
        byline += "by " + this.data.author + ", ";
      }
      byline += this.data.source.name;
      return byline;
    }
  }
};
</script>
