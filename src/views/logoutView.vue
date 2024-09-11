<template>
    <h1>Log out</h1>
    <button @click="logout">Log out</button>
  </template>
  
  <script setup>
  import { getAuth, signOut } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  const auth = getAuth();
  const router = useRouter();
  
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out:", auth.currentUser); // 打印用户状态
      router.push("/login");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };
  </script>
  