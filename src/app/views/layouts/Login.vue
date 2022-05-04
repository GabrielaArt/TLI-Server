<template>
    <div class="container w-75 mt-4 rounded shadow">
        <div class="row align-items-stretch">
            <!-- Image Login -->
            <div class="col bg d-none d-lg-block col-md-5 col-log-5 col-xl-6 rounded" style="background-image: url(img/fondo.jpg)">
            
            </div>
            <div class="col bg-light p-5 rounded-end">
                <div class="row">
                    <div class="col">
                        <div class="text-start">
                            <img src="img/large-logo.jpg" width="128"/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-end">
                            <img src="img/logo.jpg" width="48"/>
                        </div>
                    </div>    
                </div>

                <h2 class="fw-bold text-center py-5">Bienvenido</h2>
                
                <!-- Formulario - Login -->
                <form @submit.prevent="login(usuario)">
                    <div class="mb-4">
                        <label for="inpMail" class="form-label">Correo</label>
                        <input id="inpMail" type="mail" class="form-control" placeholder="example@example.ts" v-model="usuario.mail" required/>
                    </div>
                    <div class="mb-4">
                        <label for="inpPasswrd" class="form-label">Contraseña</label>
                        <input id="inpPasswrd" type="password" class="form-control" placeholder="***************" v-model="usuario.contrasenia" required/>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-success">
                            Acceder
                        </button>
                    </div>
                    <div class="my-2 text-center">
                        <a href="#">Registrate</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
class User {
    constructor(user, password){
        this.user = user,
        this.password = password
    }
}

export default {
    data() {
        return {
            usuario: new User()
        }
    },
    methods: {
        login(usuario){
            fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(usuario),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            .then(respuesta => respuesta.json())
            .then(respuesta => console.log(respuesta));
        }
    }
}
</script>

<style lang="css" scoped>
    .bg{
        background-position: center center;
    }
</style>