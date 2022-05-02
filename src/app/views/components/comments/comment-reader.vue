<template>
    <div class="col-md-12 col-reader">
        <div class="d-flex my-2 p-2">
            <!-- Foto de perfil del comentador -->
            <img src="img/cheems.jpg" class="avatar-sm rounded-circle mx-3" height="50" alt="Avatar"/>

            <!-- Comentador Info. -->
            <div class="message flex-grow-1">
                <div class="d-flex">
                    <!-- NombreComentador -->
                    <p class="mb-1 text-title text-16 flex-grow-1">
                        Lalo Her 
                    </p>
                    <!-- FechaCreacion -->
                    <span class="text-small text-muted">
                        12-12-2022
                    </span>
                </div>
                <!-- ContenidoComentario -->
                <p class="m-0">
                    oijaefijesfjes;fjeas;oiofjeaio
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentReader"
    };
</script>

<style lang="css" scoped>
    .col-reader{
        position: relative;
        height: 225px;
        overflow-y: scrool;
    }
</style>