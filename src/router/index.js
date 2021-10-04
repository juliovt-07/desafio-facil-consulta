import Vue from 'vue'
import VueRouter from 'vue-router'
import Professional from '../views/Professional.vue'
import Attendance from '../views/Attendance.vue'
import Revision from '../views/Revision.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Professional',
    component: Professional,
    props: { title: 'Sobre o profissional' }
  },
  {
    path: '/atendimento',
    name: 'Attendance',
    component: Attendance,
    props: { title: 'Sobre o atendimento' }
  },
  {
    path: '/revisao',
    name: 'Revision',
    component: Revision,
    props: { title: 'Revisão do cadastro' }
  }
]

const router = new VueRouter({
  routes
})

export default router
