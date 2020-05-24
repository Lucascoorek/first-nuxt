<template>
  <div class="container">
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

<style>
p {
  margin: 20px auto;
}
input {
  display: block;
  margin: 10px auto;
}
</style>
