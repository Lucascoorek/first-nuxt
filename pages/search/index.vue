<template>
  <div class="container search">
    <p>Search page</p>
    <form @submit.prevent="submit">
      <input ref="searchInput" v-model="search" type="text" />
      <input type="submit" value="Search" />
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
};
</script>

<style scoped>
.search p {
  margin: 20px auto;
}
.search input {
  display: block;
  margin: 10px auto;
}
</style>
