<template>
  <div class="header-container">
    <header class="the-header nav-list">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
 
      <div class="logo">
        <nuxt-link to="/">
          <span class="logo-and-icon-container">
             <span class="logo-title">Home</span><img class="home-icon" src="~/static/assets/icons/home-icon.svg"/>
           </span>
        </nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/about">
              <span class="about-me-and-icon-container"><img class="contact-icon" src="~/static/assets/icons/about-icon.svg"/>AboutMe</span>
            </nuxt-link>
          </li>
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
  border-bottom:1px solid rgba(113, 224, 159, 0.749);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo-and-icon-container{
  display: flex;
}

.logo {
  margin: 0 10px;
  font-size: 1.36rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.logo-title{
  margin-right: 0.4rem;
}

.home-icon{
  background: white;
  border-radius: 0.2rem;
  padding: 0.1rem;
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-top: 0.2rem;
}

.about-me-and-icon-container{
  display: flex;
  margin-right: 1.4rem;
}

.contact-icon{
  border-radius: 0.6rem;
  background: white;
  max-height: 1.4rem;
  margin-top: 0.05rem;
  margin-right: 0.4rem;
  border: 0.1px solid black;
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
