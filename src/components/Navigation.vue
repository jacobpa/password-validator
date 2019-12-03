<template>
  <nav>
    <div class="nav-container">
      <router-link :to="{name: 'password-validator'}"><h2>Ladno Pass</h2></router-link>
      <div class="links">
        <router-link :to="{name: 'password-validator'}">Validator</router-link>
        <router-link :to="{name: 'settings'}">Settings</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav {
  background-color: $navy;
  color: $white;
  display: flex;
  justify-content: space-around;

  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    padding: 1em 0;

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      min-height: 1.5em;

      a {
        margin-right: 1em;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: $silver;
      }
    }
  }
}
</style>
