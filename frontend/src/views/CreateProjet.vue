  <template>
	<div >
<form >
  <div class="form-group">
    <label for="name"> Name:</label>
    <input type="text" class="form-control" id="name" v-model="name">
  </div>
  <div class="form-group">
    <label for="name"> Nom du chef de projet:</label>
    <input type="text" class="form-control" id="name" v-model="chef">
  </div>
  
  <div class="form-group">
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
  </div>
  <div class="form-group">
    <label for="price">Description:</label>
    <input type="text" class="form-control" id="" v-model="description">
  </div>
  <button type="button" name="button" class="" v-on:click="formData(name,chef, description,membre, debut, fin)">Valider</button>
</form>
	</div>
</template>