import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

/* Páginas */
import Index from './components/pages/index/index'
import Clientes from './components/pages/clientes/clientes'

Vue.use(VueRouter)

export var router = new VueRouter()

// Configuração das rodas e match para os componentes

router.map({
  '/index': {
    component: Index
  },

  '/clientes': {
    component: Clientes
  }
})

router.redirect({
  '*': '/index'
})

router.start(App, 'app')
