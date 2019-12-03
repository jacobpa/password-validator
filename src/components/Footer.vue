<template>
  <footer>
    <span>&copy;</span>
    <span>Brien Beattie</span>
    <span>Jacob Patterson</span>
    <span>Mike Yandam</span>
    <span>Andrew Ehrman</span>
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
    border-top: solid $blue 2px;
    background-color: $navy;
    height: 3rem;

      span {
        color: $white;
        display: block;
        font-size: .8em;
        text-align: center;
        margin-left: 1ex;

        &:not(:first-child):not(:last-child) {
          &::after {
            margin-left: 1ex;
            content: "|"
          }
        }
      }
  }
</style>
