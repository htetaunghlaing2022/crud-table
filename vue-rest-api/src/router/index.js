import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/companies',
      name: 'CompanyIndex',
      component: () => import("../views/companies/CompanyIndex.vue"),
    },
    {
      path: '/companies/create',
      name: 'CompanyCreate',
      component: () => import("../views/companies/CompanyCreate.vue"),
    },
    {
      path: '/companies/:id/edit',
      name: 'CompanyEdit',
      component: () => import("../views/companies/CompanyEdit.vue"),
    },
    {
      path: '/employees',
      name: 'EmployeeIndex',
      component: () => import("../views/employees/EmployeeIndex.vue"),
    },
    {
      path: '/employees/create',
      name: 'EmployeeCreate',
      component: () => import("../views/employees/EmployeeCreate.vue"),
    },
    {
      path: '/employees/:id/edit',
      name: 'EmployeeEdit',
      component: () => import("../views/employees/EmployeeEdit.vue"),
      props: true,
    },
  ],
});

export default router
