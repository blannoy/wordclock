import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

Vue.axios.get('/api/status')
    .then(response => {
      const store = new Vuex.Store({
        state: response.data,
        mutations: {
          ledMode(state, mode) { state.leds.mode = mode },
          singleHue(state, hue) { state.leds.singleHue = hue },
          wordHue(state, args) { state.leds.wordHues[args.index] = args.hue },
          hourlyHue(state, args) { state.leds.hourlyHues[args.index] = args.hue },
          maxBrightness(state, brightness) { state.leds.brightness.max = brightness },
          minBrightness(state, brightness) { state.leds.brightness.min = brightness },
          brightnessType(state, type) { state.leds.brightness.mode = type },
          brightnessStartHour(state, hour) { state.leds.brightness.startHour = hour },
          brightnessEndHour(state, hour) { state.leds.brightness.endHour = hour },
          hostname(state, value) { state.hostname = value }
        }
      })

      new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
      })
  })
