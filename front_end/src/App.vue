<template>
  <div id="app">
    <!-- 상단바 -->
    <div class="header">
      <div class="logo">FMS</div>
      <div class="menu-btn" @click="toggleMenu">☰</div>
    </div>

    <!-- 사이드 메뉴 -->
    <div :class="['side-menu', { 'open': isMenuOpen }]">
      <!-- 사이드 메뉴 내용 -->

      <div class="menu-content">
        <div class="menu-header">
          <div class="close-btn" @click="toggleMenu">✕</div>
          <div class="info-box" @click="showModal = true">
            <h3>정보 칸</h3>
          </div>
          <div class="info-box" @click="showModal = true">
            <h3>정보 칸</h3>
          </div>
        </div>
        
        
        <ul class="menu-list">
          <li>메뉴 항목 1</li>
          <li>메뉴 항목 2</li>
          <li>메뉴 항목 3</li>
        </ul>
      </div>
    </div>

    <!-- 메인 콘텐츠 -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // 메뉴가 열려 있는지 여부
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>



<style>
html, body {
  margin: 0;
  padding: 0;
  height:100%;
}
</style>


<style scoped>
/* 전체 레이아웃 스타일 */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 상단바 스타일 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5a5a5a;
  color: white;
  padding: 10px 20px;
}

.logo {
  font-size: 24px;
}

.menu-btn {
  font-size: 30px;
  cursor: pointer;
}

.close-btn {
  
  margin-top: -13px;
  right: 15px;
  font-size: 37px;
  cursor: pointer;
  color: white;
  
}

/* 사이드 메뉴 스타일 */
.side-menu {
  position: fixed;
  top: 0;
  right: -20%;
  width: 20%;
  height: 100%;
  background-color: #333;
  color: white;
  transition: right 0.3s ease-in-out;
  z-index: 100;
}

.side-menu.open {
  right: 0;
}

.menu-header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.menu-content {
  padding: 20px;
}

.menu-content ul {
  list-style-type: none;
  padding: 0;
}

.menu-content li {
  padding: 10px 0;
}

/* 메뉴 칸의 정보 박스 */
.info-box {
  padding: 50px 21px;
  width: 300px;
  color: white;
  background-color: #5a5a5a;
  
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  margin-bottom: 20px;
}


/* 메인 콘텐츠 스타일 */
.main-content {
 
  padding: 20px;
  background-color: #f4f4f4;
  flex-grow: 1;
}
</style>
