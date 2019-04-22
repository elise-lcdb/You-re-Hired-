 <template>
  <div>
    <div style="background: #373A5D;">
      <div class="container col-md-8">
        <br>
        <br>
      <div style="background:gray; display: inline-block; height: 70px; width: 70px; border-radius: 40px; margin-right: 15px;">
        
      </div>
      <h2 style="display: inline-block; color:white; font-size: 2.25em; vertical-align: text-bottom;"><b>Votre Profil</b></h2>
      <br>
      <br>
    </div>

    </div>
    <br>
    <br>
<div class="container col-md-8" style="background: white;">
	<!-- <i class="fas fa-user-circle"></i> -->
  <div v-if="!showProfile">
    <br>
    <form>
      <h4><b>Nom</b></h4>
      <p>Exemple</p>
      <br>
      <h4><b>Prénom</b></h4>
      <p>Exemple</p>
      <br>
      <h4><b>Ecole</b></h4>
      <p>Exemple</p>
      <br>
      <h4><b>Compétences</b></h4>
      <span class="badge badge-warning" style="background: #E3B68C !important; padding: 5px 10px;">VueJs</span>
      &nbsp;
      <span class="badge badge-warning" style="background: #E3B68C !important; padding: 5px 10px;">HTML</span>
      &nbsp;
      <span class="badge badge-warning" style="background: #E3B68C !important; padding: 5px 10px;">CSS</span>
      <br>
      <br>
      <div style="float:right">
      <button type="button" class="btn btn-primary" style="width: 120px;" @click="showProfile = true">Modifier</button>
    </div>
    <br><br>
    </form>
  </div>
<div v-if="showProfile">
  <br>
<form>
  <div class="form-group">
    <label for="name"><b>Nom</b></label>
    <input type="text" class="form-control" id="name" v-model="name">
  </div>
  <div class="form-group">
    <label for="price"><b>Prénom</b></label>
    <input type="text" class="form-control" id="prenom" v-model="prenom">
  </div>
  <div class="form-group">
    <label for="description"><b>Ecole</b></label>
    <input type="text" class="form-control" id="ecole" v-model="ecole">
  </div>

  <div class="form-group">
    <label for="tva"><b>Compétences</b></label>
    <input type="text" class="form-control" id="competences" v-model="comp">
  </div>
 
  <!-- <button type="button" name="btn2" class="col-md-3" v-on:click="formData(name, prenom, competences)">Proposer un projet</button>

  <empty class="col-md-3"></empty>

  <button type="button" name="btn2" class="col-md-4" v-on:click="formData(name, prenom, competences)">Participer à un projet</button> -->
</form>
<div style="float:right;">
<button type="button" class="btn btn-success" style="width: 120px; margin-right: 10px"  @click="showProfile = false">Sauvegarder</button>
<button type="button" class="btn btn-danger" style="width: 120px;" @click="showProfile = false">Annuler</button>
</div>
<br><br>
</div>
	</div>
</div>
</template>
<script>
  export default{
    data(){
      return{
        showProfile: false,
      }
    }
  }
</script>

<style scoped>

input{
	width: 40%;
}
#competences{
	height: 40%;
	width: 70%;
}
</style>