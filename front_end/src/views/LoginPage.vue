<template>
  <div class="login">
    <input v-model="username" placeholder="아이디" class="input" />
    <input v-model="password" type="password" placeholder="비밀번호" class="input" />
  </div>
</template>
<button @click="login" class="btn">로그인</button>
  
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }
    if (this.username === 'admin' && this.password === '1234') {
      this.$router.push('/main');
    } else {
      alert('로그인 실패');
    }
    },
  },
};
</script>
  
<style scoped>
.input {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
}

.btn {
  background-color: #254081;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}
.btn:hover {
  background-color: #1f3268;
}
</style>