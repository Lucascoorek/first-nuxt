<template>
  <div class="container other">
    <p>Other page</p>
    <ul>
      <li v-for="link in links" :key="link">
        <nuxt-link :to="{ name: 'other-link', params: { link } }"
          >Link to /other/{{ link }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { links: [1, 2, 3, 4, 5] };
  },
  head() {
    return {
      title: "Other",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Other page`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.other {
  justify-content: start;
}
.other p {
  margin: 20px auto;
}
.other ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.other li {
  margin: 20px;
}
</style>
