<template lang="html">
  <div class="inscription">
      <form class="w-50 mx-auto">
        <h1>Créer un compte</h1>
          <div class="form-group">
              <label>Prénom</label>
              <input class="form-control" type="text" v-model="prenom">
          </div>
          <div class="form-group">
              <label>Nom</label>
              <input class="form-control" type="text" v-model="nom">
          </div>
          <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="number" v-model="email">
          </div>
          <div class="form-group">
              <label>Mot de passe</label>
              <input class="form-control" type="number" v-model="mdp">
          </div>
          <div class="form-group">
              <label>Confirmation de mot de passe</label>
              <input class="form-control" type="number" v-model="confirmation">
          </div>
          <button class="btn btn-success" type="button" name="button" v-on:click="SignUp(prenom, nom, email, mdp ,confirmation)">Créer</button>
      </form>
  </div>
</template>

<script>

import *********************** from '../services/************************.vue'

export default {
  data () {
    return {
    prenom: '' ,
    nom: '' ,
    email: '',
    mdp: '',
    confirmation: ''
    }
  },
  methods: {
    ************: function (prenom, nom, email, mdp, confirmation) {
      ************.SignUp(prenom, nom, email, mdp, confirmation).then(alert("created!"));
    }
  }
};
</script>

<style lang="css" scoped>


</style>
