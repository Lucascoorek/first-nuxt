<template>
  <div id="alternate">
    <nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
export default {
  components: {},
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
#alternate {
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
