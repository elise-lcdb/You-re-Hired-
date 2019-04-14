 <template>
<div class="container col-md-8">
	<i class="fas fa-user-circle"></i>
    <h2 class="col-md-12">  profil</h2>
  
<form >
  <div class="form-group">
    <label for="name"> Name:</label>
    <input type="text" class="form-control" id="name" v-model="name">
  </div>
  <div class="form-group">
    <label for="price">Prénom:</label>
    <input type="text" class="form-control" id="prenom" v-model="prenom">
  </div>
  <div class="form-group">
    <label for="description">Ecole:</label>
    <input type="text" class="form-control" id="ecole" v-model="ecole">
  </div>

  <div class="form-group">
    <label for="tva">Compétences:</label>
    <input type="text" class="form-control" id="competences" v-model="comp">
  </div>
 
  <button type="button" name="btn2" class="col-md-3" v-on:click="formData(name, prenom, competences)">Proposer un projet</button>

  <empty class="col-md-3"></empty>

  <button type="button" name="btn2" class="col-md-4" v-on:click="formData(name, prenom, competences)">Participer à un projet</button>
</form>
	</div>
</template>

<style scoped>
.container{
	margin-left: 25%;
}
input{
	width: 40%;
}
#competences{
	height: 40%;
	width: 70%;
}
</style>