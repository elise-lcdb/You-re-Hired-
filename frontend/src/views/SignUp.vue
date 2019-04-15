<template lang="html">
  <div class="inscription">

      <h1>Créer un compte</h1>

      <div id="formulaire">
      <form class="w-50 mx-auto">
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
          <button class="col-xs-6 btn btn-secondary" type="button" name="button" v-on:click="SignUp(prenom, nom, email, mdp ,confirmation)">Inscription</button>
      </form>
  </div>
</div>
</template>

<style type="text/css">

  h1{
    margin-left: 370px;
    margin-top: 50px;
  }
  
  #formulaire{
    margin-top: 50px;
  }
  button{
    width: 300px;
    height: 50px;
    margin-left: 110px;
    margin-top: 50px;
  }
</style>

