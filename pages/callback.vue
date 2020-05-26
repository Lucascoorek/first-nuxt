<template>
  <div class="container">
    <Loading />
  </div>
</template>

<script>
import { Loading } from "@/components/icons/";
export default {
  components: {
    Loading,
  },
  head() {
    return {
      title: "Login",
    };
  },
};
</script>

<style></style>
