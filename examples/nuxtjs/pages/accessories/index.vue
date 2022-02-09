<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Комплектующие</h1>
  <!--      <b-nav vertical>-->
  <!--        <b-nav-item-->
  <!--          :to="{ name: 'accessories-slug', params: { slug } }"-->
  <!--          v-for="(item, slug, i) in accessories"-->
  <!--          :key="i"-->
  <!--        >-->
  <!--          {{ item }}-->
  <!--        </b-nav-item>-->
  <!--      </b-nav>-->
      </b-col>
      <b-col>
        <nuxt-child />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'AccessoriesPage',
  };
</script>
