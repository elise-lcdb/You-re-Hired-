<template lang="html">
  <div class="connexion">
    <h1>Se Connecter</h1>
      <form class="w-50 mx-auto">
          <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="text" v-model="email">
          </div>
          <div class="form-group">
              <label>Mot de passe</label>
              <input class="form-control" type="text" v-model="mdp">
          </div>
          <button class="btn btn-success" type="button" name="button" v-on:click="SignIn( email, mdp)">Connexion</button>
      </form>
  </div>
</template>

<script>

import *********************** from '../services/************************.vue'

export default {
  data () {
    return {
    email: '',
    mdp: ''
    }
  },
  methods: {
    ************: function ( email, mdp ) {
      **********.SignIn( email, mdp );
    }
  }
};
</script>

<style lang="css" scoped>


</style>
