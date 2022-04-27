<template>
    <section class="row justify-content-center p-5">
        <section class="col-12 col-sm-6 col-md-3">
            <form class="form-container fmc">
                <div class="form-group">
                    <label for="inpMail">Correo</label>
                    <input id="inpMail" type="mail" class="form-control" placeholder="example@example.ts" required/>
                </div>
                <div class="form-group">
                    <label for="inpPasswrd">Contraseña</label>
                    <input id="inpPasswrd" type="password" class="form-control" placeholder="***************" required/>
                </div>
                <div class="form-group">
                    <a type="submit" class="btn btn-success">
                        Acceder
                    </a>
                </div>
                <div class="form-group text-center">
                    <router-link :to="{ path: '#' }">Registrate</router-link>
                </div>
            </form>
        </section>
    </section>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
    .fmc{
        background: #fff;
        padding: 30px;
        border-radius: 30px;
        box-shadow: 0px 0px 10px 0px #000;
        position: relative;
        top: 15vh;
    }
</style>