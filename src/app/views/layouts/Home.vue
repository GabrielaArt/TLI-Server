<template>
    <Navbar/>
    <main class="content px-4">
        <div class="row d-flex justify-content-center">
            <!-- Contenedor publicaciones (izquierda) -->
            <div class="col-md-8 p-2">
                <PubContainer/>
            </div>
            <!-- Contenedor notificaciones (derecha) -->
            <div class="col-lg-4 col-md-4 p-2 border">
                <div class="card text-center v-100">
                    <div class="card-header">
                        NOTIFICATIONS
                    </div>
                </div>
                <div class="row p-3">
                    <div class="col-md-12" style="position: relative; height: 550px; overflow-y:scrool;">
                        <div class="card my-3" style="height:100px;">
                            <div class="card-text">
                                <div class="flex-grow-1">
                                    <div class="d-flex align-items-center">
                                        <p class="text-title text-16 flex-grow-1">
                                            <b>Usuario S:</b> publish: <br>
                                            <span> Contenido notifiaccion </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Navbar from '../components/nav-bar.vue';
    import PubContainer from '../components/publication.vue';

    export default {
        components: { Navbar, PubContainer }
    }
</script>