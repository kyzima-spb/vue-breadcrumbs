<template>
  <b-container>
    <h1>{{ product.title }}</h1>
  </b-container>
</template>

<script>
  export default {
    name: 'ProductSection',

    props: {
      category: {
        type: Object,
        required: true,
      },
    },

    validate({ params }) {
      return !!params.slug && !!params.productId;
    },

    async asyncData({ params, store, error }) {
      const category = store.state.accessories.all[params.slug];
      const product = category && category.products[params.productId];

      if (!product) {
        return error({ statusCode: 404 });
      }

      await store.dispatch('breadcrumbs/addCrumb', {
        routeName: 'accessories-slug-productId',
        text: product.title,
      });

      return { product };
    },
  };
</script>
