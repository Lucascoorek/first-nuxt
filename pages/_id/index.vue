<template>
  <div class="container single-article">
    <article v-if="!loading">
      <h1>{{ post.webTitle }}</h1>
      <p>{{ post.webPublicationDate.split("T")[0] }}</p>
      <img :src="post.fields.thumbnail" alt />
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
    const { data } = await this.$axios.get(
      `https://content.guardianapis.com/${this.$route.params.id}?order-by=relevance&show-fields=body&page=1&api-key=test`
    );
    this.post = data.response.content;
    this.loading = false;
  },
  data() {
    return {
      post: {},
      loading: true,
    };
  },
  head() {
    return {
      title: this.post.webTitle ? `${this.post.webTitle.slice(0, 10)}...` : "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.webTitle,
        },
      ],
    };
  },
};
</script>

<style scoped>
.single-article img {
  display: block;
  max-width: 70%;
  width: 100%;
  margin: 20px auto;
}
.single-article h1 {
  width: 95%;
  max-width: 400px;
  margin: 20px auto;
}
.html-container {
  width: 95%;
  max-width: 400px;
  margin: 20px auto;
  text-align: justify;
}
.html-container >>> p {
  margin: 20px 0;
  line-height: 1.5;
}
.html-container >>> img,
.html-container >>> iframe {
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
