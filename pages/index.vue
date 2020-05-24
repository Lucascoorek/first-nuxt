<template>
  <div class="container index">
    <div>
      <Logo />
      <h2 class="subtitle">
        Latest news
      </h2>
      <ul>
        <nuxt-link
          v-for="result in results"
          :key="result.id"
          :to="`/${result.uuid}`"
        >
          <li>
            <p>{{ result.webTitle }}</p>
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
};
</script>

<style>
.index {
  justify-content: start;
  margin-top: 40px;
}
.index ul {
  list-style-type: none;
  margin: 0;
}
.index li {
  width: 70%;
  margin: 10px auto;
}
.index img {
  display: block;
  margin: 10px auto;
  width: 70%;
}
</style>
