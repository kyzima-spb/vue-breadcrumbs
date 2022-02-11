<template>
  <b-container>
    <b-row>
      <b-col>
        <vue-breadcrumbs template-name="bootstrap" />
      </b-col>
    </b-row>
    <nuxt />
  </b-container>
</template>

<script>
  export default {
    name: 'DefaultLayout',
  };
</script>
