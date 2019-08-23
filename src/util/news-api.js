function getNewsUrl (searchTerm) {
  return process.env.VUE_APP_NEWS_BASE_URL + process.env.VUE_APP_NEWS_ENDPOINT + '?q=' + searchTerm + '&apiKey=' + process.env.VUE_APP_KEY;
}

export default {
  getNewsUrl: getNewsUrl,
};
