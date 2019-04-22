<template>
  <div id="app">
    <div v-if="$route.path != '/SignUp' " >
    <Header v-if="$route.path != '/SignIn' " />
  </div>
    <div >
    <router-view/>
</div>
<br>
<br>
    <Footer />
  </div>
</template>
<script>
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'

export default{
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

</style>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900');
  body{
    background: #F6F7F3;
    font-family: 'Roboto', sans-serif;
  }
</style>