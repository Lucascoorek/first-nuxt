<template>
  <div class="container index">
    <div>
      <Logo />
      <h2 class="subtitle">
        Latest news
      </h2>
      <ul>
        <li v-for="result in results" :key="result.id">
          <p>{{ result.webTitle }}</p>
          <img :src="result.fields.thumbnail" :alt="result.id" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Logo } from "@/components/icons/";

export default {
  components: {
    Logo,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&q=latest%20news&api-key=test`
    );

    return { results: data.response.results };
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
