<template>
  <nav>
    <nuxt-link to="/" exact>Home</nuxt-link>
    <nuxt-link v-if="$auth.loggedIn" to="/other" exact>Other</nuxt-link>
    <nuxt-link v-if="$auth.loggedIn" to="/search" exact>Search</nuxt-link>
    <nuxt-link v-if="$auth.loggedIn" to="/user" exact>User</nuxt-link>
    <a v-if="$auth.loggedIn" class="right" @click="$auth.logout()"
      >Log out <span class="username">{{ user.login }}</span></a
    >
    <a v-else @click="$auth.loginWith('github')">Github login</a>
    <div class="theme-container">
      <p
        :class="{ btn: true, bold: $colorMode.preference === 'dark' }"
        @click="$colorMode.preference = 'dark'"
      >
        Dark
      </p>
      <p
        :class="{ btn: true, bold: $colorMode.preference === 'sepia' }"
        @click="$colorMode.preference = 'sepia'"
      >
        Sepia
      </p>
      <p
        :class="{ btn: true, bold: $colorMode.preference === 'light' }"
        @click="$colorMode.preference = 'light'"
      >
        Light
      </p>
      <p
        :class="{ btn: true, bold: $colorMode.preference === 'system' }"
        @click="$colorMode.preference = 'system'"
      >
        System
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$auth.user;
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
nav a {
  margin: 10px 20px;
  text-decoration: none;
  /* color: var(--primary-color); */
}

nav a.nuxt-link-active {
  color: var(--accent-green-color);
}
nav .username {
  color: var(--accent-pink-color);
}
nav .theme-container {
  display: flex;
}
nav .bold {
  font-weight: bold;
}
</style>
