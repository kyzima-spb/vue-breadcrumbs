<template>
  <b-container>
    <h1>Главная</h1>
    <b-link :to="{ name: 'accessories' }">
      Открыть раздел комплектующих ПК
    </b-link>
  </b-container>
</template>

<script>
  export default {
    name: 'IndexPage',
  };
</script>
