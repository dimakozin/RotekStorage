import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import FirstRack from '../views/Racks/FirstRack.vue'
import SecondRack from '../views/Racks/SecondRack.vue'
import ThirdRack from '../views/Racks/ThirdRack.vue'
import FourthRack from '../views/Racks/FourthRack.vue'
import FifthRack from '../views/Racks/FifthRack.vue'
import SixthRack from '../views/Racks/SixthRack.vue'
import Help from '../views/Help.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/first',
    name: 'firstRack',
    component: FirstRack
  },
  {
    path: '/second',
    name: 'secondRack',
    component: SecondRack
  },
  {
    path: '/third',
    name: 'thirdRack',
    component: ThirdRack
  },
  {
    path: '/fourth',
    name: 'fourthRack',
    component: FourthRack
  },
  {
    path: '/fifth',
    name: 'fifthRack',
    component: FifthRack
  },
  {
    path: '/sixth',
    name: 'sixthRack',
    component: SixthRack
  },
  {
    path: '/',
    name: 'help',
    component: Help
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'is-active',
})

export default router
