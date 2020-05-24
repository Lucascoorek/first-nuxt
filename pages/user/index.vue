<template>
  <div class="container user">
    <p>{{ user.login }}</p>
    <p>{{ user.company }}</p>
    <div class="img">
      <img :src="user.avatar_url" :alt="user.login" />
    </div>
    <p>{{ user.email }}</p>
    <p>{{ user.location }}</p>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
};
</script>

<style scoped>
.user p {
  margin: 15px auto;
}
.user input {
  display: block;
  margin: 10px auto;
}
.img {
  width: 250px;
  height: 250px;
}
.img img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>
