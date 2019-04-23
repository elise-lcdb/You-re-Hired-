<template lang="html">

  <div class="annonce">
    <div style="background: #373A5D">
      <div class="container">
        <br>
        <br>
        <h1 style="color: white; text-align: center;"><b>Le titre d'annonce</b></h1>
        <br>
        <br>
      </div>
    </div>
    <br>
    <br>
    <div class="container col-md-8" style="background: white;" v-if="!editMode">
      <br>
      <h4><b>Description de l'offre</b></h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br>
       <h4><b>Rôle</b></h4>
      <p>Dev</p>

    <h4><b>Compétence clé</b></h4>
    <span class="badge badge-warning" style="background: #E3B68C !important; padding: 5px 10px;">VueJs</span>
      &nbsp;
      <span class="badge badge-warning" style="background: #E3B68C !important; padding: 5px 10px;">HTML</span>
      &nbsp;
      <span class="badge badge-warning" style="background: #E3B68C !important; padding: 5px 10px;">CSS</span>
      <br>
      <br>


      <h4><b>École</b></h4>
      <p>Ingésup</p>
      <br>
      <h4><b>Contact</b></h4>
      <p>example@ynov.com</p>
      <br>
      <div style="float:right">
      <button type="button" class="btn btn-primary" style="width: 120px;" @click="editMode = true">Modifier</button>
    </div>
    <br>
    <br>
    </div>
    <div class="container col-md-8" style="background: white;" v-if="editMode">
      <form >
  <div class="form-group">
    <label for="price"><h4><b>Description</b></h4></label>
    <textarea class="form-control" rows="5" v-model="description"></textarea>
  </div>
  <div class="form-group">
    <label for="tva"><h4><b>Rôle</b></h4></label>
    <input type="text" class="form-control" id="tva" v-model="role">
  </div>
  <div class="form-group">
    <label for="tva"><h4><b>Compétences Clés</b></h4></label>
    <input type="text" class="form-control" id="tva" v-model="competences">
  </div>
  <div class="form-group">
    <label for="tva"><h4><b>Ecole</b></h4></label>
    <input type="text" class="form-control" id="tva" v-model="membre">
  </div>
  <div class="form-group">
    <label for="tva"><h4><b>Contact</b></h4></label>
    <input type="text" class="form-control" id="tva" v-model="membre">
  </div>
 <!--  <button type="button" name="button" class="" v-on:click="formData(name,chef, description,membre, debut, fin)">Valider</button> -->
  <div style="float:right;">
<button type="button" class="btn btn-success" style="width: 120px; margin-right: 10px" @click="editMode = false">Sauvegarder</button>
<button type="button" class="btn btn-danger" style="width: 120px;" @click="editMode = false">Supprimer</button>
</div>
</form>
    </div>



  </div>




</template>
<script>
  export default{
    data(){
      return{
        editMode: false,
      }
    }
  }
</script>
<style type="text/css">


h1{
  margin-left: 0;
}
</style>