<template>
  <div class="container single-article">
    <article v-if="!loading">
      <h1>{{ post.webTitle }}</h1>
      <p>{{ post.webPublicationDate }}</p>
      <img :src="post.fields.thumbnail" alt="" />
      <div class="html-container" v-html="post.fields.body"></div>
    </article>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import { Loading } from "@/components/icons";
export default {
  components: {
    Loading,
  },
  async fetch() {
    this.apiUri = this.$store.getters.getUri(this.$route.params.id);
    const { data } = await this.$axios.get(
      `https://content.guardianapis.com/${this.apiUri}?show-fields=thumbnail%2Cbody%2Cheadline&api-key=test`
    );
    this.post = data.response.content;
    this.loading = false;
  },
  data() {
    return {
      apiUri: "",
      post: {},
      loading: true,
    };
  },
};
</script>

<style scoped>
.single-article img {
  display: block;
  max-width: 70%;
  margin: 20px auto;
}
.single-article h1 {
  width: 70%;
  margin: 20px auto;
}
.html-container {
  width: 70%;
  margin: 20px auto;
  text-align: justify;
}
.html-container >>> p {
  margin: 20px 0;
  line-height: 1.5;
}
.html-container >>> img {
  display: block;
  margin: 20px auto 0;
  width: 100%;
  max-width: 400px;
  height: 250px;
}
.html-container >>> figcaption {
  margin: 10px auto 20px;
}
</style>
