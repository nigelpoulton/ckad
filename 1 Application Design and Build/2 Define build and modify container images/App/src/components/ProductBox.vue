<template>
    <div class="flex flex-col items-center border border-gray-600 p-4">
      <figure class="">
          <img v-bind:src="product.image_url">
      </figure>

      <h3 class="font-lg">{{ product.name }}</h3>
      <p class="font-bold mb-2">${{ product.price }}</p>

      <router-link v-bind:to="product.get_absolute_url"><button class="text-sm text-white bg-amber-500 rounded px-2 py-1">View details</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object
    }
}
</script>

<style scoped>
  .image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }
</style>
