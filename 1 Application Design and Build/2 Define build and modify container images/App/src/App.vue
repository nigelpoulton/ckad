<template>
  <div class="max-w-screen-xl m-auto h-40">
    <nav class="h-24 flex justify-between border-b-2 border-gray-400">
      <div class="grow-0 w-1/5">
        <router-link to="/"><img class="h-20" src="@/assets/carved-rock-logo.png"/></router-link>
      </div>
      <div class="grow pt-4">

        <div id="search-holder" class="h-8">
          <input type="text"
            placeholder="What can we help you find?"
            class="border border-gray-300 rounded w-96 h-full px-2" />
          <button class="bg-gray-500 text-white h-full px-4">SEARCH</button>
        </div>

        <div class="w-full flex justify-start mt-2">
          <router-link to="/clothing"><span class="text-lg text-amber-500 font-bold mr-4">CLOTHING</span></router-link>
          <router-link to="footwear"><span class="text-lg text-amber-500 font-bold mr-4">FOOTWEAR</span></router-link>
          <router-link to="equipment"><span class="text-lg text-amber-500 font-bold mr-4">EQUIPMENT</span></router-link>
          <router-link to="bags-travel"><span class="text-lg text-amber-500 font-bold mr-4">BAGS & TRAVEL</span></router-link>
          <router-link to="trail-reviews"><span class="text-lg text-amber-500 font-bold mr-4">TRAIL REVIEWS</span></router-link>
        </div>

      </div>
      <div class="grow-0 w-1/5 p-4">
              <template v-if="$store.state.isAuthenticated">
                <div class="flex">
                  <div class="flex grow flex-col justify-center">
                    <router-link to="/my-account" class="">{{ $store.state.userInfo.username }}</router-link>
                    <div class="text-amber-500 text-xs">
                      <a href="/cart" class="text-xs text-amber-500">Your cart ({{ cartTotalLength }})</a> | <a @click="logout()" class="text-amber-500 text-xs cursor-pointer">Log out</a>
                    </div>
                  </div>
                  <div class="flex justify-center items-center ml-4">
                    <img class="rounded-full h-14" src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/profile-pic.jpg" />
                  </div>
                </div>
              </template>

              <template v-else>
                <router-link to="/log-in" class="button is-light">Log in</router-link>
              </template>
      </div>
    </nav>

    <section class="max-w-full">
      <router-view/>
    </section>

    <footer class="flex items-stretch">
      <div class="w-4/5 grow-0 p-4 bg-gray-400 grid grid-cols-4 uppercase justify-items-center gap-4">
        <div>
          <h3 class="text-base text-gray-700 font-bold my-3">customer support</h3>
          <p class="text-white text-sm font-light">contact us</p>
          <p class="text-white text-sm font-light">order tracker</p>
          <p class="text-white text-sm font-light">returns & refunds</p>
          <p class="text-white text-sm font-light">sizing store locator</p>
          <p class="text-white text-sm font-light">site map</p>
        </div>
        <div>
          <h3 class="text-base text-gray-700 font-bold my-3">company info</h3>
          <p class="text-white text-sm font-light">about us</p>
          <p class="text-white text-sm font-light">careers</p>
          <p class="text-white text-sm font-light">press</p>
          <p class="text-white text-sm font-light">sustainability</p>
          <p class="text-white text-sm font-light">afiliates</p>
          <p class="text-white text-sm font-light">students</p>
          <p class="text-white text-sm font-light">mobile apps</p>
        </div>
        <div>
          <h3 class="text-base text-gray-700 font-bold my-3">privacy and terms</h3>
          <p class="text-white text-sm font-light">privacy & security</p>
          <p class="text-white text-sm font-light">statement</p>
          <p class="text-white text-sm font-light">terms & conditions</p>
        </div>
        <div>
          <h3 class="text-base text-gray-700 font-bold my-3">customer support</h3>
          <p class="text-white text-sm font-light">contact us</p>
          <p class="text-white text-sm font-light">order tracker</p>
          <p class="text-white text-sm font-light">returns & refunds</p>
          <p class="text-white text-sm font-light">sizing store locator</p>
          <p class="text-white text-sm font-light">site map</p>
        </div>
        <div class="text-center text-gray-900 text-sm col-span-4">@ Pluralsight 2022</div>
      </div>
      <div class="w-1/5 grow-0 bg-gray-900 p-8">
        <img src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/logos/pluralsight-white.png" />
        <hr id="pluralsight-line"/>
        <p class="text-white text-sm mt-4 font-light">This site is created for demonstrative purposes only and does not offer any real products or services.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  async created() {
    const token = this.$store.state.token
    if (token) {
        this.$store.dispatch('loadUserInfo')
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  methods: {
    logout() {
        axios.defaults.headers.common["Authorization"] = ""

        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("userid")

        this.$store.commit('removeToken')

        this.$router.push('/')
    },
  },
  computed: {
      cartTotalLength() {
          let totalLength = 0

          for (let i = 0; i < this.cart.items.length; i++) {
              totalLength += this.cart.items[i].quantity
          }

          return totalLength
      }
  }
}
</script>

<style lang="scss">

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading {
    height: 80px;
  }
}

#pluralsight-line {
  background: linear-gradient(to right,#f05a28 0,#e80a89 100%);
}
</style>
