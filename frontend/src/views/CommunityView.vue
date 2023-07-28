<template>
  <div class="about">
    <!-- <h1>This is an community page</h1> -->
    <iframe
      id="iframe1" 
      width="100%"
      height="3000px"
      :src="serve" 
      frameborder="0" 
      allow="autoplay; encrypted-media" 
      allowfullscreen
      style="overflow-y:hidden">
    </iframe>
  </div>
</template>

<script>
import dotenv from 'dotenv';
dotenv.config();

export default {
  data() {
    return {
      serve: process.env.VUE_APP_COMMUNITY,
    }
  }
}
</script>



<style scoped>
  /* div {
    overflow-y: auto !important;
  } */
  /* 나중에 http://localhost:8003/를 .env에 따로 보관하는 것도 괜찮을듯 */
  /* iframe {
    overflow-y: scroll;
  }
  iframe::-webkit-scrollbar {
    display: none;
  }
  iframe {
    -ms-overflow-style: none;
    scrollbar-width: none;
  } */
</style>