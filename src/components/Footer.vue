<template>
  <footer>
    <a href="https://github.com/jacobpa/password-validator">
      View on Github <font-awesome-icon :icon="['fab', 'github']"/>
    </a>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
  footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: $navy;
    height: 3rem;

      a {
        color: $white;
        display: block;
        text-align: center;
        margin-left: 1ex;
        text-decoration: none;

        &:hover {
          color: $silver;
        }
      }
  }
</style>
