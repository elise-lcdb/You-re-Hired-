<template lang="html">
  <div class="connexion">
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container col-md-6" style="background: white">
      <div class="row">
        <div class="col-md-8">
          <br>
    <h2>Créer un compte</h2>
      <form >
          <div class="form-group">
              <input class="form-control" type="text" v-model="prenom" placeholder="Prénom">
          </div>
          <div class="form-group">
              <input class="form-control" type="text" v-model="nom" placeholder="Nom">
          </div>
          <div class="form-group">
              <input class="form-control" type="text" v-model="email" placeholder="Email">
          </div>
          <div class="form-group">
              <input class="form-control" type="password" v-model="mdp" placeholder="Mot de passe">
          </div>
          <div class="form-group">
              <input class="form-control" type="password" v-model="confirmation" placeholder="Confirmation de mot de passe">
          </div>
          <br>
          <center>
          <button class="col-xs-6 btn btn-secondary" type="button" name="button" v-on:click="SignUp(prenom, nom, email, mdp ,confirmation)" style="background: #0F0F31 !important">Confirmer</button>
        </center>
        <br>
        <router-link to="/SignIn" tag="a" style="font-size: 10px">
        Déja un compte? Se Connecter.
      </router-link>
      <br>
      </form>
    </div>
    <div class="col-md-4" style="background: #373A5D">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <img src="../assets/you're hired logo white.png" style="width: 100%">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
    </div>
    </div>
  </div>
</template>

<style scoped>


  
  #formulaire{
    margin-top: 50px;
  }

</style>
