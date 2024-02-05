import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterPage from '../public/RegisterPage.vue'
import LoginPage from '../public/LoginPage.vue'
import SecurePage from '../secure/SecurePage.vue'
import DashboardPage from '../secure/dashboard/DashboardPage.vue'
import UsersPage from '../secure/users/UsersPage.vue'
import UsersCreate from '../secure/users/UsersCreate.vue'
import UsersEdit from '../secure/users/UsersEdit.vue'
import RolesPage from '../secure/roles/RolesPage.vue'
import RolesCreate from '../secure/roles/RolesCreate.vue'
import RolesEdit from '../secure/roles/RolesEdit.vue'
import ProductsPage from '../secure/products/ProductsPage.vue'
import ProductsCreate from '../secure/products/ProductsCreate.vue'
import ProductsEdit from '../secure/products/ProductsEdit.vue'
import OrdersPage from '../secure/orders/OrdersPage.vue'
import OrderItems from '../secure/orders/OrderItems.vue'
import ProfilePage from '../secure/profile/ProfilePage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/register', component: RegisterPage},
  { path: '/login', component: LoginPage },
  { path: '', component: SecurePage, children: [
    {path: '', redirect: '/dashboard'},
    {path: '/dashboard', component: DashboardPage},
    {path: '/profile', component: ProfilePage},
    {path: '/users', component: UsersPage},
    {path: '/users/create', component: UsersCreate},
    {path: '/users/:id/edit', component: UsersEdit},
    {path: '/roles', component: RolesPage},
    {path: '/roles/create', component: RolesCreate},
    {path: '/roles/:id/edit', component: RolesEdit},
    {path: '/products', component: ProductsPage},
    {path: '/products/create', component: ProductsCreate},
    {path: '/products/:id/edit', component: ProductsEdit},
    {path: '/orders', component: OrdersPage},
    {path: '/orders/:id', component: OrderItems},
  ]}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
