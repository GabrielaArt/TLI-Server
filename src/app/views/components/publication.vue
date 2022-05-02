<template>
    <div class="card overflow-hidden p-2 mb-3">
        <div class="row g-0">
            <!-- ImagenPost -->
            <div class="col-md-3 d-flex justify-content-center">
                <img src="img/fondo.jpg"  height="300px" class="img-fluid rounded-center rounded-0"/>
            </div>
            <div class="col-md-9 border">
                <div class="card-body">
                    <!-- Cajita de comentarios -->
                    <CommentReader/>
                    <!-- Campo de comentario -->
                    <div class="col-md-12 d-flex align-items-center h-25 py-2">
                        <CommentInput/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CommentInput from '../components/comments/comment-input.vue'
    import CommentReader from '../components/comments/comment-reader.vue'

    export default {
        name: "PublicationContainer",
        components: { CommentInput, CommentReader }
    }
</script>