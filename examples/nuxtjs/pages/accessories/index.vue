<template>
  <b-container>
    <h1>Комплектующие</h1>
    <b-row>
      <b-col>
        <b-nav vertical>
          <b-nav-item
            v-for="(item, slug, i) in accessories"
            :key="i"
            :to="{ name: 'accessories-slug', params: { slug } }"
          >
            {{ item.title }} ({{ item.products.length }})
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'AccessoriesPage',

    async asyncData({ store }) {
      const accessories = store.state.accessories.all;
      return { accessories };
    },
  };
</script>
