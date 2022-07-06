<template>
    <div class="grid grid-cols-9 items-center content-center justify-items-stretch">
      <div class="col-span-2 p-4">
        <img class="w-1/2 object-cover m-auto" :src="item.product.image_url" />
      </div>
      <div class="col-span-3 px-4">
        <div class="flex justify-between pt-4">
          <router-link :to="item.product.get_absolute_url"><span class="font-bold">{{ item.product.name }}</span></router-link>
          <span class="font-light">{{ item.product.price }}</span>
        </div>
        <p>{{ item.product.description }}</p>
      </div>

      <div class="col-span-2 flex justify-stretch items-center">
        <div class="border-x-2 border-gray-400 w-full text-center py-10">
        <p>{{ item.quantity }}</p>
        <p class="font-light text-sm text-gray-400">Quantity</p>
        </div>
      </div>
      <div class="col-span-2 flex justify-center items-center">
        <p class="text-xl font-extrabold"> ${{ getItemTotal(item).toFixed(2) }} </p>

      </div>
      <template v-if="false">
        <td><router-link :to="item.product.get_absolute_url">{{ item.product.name }}</router-link></td>
        <td>jebote: ${{ item.product.price }}</td>
        <td>
            {{ item.quantity }}
            <a @click="decrementQuantity(item)">-</a>
            <a @click="incrementQuantity(item)">+</a>
        </td>
        <td>${{ getItemTotal(item).toFixed(2) }}</td>
        <td><button class="delete" @click="removeFromCart(item)"></button></td>
      </template>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        initialItem: Object
    },
    data() {
        return {
            item: this.initialItem
        }
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },
        decrementQuantity(item) {
            item.quantity -= 1

            if (item.quantity === 0) {
                this.$emit('removeFromCart', item)
            }

            this.updateCart()
        },
        incrementQuantity(item) {
            item.quantity += 1

            this.updateCart()
        },
        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
        },
        removeFromCart(item) {
            this.$emit('removeFromCart', item)

            this.updateCart()
        },
    },
}
</script>
