'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Home from './home.vue'
import Template from './template.vue'
import Deep from './deep.vue'

Vue.use(Router)

let App = Vue.extend({})
let router = new Router()

router.map({
  '/': {
    component: Template,
    subRoutes: {
      '/home': { component: Home },
      '/deep': { component: Deep }
    }
  }
})

router.redirect({ '/': '/home' })

router.start(App, 'body');
