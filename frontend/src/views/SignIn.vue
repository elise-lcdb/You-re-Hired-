<template lang="html">
  <div class="connexion">
    <h1 id="titre">Se Connecter</h1>
      <form class="w-50 mx-auto">
          <div class="form-group" id="formulaire">
              <input class="form-control" type="text" v-model="email" placeholder="email">
          </div>
          <div class="form-group">
              <input class="form-control" type="password" v-model="mdp" placeholder="Mot de passe">
          </div>
          <button class="btn btn-secondary" type="button" name="button" v-on:click="SignIn( email, mdp)">Connexion</button>
      </form>
  </div>
</template>

<style type="text/css">

  #titre{
    margin-left: 410px;
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