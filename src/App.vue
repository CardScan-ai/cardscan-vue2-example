<script setup lang="ts">
</script>

<template>
  <div class="main-container">
    <div class="brand-container">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <react-component />
  </div>
</template>
<script lang="ts">
import ReactComponent from './components/WrappedReact.vue';

export default {
  components: {
    ReactComponent
  }
}
</script>


<style scoped>
.main-container {
  display: flex;
  widows: 100%;

}


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
