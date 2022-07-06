<template>
  <div class="max-w-full">
    <div id="hero-image" class="h-96 bg-cover flex justify-center items-center">
      <div class="text-center">
        <p class="text-6xl text-gray-500 font-bold">GET A GRIP</p>
        <p class="text-6xl text-amber-500 font-bold">20% OFF</p>
        <p class="text-base text-gray-500 font-bold">THROUGHOUT THE SEASON</p>
      </div>
    </div>

    <div class="my-16 h-36 border-y-2 border-gray-300 mx-12 px-40 flex justify-between items-center">
      <img class="h-32" src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/img-brownboots.jpg" />
      <div class="text-center">
        <p class="text-3xl text-gray-500 font-bold">COUPLES RETREAT WEEKEND</p>
        <p class="text-3xl text-amber-500 font-bold">SAVE AN EXTRA 20%</p>
        <p class="text-base text-gray-500 font-bold">WHEN YOU BUY 2 PAIRS OF BOOTS</p>
      </div>
      <img class="h-32" src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/img-greyboots.jpg" />
    </div>

    <div class="flex justify-between items-center space-x-10">
      <div
        v-for="item in boxesItems"
        class="text-center">
         <img class="" :src="item.img" />
         <h2 class="text-2xl text-gray-800 font-bold mt-4">{{ item.header }}</h2>
         <h3 class="text-amber-500">{{ item.subheader}}</h3>
      </div>
    </div>

    <div class="h-96 my-16 flex relative">
      <div class="border-2 border-white rounded absolute inset-0 m-5 box-border">

      </div>
      <div id="image-box" class="w-3/5 grow-0">
        
      </div>
      <div class="bg-gray-800 w-2/5 grow-0 h-full flex flex-col justify-center items-center">
        <div class="text-center">
          <p class="text-4xl text-slate-500 font-bold italic">TRAIL REVIEW</p>
          <hr class="w-24 bg-amber-500 m-auto my-4" />
          <p class="text-6xl text-white font-bold">ASPHALT</p>
          <p class="text-xl text-white">NATIONAL PARK</p>
        </div>
        <button class="bg-amber-300 px-4 py-1 rounded mt-6">SEE REVIEW</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import ProductBox from '@/components/ProductBox'

export default {
  name: 'Home',
  data() {
    return {
      latestProducts: [],
      boxesItems: [
        {
          img: 'https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/story-1.jpg',
          header: 'SPLASH CHIC',
          subheader: "WOMEN'S WET GEAR",
        },
        {
          img: 'https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/story-2.jpg',
          header: 'KID CLIMBERS',
          subheader: "CHILDREN'S GEAR",
        },
        {
          img: 'https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/story-3.jpg',
          header: 'PACK IT IN',
          subheader: 'CAMPING GEAR',
        },
        {
          img: 'https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/story-4.jpg',
          header: "NATURE'S AC",
          subheader: "MEN'S SHORTS",
        },
      ],
    }
  },
  components: {
    ProductBox
  },
  mounted() {
    this.getLatestProducts()

    document.title = 'Home | Djackets'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)

      await axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })

      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>

<style>
#hero-image {
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/hero_bkgd_v1.jpg");
}

#image-box {
	background-image: url('https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/img-vistas.jpg');
}
</style>
