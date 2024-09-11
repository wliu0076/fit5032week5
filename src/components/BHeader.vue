<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">
            Home (Week 5)
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>
        <!-- 根据认证状态显示不同的导航项 -->
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/login" class="nav-link" active-class="active">
            Login
          </router-link>
        </li>
        <li class="nav-item" v-else>
          <button @click="logout" class="nav-link btn btn-link">
            Logout
          </button>
        </li>
        <li class="nav-item">
          <router-link to="/Fireregister" class="nav-link" active-class="active">Firebase register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Firelogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
      </ul>
    </header>

    <!-- 显示当前用户的角色 -->
    <div v-if="isAuthenticated" class="text-center">
      <p>Current Role: {{ userRole }}</p> <!-- 显示用户角色 -->
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';  // 导入 Firebase 认证函数
import { isAuthenticated, userRole } from '../store/auth';   // 导入认证状态和角色
import { useRouter } from 'vue-router';            // 导入路由

export default {
  setup() {
    const router = useRouter();
    const auth = getAuth();  // 获取当前认证实例

    const logout = async () => {
      try {
        const currentRole = userRole.value;
        const currentEmail = auth.currentUser ? auth.currentUser.email : 'Unknown user';
        console.log("User logging out:", currentEmail, "with role:", currentRole); // 打印用户状态

        await signOut(auth);  // 调用 Firebase 的 signOut 方法
        isAuthenticated.value = false;  // 更新认证状态
        userRole.value = null;  // 清空角色信息

        console.log('User signed out successfully');
        router.push('/login');  // 重定向到登录页面
      } catch (error) {
        console.error('Sign out error:', error);
      }
    };

    return {
      isAuthenticated,
      userRole,  // 绑定到模板
      logout
    };
  }
};
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
