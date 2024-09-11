<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { userRole } from '../store/auth';  // 引入角色管理

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const signin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // 检查用户角色并进行跳转
    if (userRole.value === "admin") {
      router.push("/about");  // 管理员页面
    } else {
      router.push("/");  // 普通用户页面
    }
  } catch (error) {
    console.error("Login error:", error.message);
  }
};
</script>
