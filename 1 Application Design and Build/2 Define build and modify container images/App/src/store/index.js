import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cart: {
        items: [],
    },
    userInfo: {

    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }

      if (localStorage.getItem('token')) {
          state.token = localStorage.getItem('token')
          state.isAuthenticated = true
      } else {
          state.token = ''
          state.isAuthenticated = false
      } 
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(i => i.product.id === item.product.id)
      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.cart.items.push(item)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
    },  
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
        state.userInfo = {}
    },
    clearCart(state) {
      state.cart = { items: [] }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
  actions: {
    loadUserInfo(context) {
      axios
        .get('/api/v1/me/')
        .then(response => {
          context.commit('setUserInfo', response.data)
        })
        .catch( () => {
          context.commit('setUserInfo', {})
        })
    },
  },
  modules: {
  }
})
