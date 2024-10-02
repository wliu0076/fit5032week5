// firebase/init.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

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

// 初始化 Firebase 服务
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

// 导出 Firebase 服务
export { firebaseApp, auth, db, analytics }; 
