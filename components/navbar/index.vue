<template>
  <nav>
    <nuxt-link to="/" exact>Home</nuxt-link>
    <nuxt-link to="/about" exact>About</nuxt-link>
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
</style>