import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { isAuthenticated } from './store/auth';  // 假设你有 store 管理 isAuthenticated

// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyB8o8g7HwfBpLx9Pb2UPlZb6J3tpBK8zf0",
  authDomain: "week7-weiliu.firebaseapp.com",
  projectId: "week7-weiliu",
  storageBucket: "week7-weiliu.appspot.com",
  messagingSenderId: "700482215056",
  appId: "1:700482215056:web:8b8a069ca69bdb33190c15",
  measurementId: "G-7RKB6YHEQL"
};

// 初始化 Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

// 检查认证状态并更新 isAuthenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    isAuthenticated.value = true;  // 用户已登录
  } else {
    isAuthenticated.value = false;  // 用户未登录
  }
});

const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);
app.mount('#app');
