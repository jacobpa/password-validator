<template>
  <div id="app">
    <navigation />
    <div class="view-grid">
      <div class="view-container">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
    Navigation,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  color: $black;

  .view-grid {
    margin-top: 1.5em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-row-gap: 1.5em;
  }
}

@media only screen and (max-width: 400px) {
  .view-container {
    grid-column: 1 / 13;
  }
}

@media only screen and (min-width: 401px) and (max-width: 960px) {
  .view-container {
    grid-column: 2 / 12;
  }
}

@media only screen and (min-width: 961px) {
  .view-container {
    grid-column: 4 / 10;
  }
}
</style>
