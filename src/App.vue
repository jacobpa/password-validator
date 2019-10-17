<template>
  <div id="app">
    <navigation />
    <div class="view-grid">
      <div class="view-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
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
  display: flex;
  flex-direction: column;
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
    grid-column: 3 / 11;
  }
}

@media only screen and (min-width: 961px) {
  .view-container {
    grid-column: 5 / 9;
  }
}
</style>
