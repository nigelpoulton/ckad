<template>
    <div class="w-full mt-4 px-12">
      <div class="w-full">
        <h3 class="mb-4 text-sm font-light text-gray-600">home > bags & travel</h3>
        <h2 class="text-2xl uppercase font-bold">{{ product.name }}</h2>
        <p class="text-sm"><span class="font-light">SKU: 94902022</span> | <span class="text-amber-600">rating: 4.2</span> | <span class="text-gray-500">10 reviews</span></p>
      </div>
      <div class="mt-6 flex">
          <div class="w-3/5 grow-0 overflow-hidden" style="height: 35rem;">
             <img class="object-contain" style="height: 28rem; width: 75%;" v-bind:src="product.image_url">
          </div>

          <div class="flex flex-col justify-between pb-40">
            <div>
              <p class="text-2xl font-bold">${{ product.price }}</p>
              <p class="text-base font-light">Perfect for anyone starting out.</p>
            </div>

            <div class="mt-6">
              <div class="">
                <p class="font-bold">Color:</p>
                <div class="flex gap-2 my-3">
                  <div class="w-6 h-6 bg-yellow-400" />
                  <div class="w-6 h-6 bg-red-400" />
                  <div class="w-6 h-6 bg-teal-400" />
                  <div class="w-6 h-6 bg-amber-400" />
                  <div class="w-6 h-6 bg-green-400" />
                  <div class="w-6 h-6 bg-gray-400" />
                  <div class="w-6 h-6 bg-slate-400" />
                </div>
              </div>
              <div class="">
                <p class="font-bold">Quantity:</p>
                <input type="number" class="border border-gray-300 rounded pl-2" min="1" v-model="quantity">
              </div>
              <div class="mt-2">
                <button class="bg-amber-500 text-white uppercase text-sm px-2 py-1" @click="addToCart()">Add to cart</button>
              </div>
            </div>
          </div>
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
import { toast } from 'bulma-toast'

export default {
    name: 'Product',
    data() {
        return {
            product: {},
            quantity: 1
        }
    },
    mounted() {
        this.getProduct() 
    },
    methods: {
        async getProduct() {
            this.$store.commit('setIsLoading', true)

            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data

                    document.title = this.product.name + ' | Djackets'
                })
                .catch(error => {
                    console.log(error)
                })
            
            this.$store.commit('setIsLoading', false)
        },
        addToCart() {
            if (isNaN(this.quantity) || this.quantity < 1) {
                this.quantity = 1
            }

            const item = {
                product: this.product,
                quantity: this.quantity
            }

            this.$store.commit('addToCart', item)

            toast({
                message: 'The product was added to the cart',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'bottom-right',
            })
        }
    }
}
</script>
