<template>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container">
            <a class="navbar-brand text-white" href="#"><img src="../assets/you're hired logo.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="col-md-2" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="col-md-2" href="#">Annonces</a>
                    </li>
                    <li class="nav-item">
                        <router-link tag="a" to="/Profil" class="">Profil</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="col-md-2" href="#">Déconnetion</a>
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
	background: #7f8c8d;
}
ul li a{
	color: black;
}
</style>