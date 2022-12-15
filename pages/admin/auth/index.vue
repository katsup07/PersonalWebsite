<template>
  <div class="admin-auth-page">
    <div class="login-container" v-if="!isAuth">
      <h1>Admin Login</h1>
      <form @submit.prevent="loginHandler">
        <AppControlInput type="email" v-model="enteredEmail">E-Mail Address</AppControlInput>
        <AppControlInput type="password" v-model="enteredPassword">Password</AppControlInput>
        <AppButton type="submit">{{ isSignedUp ? 'login' : 'sign up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isSignedUp = !isSignedUp">Switch to {{ isSignedUp ? 'sign up' : 'login' }}</AppButton>
      </form>
    </div>
    <div class="login-container" v-if="isAuth">
      <h1>Logout</h1>
      <div class="logout-btn">
        <AppButton @click="logoutHandler" :class="'confirm'">Confirm</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import { signUserInOrUp } from '@/util/helpers.js'

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isSignedUp: !this.isAuth,
      enteredEmail: '',
      enteredPassword: '',
    }
  },
  computed:{
    isAuth(){
      console.log('isAuth() in auth page', !!this.$store.getters.getWebToken, this.$store.getters.getWebToken);
      return !!this.$store.getters.getWebToken;
    }
  },
  methods:{
    async loginHandler(){
      console.log('calling loginHandler()...');
      console.log(this.enteredEmail, this.enteredPassword);
      const mode = this.isSignedUp ? 'login' : 'sign up';
      const emailData = {email: this.enteredEmail, password: this.enteredPassword};
      const webToken = await signUserInOrUp(mode, emailData)
       if(!!webToken){
          this.$store.dispatch('setWebToken', webToken);
          return this.$router.push('/admin/messages');
       }
       this.$router.push('/error');
    },
    
    logoutHandler(){
      console.log('calling logoutHandler()...');
      this.$store.dispatch('setWebToken', '');
    }
  }
}
</script>

<style scoped>

h1{
  margin: 0;
  margin-bottom: 0.2rem;
  font-size: 1.5rem;
  text-align: center;
  color: rgb(46, 46, 46);
}
.admin-auth-page {
  padding: 20px;
}

.login-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.logout-btn{
  text-align: center;
}
</style>