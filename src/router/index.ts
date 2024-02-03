import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterPage from '../public/RegisterPage.vue'
import LoginPage from '../public/LoginPage.vue'
import SecurePage from '../secure/SecurePage.vue'
import DashboardPage from '../secure/dashboard/DashboardPage.vue'
import UsersPage from '../secure/users/UsersPage.vue'
import UsersCreate from '../secure/users/UsersCreate.vue'
import UsersEdit from '../secure/users/UsersEdit.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/register', component: RegisterPage},
  { path: '/login', component: LoginPage },
  { path: '', component: SecurePage, children: [
    {path: '', redirect: '/dashboard'},
    {path: '/dashboard', component: DashboardPage},
    {path: '/users', component: UsersPage},
    {path: '/users/create', component: UsersCreate},
    {path: '/users/:id/edit', component: UsersEdit}
  ]}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
