<template>
  <div class="container search-id">
    <article v-if="!loading">
      <h1>{{ post.webTitle }}</h1>
      <p>{{ post.webPublicationDate.split("T")[0] }}</p>
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
      `https://content.guardianapis.com/search?order-by=newest&show-fields=body&page-size=1&q=${encodeURIComponent(
        this.$route.params.id
      )}&api-key=test`
    );
    this.post = data.response.results[0];
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
.search-id {
  justify-content: start;
}
.search-id h1 {
  width: 70%;
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
