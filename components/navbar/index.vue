<template>
  <nav>
    <nuxt-link to="/" exact>Home</nuxt-link>
    <nuxt-link to="/about" exact>About</nuxt-link>
    <nuxt-link v-if="$auth.loggedIn" to="/search" exact>Search</nuxt-link>
    <a v-if="$auth.loggedIn" class="right" @click="$auth.logout()">Log out</a>
    <a v-else class="right" @click="$auth.loginWith('github')">Github login</a>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  width: 100%;
  display: flex;
  justify-content: center;
}
a {
  margin: 20px;
  text-decoration: none;
  color: var(--primary-color);
}
a.nuxt-link-active {
  color: var(--accent-green-color);
}
a.right {
  margin-left: auto;
}
</style>
