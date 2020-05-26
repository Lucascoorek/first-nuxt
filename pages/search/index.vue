<template>
  <div class="container search">
    <p>Search Guardian news for given phrase</p>
    <form @submit.prevent="submit">
      <input ref="searchInput" v-model="search" class="btn" type="text" />
      <input class="btn" type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      search: "",
    };
  },
  mounted() {
    this.$nextTick(() => this.$refs.searchInput.focus());
  },
  methods: {
    submit(e) {
      this.$router.push(`/search/${this.search}`);
      this.search = "";
    },
  },
  head() {
    return {
      title: "Search",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Serach for Guardian news`,
        },
      ],
    };
  },
  pwa: {
    meta: {
      name: "Search | My App",
    },
  },
};
</script>

<style scoped>
.search {
  justify-content: start;
}
.search p {
  margin: 20px auto;
}
.search input.btn {
  display: block;
  width: 100%;
  font-size: 1rem;
  outline: none;
}
</style>
