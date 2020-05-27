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
    try {
      const { data } = await this.$axios.get(
        `https://content.guardianapis.com/${this.$route.params.pathMatch}?order-by=relevance&show-fields=body%2Cthumbnail&page=1&api-key=${process.env.GUARDIAN_API_KEY}`
      );
      this.post = data.response.content;
      this.thumbnail = data.response.content.fields.thumbnail;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      post: {},
      loading: true,
      thumbnail: "",
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
        { hid: "og-title", property: "og:title", content: this.post.webTitle },
        {
          hid: "og-image",
          property: "og:image",
          content: this.thumbnail,
        },
        { hid: "og-image-width", property: "og:image:width", content: 500 },
        { hid: "og-image-height", property: "og:image:height", content: 300 },
        {
          hid: "og-image-type",
          property: "og:image:type",
          content: "image/jpeg",
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
