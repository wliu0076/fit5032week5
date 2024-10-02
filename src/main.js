import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { auth } from './firebase/init';  // 从 init.js 导入已初始化的 auth 实例
import { onAuthStateChanged } from 'firebase/auth';  // 导入 Firebase 认证监听器
import { isAuthenticated, userRole } from './store/auth';  // 从 store 导入用户认证状态和角色管理

// 监听认证状态并更新 isAuthenticated 和 userRole
onAuthStateChanged(auth, (user) => {
  if (user) {
    isAuthenticated.value = true;  // 用户已登录

    // 分配用户角色
    if (user.email === "admin@qq.com") {
      userRole.value = "admin";  // 管理员角色
    } else {
      userRole.value = "user";  // 普通用户角色
    }
  } else {
    isAuthenticated.value = false;  // 用户未登录
    userRole.value = null;  // 清空角色
  }
});

// 创建 Vue 应用并挂载
const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);
app.mount('#app');
