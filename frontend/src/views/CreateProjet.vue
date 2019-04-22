  <template>
	<div >
    <div style="background: #373A5D">
      <div class="container col-md-8">
        <br>
        <br>
        <form>
          <div class="form-group">
            <label for="name"><h4 style="color:white;"><b>Titre</b></h4></label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        </form>
        <br>
        <br>
      </div>
    </div>
    <br>
    <br>
    <div class="container col-md-8" style="background: white;">
      <br>
<form >
  <!-- <div class="form-group">
    <label for="name"> Name:</label>
    <input type="text" class="form-control" id="name" v-model="name">
  </div> -->
  <!-- <div class="form-group">
    <label for="name"> Nom du chef de projet:</label>
    <input type="text" class="form-control" id="name" v-model="chef">
  </div> -->
  
  <!-- <div class="form-group">
    <label for="description">Date de debut:</label>
    <input type="date" class="form-control" id="description" v-model="debut">
  </div>
  <div class="form-group">
    <label for="tva">Date de fin:</label>
    <input type="date" class="form-control" id="tva" v-model="fin">
  </div>
  <div class="form-group">
    <label for="tva">Membre recherché</label>
    <input type="date" class="form-control" id="tva" v-model="membre">
  </div> -->
  <div class="form-group">
    <label for="price"><h4><b>Description</b></h4></label>
    <textarea class="form-control" rows="5" v-model="description"></textarea>
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
<button type="button" class="btn btn-success" style="width: 120px; margin-right: 10px"  @click="showProfile = false">Sauvegarder</button>
<button type="button" class="btn btn-danger" style="width: 120px;" @click="showProfile = false">Supprimer</button>

</div>
<br>
<br>
</form>
</div>
	</div>
</template>