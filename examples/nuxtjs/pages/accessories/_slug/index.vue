<template>
  <b-container>
    <h1>{{ category.title }}</h1>
    <b-row>
      <b-col>
        <b-nav vertical>
          <b-nav-item
            v-for="(item, i) in category.products"
            :key="i"
            :to="{name: 'accessories-slug-productId', params: {productId: i}}"
          >
            {{ item.title }}
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'ProductsPage',

    props: {
      category: {
        type: Object,
        required: true,
      },
    },
  };
</script>
