<template>
    <div class="card">
        <div class="card-header">
            <!-- TagUserProfile -->
            <div class="text-start">
                <img src="img/cheems.jpg" width="50"/>
            </div>
            <!-- TagUserProfile -->
            <h5>
                Usuario que publico
            </h5>
        </div>
        <div class="card-body">
            <div class="container w-75 h-75 mt-4">
                <div class="row">
                    <!-- Publication photo -->
                    <div class="col d-none d-lg-block col-md-5 col-log-5 col-xl-6 rounded" style="background-image: url(img/fondo.jpg)">
                    </div>
                    <!-- Publication content -->
                    <div class="col bg-danger p-5 border border-secondary border-1">
                        Aqui van los comentarios



                        <!-- Make a comment - Input -->
                        <footer>
                            <div class="row g-3">
                                <div class="col-auto">
                                    <img for="inputPassword6" class="img-fluid rounded" width="45" height="45" src="img/cheems.jpg"/>
                                </div>
                                <div class="col d-grid">
                                    <textarea type="text" id="inputPassword6" class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>