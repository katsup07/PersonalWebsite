<template>
  <div>
    <MessagesViewer v-if="isAuth"/>
  </div>
</template>
<script>
import MessagesViewer from '../../../components/MessagesViewer.vue';

export default {
  components:{
    MessagesViewer,
  },
  computed:{
     isAuth(){
      return !!this.$store.getters.getWebToken;
    }
  }
}
</script>

