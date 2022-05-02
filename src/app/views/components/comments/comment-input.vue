<template>
    <div class="input-group mb-3">
        <span id="arregloToInput" class="input-group-text text-primary">
            <strong class="text-info">!</strong>
        </span>
        <input type="text" class="form-control" placeholder="Escribe un comentario. . ."/>
    </div>
</template>

<script>
    export default {
        name: "CommentInput"
    };
</script>

<style lang="css" scoped>
    span{
        background: none;
    }
</style>