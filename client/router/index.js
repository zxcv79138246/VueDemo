import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Professor from '../views/Professor'
import ThirteenFloor from '../views/ThirteenFloor'
import FourteenFloor from '../views/FourteenFloor'
import SixteenFloor from '../views/SixteenFloor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: About,
    children: [{
      path: '1324',
      name: 'thirteen',
      component: ThirteenFloor
    }, {
      path: '1421',
      name: 'fourteen',
      component: FourteenFloor
    }, {
      path: '1603',
      name: 'sixteen',
      component: SixteenFloor
    }]
  }, {
    path: '/professor',
    component: Professor
  }, {
    path: '*',
    component: Home
  }]
})