<template>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container">
            <router-link tag="a" to="/" class="navbar-brand text-white">
            <img src="../assets/you're hired logo white.png">
        </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link tag="a" to="/Profil" class="">Profil</router-link>
                        &nbsp:
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/MesAnnonces" class="">Mes Annonces</router-link>
                        &nbsp:
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/create" class="">Créer Une Annonce</router-link>
                        &nbsp:
                    </li>
                       <!-- <li class="nav-item">
                        <router-link tag="a" to="/SignUp" class="col-md-2">Inscription</router-link>
                    </li>
                      <li class="nav-item">
                        <router-link tag="a" to="/SignIn" class="col-md-2">Connexion</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/Profil" class="">Profil</router-link>
                    </li> -->
                    <li class="nav-item">
                        <router-link tag="a" to="/SignIn" class="">Déconnexion</router-link>
                      
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
img{
	width: 20%;
}
nav{
	background: #111135;
}
ul li a{
	color: white;
}
</style>