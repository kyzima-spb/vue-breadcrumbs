<template>
  <nuxt-child :category="category" />
</template>

<script>
  export default {
    name: 'ProductsSection',

    validate({ params }) {
      return !!params.slug;
    },

    async asyncData({ params, store, error }) {
      const category = store.state.accessories.all[params.slug];

      if (!category) {
        return error({ statusCode: 404 });
      }

      await store.dispatch('breadcrumbs/addCrumb', {
        routeName: 'accessories-slug',
        text: category.title,
      });

      return { category };
    },
  };
</script>
