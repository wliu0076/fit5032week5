import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import GetBookCountView from '../views/GetBookCountView.vue';
import LoginView from '../views/LoginView.vue';
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue';
import FirebaseSignInView from '../views/FirebaseSigninView.vue';
import { isAuthenticated, userRole } from '../store/auth';  // 导入认证状态和用户角色
import AddBookView from '../views/AddBookView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true, role: 'admin' }  // 管理员页面
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/getbookcount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/Fireregister',
    name: 'Fireregister',
    component: FirebaseRegisterView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSignInView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由守卫：检查认证状态和角色
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!isAuthenticated.value) {
      // 用户未登录，重定向到登录页面
      return next('/login');
    } 
    
    if (to.meta.role && to.meta.role !== userRole.value) {
      // 角色不匹配，阻止访问
      return next('/');
    }
  }
  
  next();  // 继续导航
});

export default router;
