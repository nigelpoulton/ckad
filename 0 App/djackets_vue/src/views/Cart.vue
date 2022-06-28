<template>
  <div class="w-full">
    <div class="w-full flex gap-10 mt-4 items-start">
      <div class="w-2/3 grow">
        <div class="bg-slate-800 text-white text-bold p-2">Gear in your cart ...</div>
        <CartItem
            v-for="item in cart.items"
            v-bind:key="item.product.id"
            v-bind:initialItem="item"
            v-on:removeFromCart="removeFromCart" />
      </div>

      <div class="w-1/3 grow-0 border border-gray-600">
        <div class="bg-gray-400 text-white">
          <p class="text-center p-2">Order Summary</p>
        </div>
        <div class="px-4 py-6 grid grid-cols-3">
          <p class="col-span-2 text-right">{{ cartTotalLength }} items in cart:</p>
          <p class="text-center font-bold">${{cartTotalPrice.toFixed(2)}}</p>

          <p class="col-span-2 text-right font-light text-sm">Est. shipping and handling:</p>
          <p class="text-center font-bold">$40</p>
          <div class="border-t border-gray-400 col-span-3 text-center">
            <p>Est total: ${{cartTotalPrice.toFixed(2) + 40}}</p>
          </div>
        </div>
      </div>
      <template v-if="false">
      <div class="columns is-multiline">
          <div class="column is-12">
              <h1 class="title">Cart</h1>
          </div>

          <div class="column is-12 box">
              <table class="table is-fullwidth" v-if="cartTotalLength">
                  <thead>
                      <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th></th>
                      </tr>
                  </thead>

                  <tbody>
                      <CartItem
                          v-for="item in cart.items"
                          v-bind:key="item.product.id"
                          v-bind:initialItem="item"
                          v-on:removeFromCart="removeFromCart" />
                  </tbody>
              </table>

              <p v-else>You don't have any products in your cart...</p>
          </div>

          <div class="column is-12 box">
              <h2 class="subtitle">Summary</h2>

              <strong>${{ cartTotalPrice.toFixed(2) }}</strong>, {{ cartTotalLength }} items

              <hr>

              <router-link to="/cart/checkout" class="button is-dark">Proceed to checkout</router-link>
          </div>
        </div>
              </template>
    </div>

    <div class="w-64 m-auto text-center bg-white relative top-7 font-extralight uppercase">Customers also viewed</div>
    <div class="grid grid-cols-6 grid-gap-4 py-6 my-4 border-y-2 border-amber-500">
      <div class="text-center">
        <img class="w-4/5 h-40 object-contain m-auto" src="/images/item_6.png" />
        <p class="uppercase font-bold">Firebrand kayak</p>
        <p class="font-light">$499.95</p>
      </div>
      <div class="text-center">
        <img class="w-4/5 h-40 object-contain m-auto" src="/images/item_5.png" />
        <p class="uppercase font-bold">Highlighter head</p>
        <p class="font-light">$42.98</p>
      </div>
      <div class="text-center">
        <img class="w-4/5 h-40 object-contain m-auto" src="/images/item_4.png" />
        <p class="uppercase font-bold">The golden link</p>
        <p class="font-light">$21.99</p>
      </div>
      <div class="text-center">
        <img class="w-4/5 h-40 object-contain m-auto" src="/images/item_3.png" />
        <p class="uppercase font-bold">Mega pokey kit</p>
        <p class="font-light">$129.99</p>
      </div>
      <div class="text-center">
        <img class="w-4/5 h-40 object-contain m-auto" src="/images/item_2.png" />
        <p class="uppercase font-bold">Essential pack</p>
        <p class="font-light">$259.99</p>
      </div>
      <div class="text-center">
        <img class="w-4/5 h-40 object-contain m-auto" src="/images/item_1.png" />
        <p class="uppercase font-bold">Moccasins</p>
        <p class="font-light">$35.95</p>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    data() {
        return {
            cart: {
                items: []
            }
        }
    },
    mounted() {
        this.cart = this.$store.state.cart
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
    }
}
</script>
