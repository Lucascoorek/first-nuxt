<template>
  <div class="container index">
    <div>
      <Logo />
      <h1 class="subtitle">
        Latest news
      </h1>
      <p>powerd by Guardian</p>
      <ul>
        <nuxt-link
          v-for="result in results"
          :key="result.uuid"
          :to="`/${result.uuid}`"
        >
          <li>
            <h3>{{ result.webTitle }}</h3>
            <img :src="result.fields.thumbnail" :alt="result.id" />
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { Logo } from "@/components/icons/";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    Logo,
  },
  async asyncData({ $axios, store }) {
    const { data } = await $axios.get(
      `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=latest%20news&api-key=test`
    );
    const results = data.response.results.map((element) => {
      return { ...element, uuid: uuidv4() };
    });
    store.commit("addResults", results);
    return { results };
  },
  head() {
    return {
      title: "Home",
      meta: [{ hid: "description", name: "description", content: "Home page" }],
    };
  },
};
</script>

<style>
.index {
  justify-content: start;
  margin-top: 40px;
  width: 100%;
  max-width: 400px;
}
.index ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.index li {
  width: 100%;
  margin: 10px auto;
}
.index img {
  display: block;
  margin: 10px auto;
  width: 90%;
}
.index p,
.index h3 {
  margin: 20px 0 10px;
  width: 95%;
}
.index a {
  display: block;
  text-decoration: none;
  width: 90%;
  margin: 60px auto;
}
</style>
