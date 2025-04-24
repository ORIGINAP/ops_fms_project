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
      // 로그인 추후 추가
    },
  },
};
</script>
  
<style scoped>
  /* 추후 스타일 추가 */
</style>