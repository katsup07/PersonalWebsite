<template>
  <div class="header-container">
    <header class="the-header nav-list">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">Worksplorer</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/about">AboutMe</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/posts">Topics</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin/auth" v-if="!isAuth">Login</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin/auth" v-if="isAuth">Logout</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin/messages" v-if="isAuth">Messages</nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "./TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
  },
  computed: {
    isAuth(){
      console.log('isAuth() in TheHeader: ', this.$store.getters.getWebToken);
      return !!this.$store.getters.getWebToken;
    }
  }
};
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(33, 31, 31);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: rgb(243, 123, 123);
}
</style>
