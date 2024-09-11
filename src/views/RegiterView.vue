<template>
    <div class="registration-page">
      <h1 class="page-title">Library Registration Form</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-row">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" placeholder="Enter your username" required>
        </div>
        <div class="form-row">
          <label for="gender">Gender</label>
          <select id="gender" v-model="gender" required>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-row">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
        </div>
        <div class="form-row">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm your password" required>
        </div>
        <div class="form-row">
          <button type="submit" class="submit-button">Submit</button>
          <button type="reset" class="clear-button">Clear</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        gender: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSubmit() {
        // 表单提交逻辑
      }
    }
  };
  </script>
  
  <style scoped>
  .registration-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .page-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-row {
    margin-bottom: 15px;
  }
  
  .form-row label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-row input,
  .form-row select {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .clear-button {
    width: 100%;
    padding: 10px;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .clear-button:hover {
    background-color: #5a6268;
  }
  </style>
  