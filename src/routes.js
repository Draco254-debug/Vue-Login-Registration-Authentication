import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Registration from './pages/Registration.vue';
import ForgotPassword from './pages/ForgotPassword.vue';
import ResetPassword from './pages/ResetPassword.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/forgotpassword', component: ForgotPassword },
  { path: '/resetpassword', component: ResetPassword },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
