<template>
  <div class="loading-page">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: 'CommonLoading'
}
</script>

<style scoped>
.loading-page {
  position: fixed !important;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  top: 0;
  right: 0;
  z-index: 1000;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
