<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">
            <img alt="Vue logo" src="./assets/logo.png" style="height:25px;" />
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">부위별 머신운동</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/custom" class="nav-link">커스텀</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/gymwear" class="nav-link">짐웨어 브랜드</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/community" class="nav-link">커뮤니티</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
export default {
	name : 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav.navbar-transparent {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
}

nav .navbar-nav a.nav-link {
  font-weight: bold;
  color: #2c3e50 !important;
  text-align:initial;
}

nav .navbar-nav a.router-link-exact-active {
  color: #42b983 !important;
}

.header { position:relative; }
.header .topline { position:relative; height:30px; margin:0 10px; }
.header .topline .headmenu { position:absolute; right:0; top:4px; }
.header .topline .headmenu a { font-weight:bold; color:#2c3e50; }
.header .topline .headmenu span { font-weight:bold; color:#2c3e50; cursor:pointer; text-decoration:underline; }
</style>