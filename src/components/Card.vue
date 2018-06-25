<template>
  <div class="card">
    <img src="http://via.placeholder.com/350x350" alt="Placeholder">
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  flex: 0 33%;
  min-width: calc(80vw / 3);
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 20px, 0.25);
}
</style>
